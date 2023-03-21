let next_page;

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

export default RecipeList