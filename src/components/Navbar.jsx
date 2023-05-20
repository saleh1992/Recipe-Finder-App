import React from 'react'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.jpg"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

export default function Navbar({ from, to, totalRecipes }) {
    return (
        <>
            <div className="navbar justify-between bg-primary-content text-neutral-focus">
                <div className="flex">
                    <a href="/" >
                        <img src={logo} alt="recipe logo" style={{ height: '75px' }} />
                    </a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Homepage
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Recipe Page
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Pages
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Total Recipes: {totalRecipes}</a></li>
                                <li><a className='btn btn-ghost'>From: {from}</a></li>
                                <li><a className='btn btn-ghost'>to: {to}</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className='btn-ghost' >
                                Buy
                            </a>
                        </li>

                    </ul>
                </div>
                <div>
                    <FiSearch size={30} />

                    <div className="avatar online mx-7">
                        <div className="w-8  rounded-full">
                            <img src={avatar} alt='avatar' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


