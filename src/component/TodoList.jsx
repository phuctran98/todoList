import React, { useState } from 'react'
import '../styles/TodoList.scss'
import BulkAction from './BulkAction'
import ItemList from './ItemList'
import { useSelector, useDispatch } from 'react-redux'
import { sortItem } from '../modal'

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList)
  const [showDetailId, setShowDetailId] = useState('')
  const [checkedState, setCheckedState] = useState(
    new Array(todoList.length).fill(false)
  );
  const onViewDetail = (id) => {
    setShowDetailId(showDetailId === id ? '' : id)
  }
  // console.log('todoList',sortItem(todoList))
  const handleCheckedItem = (index) => {
    console.log('index',index)
  }
  return (
    <div className='todoListForm'>
      <input placeholder='Search ...' />
      {
        sortItem(todoList).map((item,index) => (
          <ItemList item={item} key={item.id} handleCheckedItem={handleCheckedItem} index={index} checkedState={checkedState}
            showDetailId={showDetailId}
            viewDetail={onViewDetail}>

          </ItemList>
        ))
      }
      <BulkAction></BulkAction>
    </div>
  )
}
