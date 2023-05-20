import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import { FiSearch } from 'react-icons/fi';


function App() {
  const APP_ID = '4a4959e6';
  const APP_KEY = '1a6290d1bc108e4cbbffa06308c7ffd4';
  const pageNumber = 12;
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(pageNumber);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      console.log("response", response);

      if (FROM && TO) {
        // Load more recipes
        setRecipe([...recipe, ...responseData]);
      } else {
        // Search for new recipes
        setRecipe(responseData);
      }
    } catch (error) {
      // Handle the error here
      setLoading(false);
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
      <header className="container m-auto">
        <Navbar />
      </header>

      <form className="flex justify-center gap-3 items-center pb-6 pt-28" onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: '85%' }}
          placeholder="Search…"
          value={search}
          onInput={handleSearch}
          className="input bg-primary-content "
        />
        <span className='flex bg-primary-content'>({loading ? response.data.count : null} recipes)</span>

      </form>


      <div className="container gap-11 flex justify-center flex-wrap m-auto">
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

      <button className="btn btn-ghost my-6" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}

export default App;
