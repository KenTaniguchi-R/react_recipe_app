import { useState, useEffect } from 'react'
import Select from 'react-select'

import reactLogo from './assets/react.svg'
import {mealType_options, dishType_options} from './filter_options'
import sampleRecipes from './sample_data'


// import './App.css'

// https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7

const DEBUG = false;

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
    console.log(url)
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

const Filters = ({setUrlParams}) => {

  const [caloriesRange, setCaloriesRange] = useState([0, 5000]);
  const [cookTimeRange, setCookTimeRange] = useState([0, 200]);
  const [mealType, setMealType] = useState([]);
  const [dishType, setDishType] = useState([]);

  const handleRange = (e, type) => {
    const {name, value} = e.target;
    const setFunction = type === 'calories' ? setCaloriesRange : setCookTimeRange;
    setFunction(prev => {
      if (name === 'min') {
        return [+value, +prev[1]]
      } else {
        return [+prev[0], +value]
      }
    })
  }



  const handleFilter = () => {
    const new_params = {}
    if (caloriesRange[0] !== 0 || caloriesRange[1] !== 5000) new_params.calories = `${caloriesRange[0]}-${caloriesRange[1]}`;
    if (cookTimeRange[0] !== 0 || cookTimeRange[1] !== 200) new_params.time = `${cookTimeRange[0]}-${cookTimeRange[1]}`;
    if (mealType.length !== 0) new_params.mealType = mealType.map(e => e.value);
    if (dishType.length !== 0) new_params.dishType = dishType.map(e => e.value);
    setUrlParams(new_params);
  }

  return (
    <div>
      <h2>Filter</h2>
      <div className='filters'>
        <div className='filter'>
          <h3>Calories Range</h3>
          <div className='filter_content'>
            <div className='num_range'>
              <input type="number" placeholder='min' name='min' value={caloriesRange[0]}
                min={0} max={2000} step={100} onChange={(e)=>handleRange(e, "calories")} /> -
              <input type="number" placeholder='max' name='max' value={caloriesRange[1]}
                min={0} max={2000} step={100} onChange={(e)=>handleRange(e, "calories")}/>
            </div>
          </div>
        </div>

        <div className='filter'>
          <h3>Cooking Time Range</h3>
          <div className='filter_content'>
            <div className='num_range'>
              <input type="number" placeholder='min' name='min' value={cookTimeRange[0]}
                min={0} max={200} step={10} onChange={(e)=>handleRange(e, "cooking_time")} /> -
              <input type="number" placeholder='max' name='max' value={cookTimeRange[1]}
                min={0} max={200} step={10} onChange={(e)=>handleRange(e, "cooking_time")}/>
            </div>
          </div>
        </div>

        <div className='filter'>
          <h3>Meal Type</h3>
          <div className='filter_content'>
            <Select options={mealType_options} defaultValue={mealType} isMulti closeMenuOnSelect={false} onChange={(e)=> setMealType(e)}/>
          </div>
        </div>

        <div className='filter'>
          <h3>Dish Type</h3>
          <div className='filter_content'>
            <Select options={dishType_options} defaultValue={dishType} isMulti closeMenuOnSelect={false} onChange={(e)=> setDishType(e)}/>
          </div>
        </div>
      </div>

      <button id="apply_filter" onClick={handleFilter}>Apply</button>
    </div>
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
          <img src={recipe.image} alt={recipe.label} />
          <p className='recipe_calories'>{Math.round(recipe.calories/recipe.yield)} kcal</p>
        </div>
        <p className='recipe_title'>{recipe.label}</p>
        <p className='recipe_source'>{recipe.source}</p>
      </a>
    </div>
  )
}


export default App
