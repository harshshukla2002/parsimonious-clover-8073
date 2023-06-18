import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import "../CSS/TodoApp.css";
import axios from "axios";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTodoId, setEditTodoId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const token = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const GetCofig = {
      headers: { authorization: `bearer ${token}` },
      params: {
        userId: user._id,
      },
    };
    try {
      const response = await axios.get(
        "https://clear-gaiters-hen.cyclic.app/todos/",
        GetCofig
      );
      setTodos(response.data.todos);
      localStorage.setItem(
        "todo-length",
        JSON.stringify(response.data.todos.length)
      );
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const createTodo = async () => {
    try {
      const response = await fetch(
        "https://clear-gaiters-hen.cyclic.app/todos/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            title: newTitle,
            description: newDescription,
          }),
        }
      );
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTitle("");
      setNewDescription("");
      fetchTodos();
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleEdit = (id, title, description) => {
    setEditTodoId(id);
    setEditTitle(title);
    setEditDescription(description);
  };

  const updateTodo = async (id) => {
    try {
      const response = await fetch(
        `https://clear-gaiters-hen.cyclic.app/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            title: editTitle,
            description: editDescription,
          }),
        }
      );
      if (response.ok) {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return { ...todo, title: editTitle, description: editDescription };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditTodoId("");
        setEditTitle("");
        setEditDescription("");
        fetchTodos();
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://clear-gaiters-hen.cyclic.app/todos/${id}`,
        {
          method: "DELETE",
          headers: { authorization: `bearer ${token}` },
        }
      );
      if (response.ok) {
        const updatedTodos = todos.filter((todo) => todo._id !== id);
        setTodos(updatedTodos);
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
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
          {todos?.map((todo) => (
            <tr
              key={todo._id}
              className={`todo-item ${
                editTodoId === todo._id ? "editing" : ""
              }`}
            >
              <td>
                {editTodoId === todo._id ? (
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
                {editTodoId === todo._id ? (
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
                {editTodoId === todo._id ? (
                  <>
                    <button
                      className="action-button"
                      onClick={() => updateTodo(todo._id)}
                    >
                      <FaCheck className="action-icon" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="action-button"
                      onClick={() =>
                        handleEdit(todo._id, todo.title, todo.description)
                      }
                    >
                      <FaEdit className="action-icon" />
                    </button>
                    <button
                      className="action-button"
                      onClick={() => deleteTodo(todo._id)}
                    >
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
