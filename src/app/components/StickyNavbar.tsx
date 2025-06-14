"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const StickyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-gray-200 fixed w-full md:top-10 md:left-1/10 md:w-2xl lg:left-1/8 lg:w-4xl xl:left-1/8 xl:w-5xl z-50 md:rounded-sm shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-5">
                <a href="#" className="flex items-center">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        height={32}
                        width={32}
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black ms-2">PhuTung HD</span>
                </a>

                {/* Hamburger button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Responsive menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-red-600 md:border-0 md:hover:text-white md:p-3" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-red-600 md:border-0 md:hover:text-white md:p-3">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-red-600 md:border-0 md:hover:text-white md:p-3">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-red-600 md:border-0 md:hover:text-white md:p-3">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-red-600 md:border-0 md:hover:text-white md:p-3">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default StickyNavbar;