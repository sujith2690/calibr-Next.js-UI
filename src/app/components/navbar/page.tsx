"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button/page';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const content = [
        "Home", "Service", "Feature", "Product", "Testimonial", "FAQ"
    ];
    return (
        <nav className="border-gray-200 bg-[#F5F7FA]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="div">
                    <Image src="/mainLogo.png" alt="User Logo" width={100} height={24} />
                </div>
                <div className="items-center justify-between w-full md:flex hidden md:w-auto">
                    <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {content.map((item, i) => {
                            return (
                                <li key={i}>
                                    <a className={`block py-2 pl-3 pr-4 ${i === 0 ? 'text-[#4CAF4F]' : ''}  rounded md:bg-transparent md:p-0`} aria-current="page">
                                        {item}
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className="flex md:order-2">
                    <Button value='Login' />
                    <Button value='SignUp' />
                    <HiMenu
                        className={`md:hidden w-10 h-10 cursor-pointer ${menuOpen ? 'text-gray-500' : 'text-black'}`}
                        onClick={toggleMenu}
                    />
                </div>
                {menuOpen && (
                    <div
                        className="items-center justify-between w-full md:flex  md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {content.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a className={`block py-2 pl-3 pr-4 ${i === 0 ? 'text-[#4CAF4F]' : ''}  rounded md:bg-transparent md:p-0`} aria-current="page">
                                            {item}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

