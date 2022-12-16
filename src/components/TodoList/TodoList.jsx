import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

const getTodosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));

export default function TodoList({ filterState }) {
  const [todos, setTodos] = useState(getTodosFromLocalStorage || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // update todos
  const handleAddTodos = (updated) => {
    setTodos([...todos, updated]);
  };

  // change todo status
  const handleChangeStatus = (changed) => {
    setTodos(
      todos.map((todo) => {
        if (changed.id === todo.id) {
          return { ...todo, status: changed.status === 'Active' ? 'Completed' : 'Active' };
        } else {
          return todo;
        }
      })
    );
  };

  // delete todos
  const handleDeleteTodos = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  // todos에 filter와 일치하는 item 배열
  const filteredList = todos.filter((todo) => (filterState === 'All' ? todo : todo.status === filterState));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredList.map((item) => (
          <Todo key={item.id} item={item} onDelete={handleDeleteTodos} onStatusChange={handleChangeStatus} />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodos} />
    </div>
  );
}
