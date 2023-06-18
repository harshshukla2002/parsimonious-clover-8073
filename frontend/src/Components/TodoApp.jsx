import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit, FaCheck } from 'react-icons/fa';
import '../CSS/TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editTodoId, setEditTodoId] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:4500/todos');
      const data = await response.json();
      setTodos(data.todos || []);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const createTodo = async () => {
    try {
      const response = await fetch('http://localhost:4500/todos/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
        }),
      });
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleEdit = (id, title, description) => {
    setEditTodoId(id);
    setEditTitle(title);
    setEditDescription(description);
  };

  const updateTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:4500/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle,
          description: editDescription,
        }),
      });
      if (response.ok) {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: editTitle, description: editDescription };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditTodoId('');
        setEditTitle('');
        setEditDescription('');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:4500/todos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
        }}
      >
        <input
          type="text"
          className="todo-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a new title"
        />
        <input
          type="text"
          className="todo-input"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Add a new description"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className={`todo-item ${editTodoId === todo.id ? 'editing' : ''}`}>
              <td>
                {editTodoId === todo.id ? (
                  <input
                    type="text"
                    className="todo-input"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  todo.title
                )}
              </td>
              <td>
                {editTodoId === todo.id ? (
                  <input
                    type="text"
                    className="todo-input"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                ) : (
                  todo.description
                )}
              </td>
              <td>
                {editTodoId === todo.id ? (
                  <>
                    <button className="action-button" onClick={() => updateTodo(todo.id)}>
                      <FaCheck className="action-icon" />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="action-button" onClick={() => handleEdit(todo.id, todo.title, todo.description)}>
                      <FaEdit className="action-icon" />
                    </button>
                    <button className="action-button" onClick={() => deleteTodo(todo.id)}>
                      <FaTrashAlt className="action-icon" />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
