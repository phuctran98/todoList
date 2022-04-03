import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMutiple } from '../features/TodoList/todoListSlice'
import '../styles/BulkAction.scss'
export default function BulkAction({checkedStateId,handleBulkRemove}) {
  const dispatch = useDispatch()
  const handleRemove = () =>{
      const action = removeMutiple(checkedStateId)
      dispatch(action)
      handleBulkRemove(true)
  }
  return (
    <div className='bulkAction' >
        <p>Bulk Action</p>
        <div className='event'>
            <button className='btn_detail'>Done</button>
            <button className='btn_remove' onClick={()=>handleRemove()}>Remove</button>
        </div>
    </div>
  )
}
