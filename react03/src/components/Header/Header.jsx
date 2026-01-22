import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-white sticky z-50 top-0">
            <nav className="px-4 lg:px-8 py-4">
                <div className="flex justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-semibold text-[#8B4513]">
                            your logo<sup className="text-red-600">®</sup>
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `font-medium text-base ${isActive ? "text-[#5C3317]" : "text-[#A0522D]"} hover:opacity-80 transition-opacity`
                            }
                        >
                            Home
                        </NavLink>

                        
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `font-medium text-base ${isActive ? "text-[#5C3317]" : "text-[#A0522D]"} hover:opacity-80 transition-opacity`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `font-medium text-base ${isActive ? "text-[#5C3317]" : "text-[#A0522D]"} hover:opacity-80 transition-opacity`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/github"
                            className={({isActive}) =>
                                `font-medium text-base ${isActive ? "text-[#5C3317]" : "text-[#A0522D]"} hover:opacity-80 transition-opacity`
                            }
                        >
                            GitHub
                        </NavLink>
                        <Link
                            to="/"
                            className="text-black font-medium text-base hover:opacity-80 transition-opacity"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/"
                            className="text-white bg-[#8B4513] hover:bg-[#7a3a10] font-medium rounded-lg text-base px-5 py-2.5 transition-colors"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}