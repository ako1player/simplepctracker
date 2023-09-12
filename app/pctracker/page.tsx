"use client"
import {Add} from '@styled-icons/fluentui-system-filled/Add'
import { FormEvent, useRef, useState } from 'react'
import {useForm, Controller} from 'react-hook-form'

const PCTracker = () =>{
    const [toggle, setToggle] = useState(false);
    const {control, handleSubmit, watch, setValue, register} = useForm();
    const [proteinCount, setProteinCount] = useState(3);
    const [calorieCount, setCalorieCount] = useState(3);
    const [proteinValues, setProteinValues] = useState(
        [...Array(3).keys()].map((i) => 0)
    );
    const [calorieValues, setCalorieValues] = useState(
        [...Array(3).keys()].map((i) => 0)
    );

    const onSubmit = (data:any) =>{
        console.log(data)
    }

    const updateTotalProtein = () => {
        let total = 0;
        for (let i = 0; i < proteinCount; i++) {
            total += parseFloat(proteinValues[i] || 0);
        }
        return total;
    };

    const updateTotalCalories = () => {
        let total = 0;
        for (let i = 0; i < calorieCount; i++) {
            total += parseFloat(calorieValues[i] || 0);
        }
        return total;
    };
    

    // const proteinFields = watch([...Array(proteinCount).keys()].map((i) => `protein${i + 1}`));
    // const caloriesFields = watch([...Array(calorieCount).keys()].map((i) => `calories${i + 1}`));

    const handleFieldChange = (e:any, index:number) => {
        const newFieldValues = [...proteinValues];
        newFieldValues[index] = parseFloat(e.target.value) || 0;
        setProteinValues(newFieldValues);
    };
    const handleCalorieChange = (e:any, index:number) => {
        const newFieldValues = [...calorieValues];
        newFieldValues[index] = parseFloat(e.target.value) || 0;
        setCalorieValues(newFieldValues);
    };

    // const calculateProteinTotal = () => {
    //     return proteinFields.reduce((total, value) => total + parseFloat(value || 0), 0);
    // };

    // const calculateCaloriesTotal = () => {
    //     return caloriesFields.reduce((total, value) => total + parseFloat(value || 0), 0);
    // };

    const addField = () => {
        setProteinCount(proteinCount + 1);
        const newProteinCount = proteinCount + 1;
        setValue(`protein${newProteinCount}`, 0); // Initialize the new field

        setCalorieCount(calorieCount + 1);
        const newCalorieCount = calorieCount + 1;
        setValue(`protein${newCalorieCount}`, 0);
    };
    return(
        <main className='min-h-screen'>
            <h1>Simple Tracker</h1>
            <button className='rounded-full border border-blue-800 hover:bg-blue-100 bg-blue-500' onClick={()=> setToggle(!toggle)}><Add size="25" color='black' /></button>
            {toggle && <section className="w-60 shadow-lg rounded-lg bg-slate-50 ml-2 pl-2">
                <h1>Enter Your Calories and Protein</h1>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        {[...Array(proteinCount).keys()].map((i) =>(
                            <>
                            <label>Meal {1 + i}</label>
                                <div className="flex flex-row">
                                <label htmlFor={`calorie${i + 1}`} className='basis-1/2'>Calories
                                <Controller
                                    name={`calorie${i + 1}`}
                                    control={control}
                                    defaultValue={0}
                                    render={({ calorie }:any) => (
                                    <input
                                        type="number"
                                        {...calorie}
                                        className='w-24'
                                        onChange={(e) => handleCalorieChange(e, i)}
                                    />
                                    )}
                                />
                            </label>
                            <label htmlFor={`protein${i + 1}`} className='basis-1/2'>Protein
                            <Controller
                                name={`protein${i + 1}`}
                                control={control}
                                defaultValue={0}
                                render={({ protein }:any) => (
                                <input
                                    type="number"
                                    {...protein}
                                    className='w-24'
                                    onChange={(e) => handleFieldChange(e, i)}
                                />
                                )}
                            />
                            </label>     
                        </div>
                        </>
                        ))}
                        <div>
                            <label>Total Calories:</label>
                            <input
                                type='number'
                                name='total'
                                value={updateTotalCalories()}
                                readOnly
                            />
                        </div>
                        <div>
                            <label>Total Protein:</label>
                            <input
                                type='number'
                                name='total'
                                value={updateTotalProtein()}
                                readOnly
                            />
                        </div>
                    <button type='button' onClick={addField}>Add Another Meal</button>
                    <button>Submit</button>
                </form>
            </section>}
        </main>
    )
}

export default PCTracker;