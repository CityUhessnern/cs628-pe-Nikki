//Reference: https://react.dev/learn/managing-state#extracting-state-logic-into-a-reducer
import { useState } from 'react';
import TodoList from './TodoList.js';
import TodoTask from './TodoTask.js';

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: text,
      },
    ]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <h1>Todo List App</h1>
      <TodoTask onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

let nextId = 3;
const initialTodos = [
  {id: 0, text: 'Task1'},
  {id: 1, text: 'Task2'},
  {id: 2, text: 'Task3'}
];