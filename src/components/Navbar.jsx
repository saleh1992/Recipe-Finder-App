import React from 'react'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.jpg"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

export default function Navbar({ from, to, totalRecipes }) {
    return (
        <>
            <div className="navbar justify-between bg-primary-content text-neutral-focus">
                <div className="flex md:order-1 order-2 ">
                    <a href="/" >
                        <img src={logo} alt="recipe logo" style={{ height: '75px', width: '175px' }} />
                    </a>
                </div>

                <div className="md:hidden md:order-2 ">
                    <div className="dropdown dropdown-bottom ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-neutral-50 dropdown-content  p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex="0">
                                <a className='btn-ghost'>
                                    Pages
                                    <MdKeyboardArrowDown />
                                </a>
                                <ul className=" bg-primary-content text-neutral-focus">
                                    <li><a className='btn btn-ghost'>Total Recipes: {totalRecipes}</a></li>
                                    <li><a className='btn btn-ghost'>From: {from}</a></li>
                                    <li><a className='btn btn-ghost'>to: {to}</a></li>
                                </ul>
                            </li>
                            <li tabIndex="0">
                                <a className='btn-ghost'>
                                    Homepage
                                    <MdKeyboardArrowDown />
                                </a>
                                <ul className=" bg-primary-content text-neutral-focus">
                                    <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                    <li><a className='btn btn-ghost'>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabIndex="0">
                                <a className='btn-ghost'>
                                    Recipe Page
                                    <MdKeyboardArrowDown />
                                </a>
                                <ul className=" bg-primary-content text-neutral-focus">
                                    <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                    <li><a className='btn btn-ghost'>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className='btn-ghost' >
                                    Buy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:block  order-2">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Homepage
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className=" bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Recipe Page
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className=" bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a className='btn-ghost'>
                                Pages
                                <MdKeyboardArrowDown />
                            </a>
                            <ul className=" bg-primary-content text-neutral-focus">
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

                <div className='order-3'>
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


