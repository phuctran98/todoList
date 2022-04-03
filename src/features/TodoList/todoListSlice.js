import { createSlice, current } from '@reduxjs/toolkit'
import { sortItem } from '../../modal'

const initialState = [
    {
        id: 'l1iio0tx1',
        title: 'Home work',
        description : 'Math home work',
        dueDate: '2023-03-25',
        priority: 'High',
    },
]

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addItem:(state,action)=>{
            const newItem = action.payload
            state.push(newItem)
            sortItem(state)
            localStorage.setItem('todoList',state)
            // state = state.slice().sort((a,b)=>{
            //    return new Date(a.dueDate)-new Date(b.dueDate)
            // })
            // console.log(current.state)
            
        },
        editItem: (state,action)=>{
            const editItem = action.payload
            // console.log('editItem',editItem)
            const findIndex = state.findIndex(item=>item.id === editItem.id)
            // console.log('findIndex',findIndex)
            state[findIndex] = editItem
        },
        removeItem: (state,action)=>{
            const removeId = action.payload
            state = state.filter(item=>item.id !== removeId)
            return state
        },
        removeMutiple : (state,action)=>{
            const arrayId = action.payload
            console.log(arrayId)
            state = state.filter(item => !arrayId.includes(item.id))
            return state
        }
    },
})

// Action creators are generated for each case reducer function
export const {addItem,editItem,removeItem,removeMutiple} = todoListSlice.actions

const todoListReducer = todoListSlice.reducer;
export default todoListReducer;

// export default todoListSlice.reducer