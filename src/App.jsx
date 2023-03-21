import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import sampleRecipes from './sample_data'
// import './App.css'

// https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7

const DEBUG = true

const API_ENDPORT = "https://api.edamam.com/api/recipes/v2?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7&q="
let next_page;

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, storedValue)
  }, [storedValue])

  return [storedValue, setStoredValue]
}

const load_recipe = async (url) => {
  const data = await fetch(url)
  const response = await data.json()
  try{
    next_page = response._links.next.href
  }catch{
    next_page = null
  }
  return [response.hits, next_page]
}


const App = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', 'potato');
  const [searchingTerm, setSearchingTerm] = useState(searchTerm);
  const [recipes, setRecipes] = useState(DEBUG ? sampleRecipes : []);

  useEffect(() => {
    const load = async () => {
      let [hits, next_page] = await load_recipe(API_ENDPORT + searchTerm)
      setRecipes(hits)
    }
    if (!DEBUG) load()
  }, [searchTerm])

  return(
    <>
    <Nav setSearchTerm={setSearchTerm} searchingTerm={searchingTerm} setSearchingTerm={setSearchingTerm}/>
    <main>
      <div className='sidebar'>
        <h2>Sidebar</h2>
      </div>

      <div className='main_content'>
        <h1>Result: "{searchTerm}"</h1>
        <RecipeList recipes={recipes} setRecipes={setRecipes}/>
      </div>
    </main>
    </>
  )
}

const Nav = ({setSearchTerm, searchingTerm, setSearchingTerm}) => {

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value)
    }
  }

  const handleChange = (e) => {
    setSearchingTerm(e.target.value)
  }

  return(
    <nav className="nav">
      <div id='nav_logo'>
        <img src={reactLogo} alt="react logo" />
        <h1>Recipe App with React</h1>
      </div>
      <input type="text" onKeyPress={handleSubmit}
        value={searchingTerm} onChange={handleChange}
        placeholder='Search recipe by dish or ingredient' id='search_box' />
    </nav>
  )
}

const RecipeList = ({recipes, setRecipes}) => {

  const LoadMore = () => {
    const load = async () => {
      let [hits, next_n_page] = await load_recipe(next_page);
      setRecipes([...recipes, ...hits]);
      next_page = next_n_page;
    }
    load()
  }

  return (
    <div className='recipes'>
      {recipes.map((recipe) => {
        return <RecipeBox key={recipe.recipe.uri.split("#")[1]} recipe={recipe.recipe}/>}
      )}
      {next_page && <button id="load_more" onClick={LoadMore} >Load more...</button>}
    </div>
  )
}

const RecipeBox = ({recipe}) => {
  return (
    <div className='recipe_box'>
      <a href={recipe.url} target="_blank">
        <div className='recipe_image_box'>
          <img src={recipe.image} alt="vite logo" />
          <p className='recipe_calories'>{Math.round(recipe.calories)} kcal</p>
        </div>
        <p className='recipe_title'>{recipe.label}</p>
        <p className='recipe_source'>{recipe.source}</p>
      </a>
    </div>
  )
}


export default App
