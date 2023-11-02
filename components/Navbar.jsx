'use client'
import { logout } from '@/controllers/fireAuth'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'



const Navbar = () => {
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        
        const storedAuthToken = localStorage.getItem('auth-token');
        setAuthToken(storedAuthToken);

    }, []);

    return (
        <>

            <nav className="">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tracker</span>
                    </Link>
                    <div className="flex items-center">
                        {authToken !== null ? 
                            <button onClick={() => logout()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
                                Logout
                            </button>
                         : 
                            <Link href="/login" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center">
                                Login
                            </Link>
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar