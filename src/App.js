import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import { FiSearch } from 'react-icons/fi';

function App() {
  const APP_ID = '4a4959e6';
  const APP_KEY = '1a6290d1bc108e4cbbffa06308c7ffd4';
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipes();

  }, [])
  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${'meet'}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`);
    console.log(response.data.hits);
    setRecipe(response.data.hits)
  }
  // const re
  return (
    <div className="App">

      <header className="App-header">
        <Navbar />
      </header>

      <div class="form-control " onSubmit={''}>
        <div class="input-group">
          <input type="text" style={{ width: '90%' }} placeholder="Search…" onSubmit={getRecipes} class="input input-bordered" />
          <button class="btn btn-square">
            <FiSearch />
          </button>
        </div>
      </div>

      <div class="container flex justify-center flex-wrap m-auto">
        {recipe.map((recipe) => (
          <RecipeCard name={recipe.recipe.label} image={recipe.recipe.image} cooking_time={recipe.recipe.totalTime} calories={recipe.recipe.calories} />
        ))}
      </div>

    </div>
  );
}

export default App;
