import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';



function App() {
  const APP_ID = '4a4959e6';
  const APP_KEY = '1a6290d1bc108e4cbbffa06308c7ffd4';
  const pageNumber = 12;
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(pageNumber);
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      getRecipes();
    }
  }, []);

  const getRecipes = async (FROM, TO) => {
    try {
      if (!TO) {
        // Reset load more or pagination in new search
        TO = pageNumber;
        setTo(pageNumber);
      }

      const response = await axios.get(`https://api.edamam.com/search?q=${search || 'meet'}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${FROM || from}&to=${TO || to}`);
      setResponse(response);
      const responseData = response.data.hits;
      console.log("response", response);
      setIsLoading(false);
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
    getRecipes();
  };

  const handleLoadMore = () => {
    const newFrom = to;
    const newTo = to + pageNumber;
    setTo(newTo);
    getRecipes(newFrom, newTo);
  };

  return (
    <div className="App">
      <header className="container m-auto pb-28">
        <Navbar />
      </header>


      <div class="text-left text-zinc-950 text-4xl font-serif p-4 font-bold" >Search results</div>
      <form className="flex justify-center gap-1 items-center pb-6 " onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: '91%' }}
          placeholder="Search…"
          value={search}
          onInput={handleSearch}
          className="input bg-primary-content "
        />
        <span className='flex bg-primary-content'>({!isLoading && response.data.count} Recipes)</span>

      </form>


      <div className="container flex gap-y-11 justify-center md:justify-between  flex-wrap m-auto">
        {recipe.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            cooking_time={recipe.recipe.totalTime}
            calories={recipe.recipe.calories}
          />
        ))}
      </div>

      <button className="btn w-44 text-slate-950 btn-outline my-6" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}

export default App;
