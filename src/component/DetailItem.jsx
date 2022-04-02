import React from 'react'
import '../styles/DetailItem.scss'
export default function DetailItem() {
  return (
    <div className='detailItem'>
         <form className='newTaskForm' >
            <input placeholder='Add new task ...' defaultValue="Search..."/>
            <p className='p_Name'>Description</p>
            <textarea name="comment" rows="4" placeholder='Enter text here...'>
                
            </textarea>
            <div className='date_form'>
                <div>
                    <p className='p_Name'>Due Date</p>
                    <input type="date" name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01" max="2018-12-31"
                    />
                </div>
                <div>
                    <p className='p_Name'>Pority</p>
                    <select className='selectPiority' defaultValue='Normal'>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            <button className='btm_submit'>
                Add
            </button>
        </form>
    </div>
  )
}
