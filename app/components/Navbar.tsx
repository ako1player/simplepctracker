"use client"
import Link from "next/link";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const {logout} = useLogout();
    const {user}:any = useAuthContext();

    return (
        <nav className="px-2 sm:px-4 pt-4 bg-blue-700 text-white">
        <div className="container flex flex-wrap items-center justify-end mx-auto">
            <button
            onClick={() => setToggle(!toggle)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
                ></path>
            </svg>
            </button>
            {!toggle ? (
            //Desktop Display
            <div className="hidden md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className="text-xl hover:text-sky-200 cursor-pointer"><Link href='/'>Simple Protein Tracker</Link></li>
                    {!user && (
                        <>
                            <li className="text-xl hover:text-sky-200 cursor-pointer"><Link href='/login'>Login</Link></li>
                        </>
                    )}
                    {user && (
                        <>
                            <li className="text-xl">hello, {user.displayName}</li>
                            <button onClick={logout} className="hover:text-sky-200">Logout</button>
                        </>
                    )}
                </ul>
            </div>
            ) : (
            //Mobile display
            <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 border rounded md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li className="text-xl hover:text-sky-200 cursor-pointer"><Link href='/'>Simple Protein Tracker</Link></li>
                    {!user && (
                        <>
                            <li className="text-xl hover:text-sky-200 cursor-pointer"><Link href='/login'>Login</Link></li>
                        </>
                    )}
                    {user && (
                        <>
                            <li className="text-xl">hello, {user.displayName}</li>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}
                </ul>
            </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;
