import React from 'react'

export default function RecipeCard({ image, name, calories, cooking_time }) {
    return (
        <>
            <div class="card w-86 bg-primary-content text-neutral-focus shadow-xl " style={{ 'max-width': '300px' }}>
                <figure ><img src={image} style={{ width: '300px', height: '300px' }} alt="recipe" /></figure>
                <div class="card-body justify-between text-left">
                    <h2 class="card-title">name: {name}</h2>
                    <span >cooking time: {cooking_time} Minutes</span>
                    <span >calories: {(calories).toFixed(2)} </span>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Add Favorite</button>
                    </div>
                </div>
            </div>
        </>
    )
}
