const load_recipe = async (url) => {
    let next_page;
    const data = await fetch(url);
    const response = await data.json();
    try{
      next_page = response._links.next.href;
    }catch{
      next_page = null;
    }
    return [response.hits, next_page];
  }

const RecipeList = ({recipe_data, dispatchRecipes, next_page}) => {

    const LoadMore = () => {
        const load = async () => {
            dispatchRecipes({
                type: 'load_more_init'
            })
            let [hits, next_n_page] = await load_recipe(next_page);
            next_page = next_n_page;
            dispatchRecipes({
                type: 'load_more_success',
                payload: hits
            });
        }
    load()
    }

    return (
        <div className='recipes'>
        {recipe_data.recipes.map((recipe) => {
            return <RecipeBox key={recipe.recipe.uri.split("#")[1]} recipe={recipe.recipe} loading={recipe_data.loading}/>}
        )}
        {next_page && <button id="load_more" onClick={LoadMore} >Load more...</button>}
        </div>
    )
}

const RecipeBox = ({recipe, loading}) => {

    return (
        <div className='recipe_box'>
        {loading ?
            <div className="loading_box"></div>:
            <a href={recipe.url} target="_blank">
                <div className='recipe_image_box'>
                <img src={recipe.image} alt={recipe.label} />
                <p className='recipe_calories'>{Math.round(recipe.calories/recipe.yield)} kcal</p>
                </div>
                <p className='recipe_title'>{recipe.label}</p>
                <p className='recipe_source'>{recipe.source}</p>
            </a>
        }
        </div>
    )
}

export default RecipeList