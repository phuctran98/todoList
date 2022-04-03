import React, { useState } from 'react'
import '../styles/TodoList.scss'
import BulkAction from './BulkAction'
import ItemList from './ItemList'
import { useSelector, useDispatch } from 'react-redux'
import { sortItem } from '../modal'
const checkedStateId =[]
export default function TodoList() {
  const todoList = useSelector((state) => state.todoList)
  const [showDetailId, setShowDetailId] = useState('')
  const [isClickCheckBox,setIsClickCheckBox] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')
  // const [checkedStateId, setCheckedStateId] = useState([]);
  const onViewDetail = (id) => {
    setShowDetailId(showDetailId === id ? '' : id)
  }
  // bulk action
  const handleCheckedItem = (item,event) => {
    if(event.target.checked){
      checkedStateId.push(item.id)
      setIsClickCheckBox(true)
    }
    else{
      const index = checkedStateId.findIndex(id=>id===item.id)
      checkedStateId.splice(index,1)

      if(checkedStateId.length===0){
        setIsClickCheckBox(false)
      }
    }
  }
  //search action
  const handleChangeSearch = (event)=>{
    setSearchTerm(event.target.value)
  }

  return (
    <div className='todoListForm'>
      <input placeholder='Search ...' 
      value={searchTerm} onChange={(event)=>handleChangeSearch(event)}
      />
      {
        sortItem(todoList).filter(item=>{
          if(searchTerm == ""){
            return item
          }else if(item.title.includes(searchTerm)){
            return item
          }
        }).map((item,index) => (
          <ItemList item={item} key={item.id} handleCheckedItem={handleCheckedItem} index={index} 
            showDetailId={showDetailId}
            viewDetail={onViewDetail}>

          </ItemList>
        ))
      }
      {
        isClickCheckBox && <BulkAction checkedStateId={checkedStateId}></BulkAction>
      }
    </div>
  )
}
