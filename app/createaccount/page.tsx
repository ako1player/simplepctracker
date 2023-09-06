"use client"
import { useState } from 'react'
import {useForm,  SubmitHandler} from 'react-hook-form'
import { useSignup } from '../hooks/useSignup'
import { useRouter } from 'next/navigation'

type Inputs = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string
}

const CreateAccount = () =>{
    const [pError, setPError] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const {signup, error, isPending} = useSignup();
    const router = useRouter();

    const handleSignUp:SubmitHandler<Inputs> = (data) =>{
        if(data.password !== data.confirmPassword){
            setPError("Password and Confirm Password do not match")
            return;
        }
        signup(data.email, data.password, data.username)
        router.push("/");
    }

    return(
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className='bg-blue-200 shadow-md rounded px-20 pt-6 pb-8 mb-4 overflow-hidden'>
            <h1 className='text-center block text-lg font-bold'>Create Account</h1>
            <form className='pb-3' onSubmit={handleSubmit(handleSignUp)}>
                <label className='block text-sm font-bold mb-2'>
                    Email:
                </label>
                <input type='email' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='example@asd.com'
                {...register("email", {required: true})}
                />
                {errors.email && <span className='text-sm'>This field is required</span>}
                <label className='block text-sm font-bold mb-2'>
                    Username:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Username'
                {...register("username", {required: true})}
                />
                {errors.username && <span className='text-sm'>This field is required</span>}
                <label className='block text-sm font-bold mb-2'>
                    Password:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='*********'
                {...register("password", {required: true})}
                />
                {errors.password && <span className='text-sm'>This field is required</span>}
                <label className='block text-sm font-bold mb-2'>
                    Confirm Password:
                </label>
                <input type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='*********'
                {...register("confirmPassword", {required: true})}
                />
                {errors.confirmPassword && <span className='text-sm'>This field is required</span>}
                <div>
                    <button type='submit' className='border rounded px-2 py-1 bg-slate-100 hover:bg-blue-200 hover:text-white'>Create Account</button>
                </div>
                {isPending && <button className='border rounded px-2 py-1 bg-slate-100' disabled>Loading</button>}
                {error && <p className='text-sm'>{error}</p>}
                {pError && <p className='text-sm'>{pError}</p>}
            </form>
            </div>
        </main>
    )
}

export default CreateAccount;