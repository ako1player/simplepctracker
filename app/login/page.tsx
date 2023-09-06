"use client"
import  {Google } from '@styled-icons/boxicons-logos/Google'
// import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
// import { signInWithGoogle } from '../firebase/config';
import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';
import {useForm,  SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/navigation';

type Inputs = {
    email: string,
    password: string,
}

const Login = () =>{
    const {login, googleLogin, error, isPending} = useLogin();
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const router = useRouter();


    const handleLogin:SubmitHandler<Inputs> = (data) =>{
        login(data.email, data.password);
    }

    return(
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className='bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:w-80'>
            <h1 className='text-center block text-lg font-bold'>Login</h1>
            <form className='pb-3' onSubmit={handleSubmit(handleLogin)}>
                <label className='block text-sm font-bold mb-2'>
                    Email:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Username'
                {...register("email", {required: true})}
                />
                <label className='block text-sm font-bold mb-2'>
                    Password:
                </label>
                <input type='password' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='*********'
                {...register("password", {required: true})}
                />
                {/* <div>
                    <button type='submit' className='border rounded px-2 py-1 bg-slate-100 hover:bg-blue-200 hover:text-white'>Login</button>
                </div> */}
                {!isPending && <button type='submit' className='border rounded px-2 py-1 bg-slate-100 hover:bg-blue-200 hover:text-white'>Login</button>}
                {isPending && <button className='btn' disabled>Loading</button>}
                {error && <p className='text-red-600 break-words text-center'>{error}</p>}
            </form>
            <hr />
            <ul className='flex justify-center items-center'>
                <li onClick={googleLogin} className="cursor-pointer"><Google size="40" color="blue" /></li>
                {/* <li className="cursor-pointer"><Facebook size="40" color="blue" /></li> */}
            </ul>
            <span className='text-sm block text-center text-blue-700 hover:text-white'><Link href='/createaccount'>Create An Account</Link></span>
            </div>
        </main>
    )
}

export default Login;