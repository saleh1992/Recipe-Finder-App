import React from 'react'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.jpg"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
    return (
        <>
            <div class="navbar justify-between bg-primary-content text-neutral-focus">
                <div class="flex">
                    <a href="/" >
                        <img src={logo} alt="recipe logo" style={{ height: '75px' }} />
                    </a>
                </div>

                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li tabindex="0">
                            <a className='btn-ghost'>
                                Homepage
                                <MdKeyboardArrowDown />
                            </a>
                            <ul class="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a className='btn-ghost'>
                                Recipe Page
                                <MdKeyboardArrowDown />
                            </a>
                            <ul class="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a className='btn-ghost'>
                                Pages
                                <MdKeyboardArrowDown />
                            </a>
                            <ul class="p-2 bg-primary-content text-neutral-focus">
                                <li><a className='btn btn-ghost'>Submenu 1</a></li>
                                <li><a className='btn btn-ghost'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className='btn-ghost'>
                                Buy
                            </a>
                        </li>

                    </ul>
                </div>
                <div>
                    <FiSearch size={30} />

                    <div class="avatar online mx-7">
                        <div class="w-8  rounded-full">
                            <img src={avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


