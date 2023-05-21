import React from 'react'
import logo from "../assets/footer logo.png"
import { FiYoutube, FiFacebook } from 'react-icons/fi';
import { RxInstagramLogo } from 'react-icons/rx';
import { TbBrandTwitter } from 'react-icons/tb';
export default function Footer() {
    return (
        <div className='footer_container '>
            <footer className="footer p-10 text-neutral-focus justify-items-center md:justify-items-stretch  justify-between">
                <div className='justify-items-center md:justify-items-stretch' >
                    <a href="/" >
                        <img src={logo} alt="recipe logo" style={{ height: '50px' }} />
                    </a>
                    <span className='text-left' style={{ maxWidth: '300px' }} >
                        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
                    </span>
                </div>
                <div>
                    <span className="footer-title">Tastebite</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Feedback</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms</a>
                    <a className="link link-hover">Conditions</a>
                    <a className="link link-hover">Cookies</a>
                    <a className="link link-hover">Copyright</a>
                </div>
                <div>
                    <span className="footer-title">Follow</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t justify-items-center md:justify-items-stretch  border-gray-300">
                <div className="items-center grid-flow-col">
                    <p>© 2020 Tastebite - All rights reserved</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-zinc-500">
                        <a><FiFacebook size={22} /></a>
                        <a><TbBrandTwitter size={22} /></a>
                        <a><RxInstagramLogo size={22} /></a>
                        <a><FiYoutube size={22} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
