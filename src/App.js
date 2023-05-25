import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './components/CardSkeleton';
import { HiFilter } from 'react-icons/hi';
import Filter from './components/Filter';



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
    // return () => {
    // }
    getRecipes();
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
      setIsLoading(false)


      setResponse(response);
      const responseData = response.data.hits;
      console.log("response", response);
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
      setRecipe([])
      setIsLoading(true);
      getRecipes();
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

      <Filter handleCheckboxChange={handleCheckboxChange} selectedValue={selectedValue} />

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
