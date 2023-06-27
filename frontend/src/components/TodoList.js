import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
