import React from 'react';
import './App.css';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

export function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


    return (
        <>
        <TodoCounter />
        <TodoSearch />

                  <TodoList >
        {/* // Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading && <div className="loading"></div>}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed}
                onComplete={()=> completeTodo(todo.text)}
                onDelete={()=> deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

          {!!openModal && 
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          }


      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
        </>
      ); 
}