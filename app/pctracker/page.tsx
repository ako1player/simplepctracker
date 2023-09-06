"use client"
import {Add} from '@styled-icons/fluentui-system-filled/Add'
import { useState } from 'react'

const PCTracker = () =>{
    const [toggle, setToggle] = useState(false);
    return(
        <main className='min-h-screen'>
            <h1>Simple Tracker</h1>
            <button className='rounded-full border border-blue-800 hover:bg-blue-100 bg-blue-500' onClick={()=> setToggle(!toggle)}><Add size="25" color='black' /></button>
            {toggle && <section className="w-60 shadow-lg rounded-lg bg-slate-50">
                <h1>Enter Your Calories and Protein</h1>
                <form className='flex flex-col'>
                    <label>Meal 1</label>
                    <div className='flex flex-row'>
                        <label className='basis-1/2'>
                            Calories
                            <input type='text' className='w-24'/>
                        </label>
                        <label className='basis-1/2'>
                            Protein
                            <input type='text' className='w-24'/>
                        </label>
                    </div>
                    <label>Meal 2</label>
                    <div className='flex flex-row'>
                        <label className='basis-1/2'>
                            Calories
                            <input type='text' className='w-24'/>
                        </label>
                        <label className='basis-1/2'>
                            Protein
                            <input type='text' className='w-24'/>
                        </label>
                    </div>
                    <label>Meal 3</label>
                    <div className='flex flex-row'>
                        <label className='basis-1/2'>
                            Calories
                            <input type='text' className='w-24'/>
                        </label>
                        <label className='basis-1/2'>
                            Protein
                            <input type='text' className='w-24'/>
                        </label>
                    </div>
                    <label>Total</label>
                    <div className='flex flex-row'>
                        <label className='basis-1/2'>
                            Calories
                            <input type='text' className='w-24'/>
                        </label>
                        <label className='basis-1/2'>
                            Protein
                            <input type='text' className='w-24'/>
                        </label>
                    </div>
                    <button>Add Another Meal</button>
                    <button>Submit</button>
                </form>
            </section>}
        </main>
    )
}

export default PCTracker;