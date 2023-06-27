import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.completed ? 'Completed' : 'Pending'}</p>
    </li>
  );
};

export default TodoItem;
