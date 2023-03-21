import {useState} from 'react';
import Select from 'react-select'

import {mealType_options, dishType_options} from './filter_options'

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

export default Filters;