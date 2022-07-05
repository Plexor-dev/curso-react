import React from 'react';
import { AppUI } from './Appui';
import { TodoProvider } from '../TodoContext';




// const defaultTodo = [
//   {id:1, text: 'Papas', completed: true },
//   {id:2, text: 'Morron', completed: false },
//   {id:3, text: 'Aceite', completed: false },
//   {id:4, text: 'tomar el curso de algo', completed: false },
//   {id:5, text: 'Aceite', completed: true },
//   {id:6, text: 'Ajo', completed: false },
// ]




function App() {


  return (
    <TodoProvider>
      <AppUI 
      
      />
    </TodoProvider>
  );

}

export default App;
