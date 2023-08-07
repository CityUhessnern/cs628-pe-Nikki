export default function TodoList({
  todos, onDeleteTodo
}) {

  return (
    <>
      {todos.map(todo => (
        <ul key={todo.id}>
          <Todo
            todo={todo}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        </ul>
      ))}
    </>
  );
}

function Todo({ todo, onDelete }) {
  return (
    <div className='todo-card'>
     <label>
      {todo.text}
    </label>
    <delete-button 
      onClick={onDelete}
    >
      Delete
    </delete-button>   
    </div>
  );
}