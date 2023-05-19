import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import { FiSearch } from 'react-icons/fi';
import Footer from './components/Footer';

function App() {
  const APP_ID = '4a4959e6';
  const APP_KEY = '1a6290d1bc108e4cbbffa06308c7ffd4';
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(12);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (FROM, TO) => {
    if (!TO) {
      // Reset load more or pagination in new search
      TO = 12;
      setTo(12);
    }
    const response = await axios.get(`https://api.edamam.com/search?q=${search || 'meet'}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${FROM || from}&to=${TO || to}`);
    const responseData = response.data.hits;

    if (FROM && TO) {
      // Load more recipes
      setRecipe([...recipe, ...responseData]);
    } else {
      // Search for new recipes
      setRecipe(responseData);
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
    const newTo = to + 12;
    setTo(newTo);
    getRecipes(newFrom, newTo);
  };

  return (
    <div className="App">
      <header className="container m-auto">
        <Navbar />
      </header>

      <form className="input-group justify-center pt-28" onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: '80%' }}
          placeholder="Search…"
          value={search}
          onInput={handleSearch}
          className="input input-bordered bg-primary-content border-primary-content"
        />
        <button className="btn btn-ghost bg-primary-content border-primary-content" type="submit">
          <FiSearch />
        </button>
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
