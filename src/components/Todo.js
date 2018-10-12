import React from 'react';

const Todo = ({ todo, toggleTodo, starTodo, deleteTodo }) => (
  <div>
    <li
      key={todo.id}
      style={{
        textDecoration: todo.complete ? 'line-through' : 'none',
        color: todo.star ? 'red' : 'black'
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
    <span role="img" onClick={() => starTodo(todo.id)}>
      ⭐
    </span>
    <span role="img" onClick={() => deleteTodo(todo.id)}>
      ❌
    </span>
  </div>
);

export default Todo;
