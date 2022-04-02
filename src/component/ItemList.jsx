import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/TodoList/todoListSlice'
import '../styles/ItemList.scss'
import NewTask from './NewTask'

export default function ItemList({ item, showDetailId, viewDetail,handleCheckedItem,index,checkedState }) {
  const dispatch = useDispatch()
  const handleRemove =(id)=>{
      const action = removeItem(id)
      dispatch(action)
  }
  const handleChangeCheckBox = (index) =>{
    handleCheckedItem(index)
  }
  return (
    <div className='itemList'>
      <div className='itemList__show'>
        <div className='itemList__show__name'>
          <input type="checkbox" name={item.title} 
          value={item.title} 
          checked={checkedState[index]} 
          onChange={()=>handleChangeCheckBox(index)} 
          />
          <p>{item.title}</p>
        </div>
        <div className='itemList__show__event'>
          <button className='btn_detail' onClick={() => viewDetail(item.id)}>Detail</button>
          <button className='btn_remove' onClick={()=>handleRemove(item.id)}>Remove</button>
        </div>
      </div>
      {
        showDetailId === item.id &&
        <div className='itemList__detail'>
            <NewTask initialState={item} idItem={item.id}></NewTask>
        </div>

      }
    </div>
  )
}
