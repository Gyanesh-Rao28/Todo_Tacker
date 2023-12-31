'use client'
import { EmailLogIn, googleLogin } from '@/controllers/fireAuth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {  useState } from 'react'



const Login = () => {
    const router = useRouter()

    const GoogleOnlogIn = async () => {
        await googleLogin()
        router.push('/')
    }


    const [Creds, setCreds] = useState({
        email: "",
        password: ""
    })

    const OnEmailLogin = async (e) => {
        e.preventDefault()
        try {
            await EmailLogIn(Creds.email, Creds.password)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <section >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" height={36} width={36} />
                        Sign in to your account
                    </Link>
                    <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-slate-800">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form className="space-y-4 md:space-y-6">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input value={Creds.email} onChange={(e) => { setCreds({ ...Creds, email: e.target.value }) }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={Creds.password} onChange={(e) => { setCreds({ ...Creds, password: e.target.value }) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-end">
                                    <Link href="/" className=" text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>

                                <button type="submit" onClick={OnEmailLogin} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log in</button>


                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet? <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                            <button className="w-full text-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                                onClick={() => { GoogleOnlogIn() }}
                            >
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                </svg>
                                Log in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login