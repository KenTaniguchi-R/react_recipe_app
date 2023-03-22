import { useState, useEffect } from 'react'

import Nav from './Nav'
import Filters from './Filter'
import RecipeList from './RecipeList'
import sampleRecipes from './sample_data'

// import './App.css'

// https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7

const DEBUG = true;

let API_ENDPORT = `https://api.edamam.com/api/recipes/v2?
type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7`;

const required_fields = ['uri', 'url', 'source', 'calories', 'label', 'yield', 'image', 'totalTime'];

required_fields.forEach(e => {
  API_ENDPORT += `&field=${e}`;
})

API_ENDPORT += '&q=';

let next_page;

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [storedValue])

  return [storedValue, setStoredValue];
}

const load_recipe = async (url) => {
  const data = await fetch(url);
  const response = await data.json();
  try{
    next_page = response._links.next.href;
  }catch{
    next_page = null;
  }
  return [response.hits, next_page];
}


const App = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', 'potato');
  const [urlParams, setUrlParams] = useState({});
  const [searchingTerm, setSearchingTerm] = useState(searchTerm);
  const [recipes, setRecipes] = useState(DEBUG ? sampleRecipes : []);

  useEffect(() => {
    const load = async () => {
      let [hits, next_page] = await load_recipe(API_ENDPORT + searchTerm);
      setRecipes(hits);
      setUrlParams({});
    }
    if (!DEBUG) load();
  }, [searchTerm])

  useEffect(() => {
    // create url from params
    let url = API_ENDPORT + searchTerm;
    for (const [key, value] of Object.entries(urlParams)) {
      if (value === '') continue;
      if (typeof value === 'object'){
        for (const [_, v] of Object.entries(value)){
          url += `&${key}=${v}`;
        }
      }else{
        url += `&${key}=${value}`;
      }
    }
    const load = async () => {
      let [hits, next_page] = await load_recipe(url);
      setRecipes(hits);
    }
    if (!DEBUG) load();
  }, [urlParams])

  return(
    <>
    <Nav setSearchTerm={setSearchTerm} searchingTerm={searchingTerm} setSearchingTerm={setSearchingTerm}/>
    <main>
      <h1>Result: "{searchTerm}"</h1>

      <div id='result_content'>
        <div className='sidebar'>
          <Filters setUrlParams={setUrlParams}/>
        </div>

        <div className='main_content'>
          <RecipeList recipes={recipes} setRecipes={setRecipes}/>
        </div>
      </div>
    </main>
    </>
  )
}


export default App
