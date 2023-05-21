import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function RecipeCard({ image, name, calories, cooking_time }) {
    return (
        <>
            <div className="card w-96 bg-primary-content text-neutral-focus shadow-xl " style={{ maxWidth: '300px' }}>
                <figure ><img src={image} alt="recipe" /></figure>
                <div className="card-body justify-between text-left">
                    <h2 className="card-title">name: {name}</h2>
                    <span >cooking time: {cooking_time} Minutes</span>
                    <span >calories: {(calories).toFixed(2)} </span>
                </div>
            </div>
        </>
    )
}
