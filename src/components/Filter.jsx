import React from 'react'

function Filter({ selectedValue, handleCheckboxChange }) {
    return (
        <>
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
        </>
    )
}

export default Filter