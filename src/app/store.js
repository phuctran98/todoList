import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/TodoList/todoListSlice'

export const store = configureStore({
  reducer: {
    todoList : todoListReducer
  },
})