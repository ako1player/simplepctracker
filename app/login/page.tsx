"use client"
import  {Google } from '@styled-icons/boxicons-logos/Google'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { signInWithGoogle } from '../firebase/config';
import Link from 'next/link';
const Login = () =>{
    return(
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className='bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1 className='text-center block text-lg font-bold'>Login</h1>
            <form className='pb-3'>
                <label className='block text-sm font-bold mb-2'>
                    Username:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Username'
                />
                <label className='block text-sm font-bold mb-2'>
                    Password:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='*********'
                />
                <div>
                    <button type='submit' className='border rounded px-2 py-1 bg-slate-100 hover:bg-blue-200 hover:text-white'>Login</button>
                </div>
            </form>
            <hr />
            <ul className='flex justify-center items-center'>
                <li onClick={signInWithGoogle} className="cursor-pointer"><Google size="40" color="blue" /></li>
                <li className="cursor-pointer"><Facebook size="40" color="blue" /></li>
            </ul>
            <span className='text-sm block text-center text-blue-700 hover:text-white'><Link href='/createaccount'>Create An Account</Link></span>
            </div>
        </main>
    )
}

export default Login;