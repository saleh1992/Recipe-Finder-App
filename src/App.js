import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './components/CardSkeleton';
import { HiFilter } from 'react-icons/hi';



function App() {
  const APP_ID = '4a4959e6';
  const APP_KEY = '1a6290d1bc108e4cbbffa06308c7ffd4';
  let recipeNumber = 8;
  let param_key = '';
  let param_value = '';
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(recipeNumber);
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    return () => {
      getRecipes();
    }
  }, []);

  const getRecipes = async (FROM, TO) => {
    try {
      if (!TO) {
        // Reset load more or pagination in new search
        TO = recipeNumber;
        setTo(recipeNumber);
      }
      const paramsString = "";
      const searchParams = new URLSearchParams(paramsString);
      searchParams.set('q', search || 'meet');
      searchParams.set('app_id', APP_ID);
      searchParams.set('app_key', APP_KEY);
      searchParams.set('from', FROM || from);
      searchParams.set('to', TO || to);
      searchParams.set([param_key], [param_value]);
      const response = await axios.get(`https://api.edamam.com/search?${searchParams.toString()}`);


      setResponse(response);
      const responseData = response.data.hits;
      console.log("response", response);
      setIsLoading(false)
      // setTimeout(() => setIsLoading(false), 1)
      if (FROM && TO) {
        // Load more recipes
        setRecipe([...recipe, ...responseData]);
      } else {
        // Search for new recipes
        setRecipe(responseData);
      }
    } catch (error) {
      // Handle the error here
      setIsLoading(false);
      console.error("Error fetching recipes:", error);
      // Optionally, you can set an error state or show a message to the user
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipe([])
    setIsLoading(true);
    getRecipes();
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    const newFrom = to;
    const newTo = to + recipeNumber;
    setTo(newTo);
    getRecipes(newFrom, newTo);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setRecipe([])
      setIsLoading(true);
      setSelectedValue(value);
      param_key = event.target.attributes.param.textContent
      param_value = value
      getRecipes();
    } else {
      setSelectedValue('');
    }
  };

  return (
    <div className="App">
      <header className="container m-auto pb-28">
        <Navbar from={from} to={to} totalRecipes={!isLoading && response.data.count} />
      </header>

      <div className="container m-auto text-center md:text-left text-zinc-950 text-4xl font-serif p-4 font-bold" >Search results</div>
      <form className="container m-auto flex justify-center gap-1 items-center pb-6 " onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: 'calc(100% - 131px)' }}
          placeholder="Search…"
          value={search}
          onInput={handleSearch}
          className="input bg-primary-content "
        />
        <label className='cursor-pointer' htmlFor="filter"> <HiFilter size={25} /></label>
        <span className='flex bg-primary-content'>({!isLoading && response.data.count} Recipes)</span>
      </form>

      <div className="collapse container m-auto mb-7">
        <input type="checkbox" id='filter' hidden />
        <div className="collapse-content flex gap-x-44 gap-y-10 flex-wrap justify-center bg-gray-50 rounded-2xl capitalize ">
          {/* Diet filter */}
          <div className='flex flex-col'>
            <label className="label cursor-pointer justify-start gap-2">
              <span className="font-medium text-zinc-950 text-lg">Diet</span>
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Balanced</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="balanced"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'balanced'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">High-Fiber</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="high-fiber"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'high-fiber'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">High-Protein</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="high-protein"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'high-protein'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Low-Carb</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="low-carb"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'low-carb'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Low-Fat</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="low-fat"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'low-fat'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Low-Sodium</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="low-sodium"
                onChange={handleCheckboxChange}
                param='diet'
                checked={selectedValue === 'low-sodium'}
              />
            </label>
          </div>
          {/* Meal Types */}
          <div className='flex flex-col'>
            <label className="label cursor-pointer justify-start gap-2">
              <span className="font-medium text-zinc-950 text-lg">Meal Types</span>
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Breakfast</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="breakfast"
                onChange={handleCheckboxChange}
                param='mealType'
                checked={selectedValue === 'breakfast'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Brunch</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="brunch"
                onChange={handleCheckboxChange}
                param='mealType'
                checked={selectedValue === 'brunch'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Lunch/Dinner</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="lunch"
                onChange={handleCheckboxChange}
                param='mealType'
                checked={selectedValue === 'lunch-dinner'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Snack</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="snack"
                onChange={handleCheckboxChange}
                param='mealType'
                checked={selectedValue === 'snack'}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Teatime</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="teatime"
                onChange={handleCheckboxChange}
                param='mealType'
                checked={selectedValue === 'teatime'}
              />
            </label>
          </div>
          {/* Cuisine Types */}
          <div className='flex flex-col'>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="font-medium text-zinc-950 text-lg">Cuisine Types</span>
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">American</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="american"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('american')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Asian</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="asian"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('asian')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Chinese</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="chinese"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('chinese')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">French</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="french"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('french')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">Indian</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="indian"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('indian')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">World</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="world"
                onChange={handleCheckboxChange}
                param='cuisineType'
                checked={selectedValue.includes('world')}
              />
            </label>
          </div>
          {/* Dish Types */}
          <div className='flex flex-col '>
            <label className="label cursor-pointer justify-start gap-2">
              <span className="font-medium text-zinc-950 text-lg">Dish Types</span>
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">egg</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="egg"
                onChange={handleCheckboxChange}
                param='dishType'
                checked={selectedValue.includes('egg')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">bread</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="bread"
                onChange={handleCheckboxChange}
                param='dishType'
                checked={selectedValue.includes('bread')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">desserts</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="desserts"
                onChange={handleCheckboxChange}
                param='dishType'
                checked={selectedValue.includes('desserts')}
              />
            </label>
            <label className="label cursor-pointer justify-between gap-2">
              <span className="label-text">drinks</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                value="drinks"
                onChange={handleCheckboxChange}
                param='dishType'
                checked={selectedValue.includes('drinks')}
              />
            </label>
          </div>

        </div>

      </div>



      <div className="container flex gap-11 justify-center flex-wrap m-auto">
        {recipe.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            cooking_time={recipe.recipe.totalTime}
            calories={recipe.recipe.calories}
          />
        ))
        }
        {isLoading && <CardSkeleton cards={recipeNumber} />}
      </div>

      <button className="btn w-44 text-slate-950 btn-outline my-6" disabled={!isLoading && !response.data.more} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}

export default App;
