import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { formatDate } from '../modal'
import '../styles/NewTask.scss'
import uniqid from 'uniqid';
import { addItem, editItem } from '../features/TodoList/todoListSlice';
import { useDispatch } from 'react-redux';
const today = formatDate(new Date())
export default function NewTask({initialState,idItem}) {
    const { control,register, handleSubmit, formState: { errors },setValue  } = useForm({
        defaultValues : initialState
    });
    const dispatch = useDispatch()
    
    const onSubmit = async (data)  => {
        if(initialState){
            const newItem = {
                ...initialState,
                title: data.title,
                description: data.description,
                dueDate: data.dueDate,
                priority: data.priority,
            }
            const action = editItem(newItem)
            dispatch(action)
        }
        else{
            const id = await uniqid()
            const newItem = {
                id: id,
                title: data.title,
                description: data.description,
                dueDate: data.dueDate,
                priority: data.priority,
            }
            const action = addItem(newItem)
            dispatch(action)
            setValue('title', ''); // ✅ performant
            setValue('description', ''); // ✅ performant
            setValue('priority', 'Normal'); // ✅ performant
            setValue('dueDate',today); // ✅ performant
        }  
    };
    return (
        <form className='newTaskForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='newTaskForm__title'>
                <input placeholder='Add new task ...' control={control} {...register("title", { required: true })} />
                {errors.title && <span className='error'>This Title is required</span>}
            </div>

            <div className='newTaskForm__description'>
                <p className='p_Name'>Description</p>
                <textarea {...register("description")} control={control} rows="4" placeholder='Enter text here...'>

                </textarea>
            </div>

            <div className='date_form'>
                <div>
                    <p className='p_Name'>Due Date</p>
                    <input type="date" {...register("dueDate")}
                        defaultValue={today} control={control}
                        min={today}
                    />
                </div>
                <div>
                    <p className='p_Name'>Pority</p>
                    <select className='selectPiority' control={control} defaultValue='Normal' {...register("priority")}>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            <button type="submit" className='btm_submit'>{initialState ? 'Update' : 'Add' }</button>
            {/* <input className='btm_submit' type='submit' name={initialState ? 'Update' : 'Add' }/> */}
            {/* Add
            </input> */}
        </form>
    )
}
