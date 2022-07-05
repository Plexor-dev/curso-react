import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

export function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    }

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <label>Escrite tu nueva Task To do</label>
            <textarea value={newTodoValue} placeholder=" Escribe tu tarea.." className='text-area' 
            onChange={onWrite}
            name="user-task" id="" cols="30" rows="10"  />
            <div>
            <button
                type='button'
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button 
            type='submit'
            
            >
                Añadir
            </button>
            </div>
        </form>
    )
}