import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import api from '../services/api';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };

  const handleCreateTodo = async () => {
    try {
      const response = await api.post('/todos', {
        title,
        description,
      });
      setTodos((prevTodos) => [...prevTodos, response.data]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating todo', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Create</button>

      <h2>Todos</h2>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoPage;
