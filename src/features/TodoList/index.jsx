import React from 'react'
import NewTask from '../../component/NewTask'
import TodoList from '../../component/TodoList'
import './TodoListContainer.scss'

export default function TodoListContainer() {
    return (
        <div className='container'>
            <div className='newTask'>
                <h2>New Task</h2>
                <NewTask />
            </div>
            <div className='todoList'>
                <h2>Todo List</h2>
                <TodoList />
            </div>
        </div>
    )
}
