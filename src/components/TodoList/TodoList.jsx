import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filterState }) {
  const [todos, setTodos] = useState([]);

  // todos 업데이트를 위해 props 전달
  const updateTodos = (updated) => {
    setTodos([...todos, updated]);
  };

  // todos에 filter와 일치하는 item 배열
  const filteredList = todos.filter((todo) => (filterState === 'All' ? todo : todo.status === filterState));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredList.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} status={todo.status} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
      <AddTodo updateTodos={updateTodos} />
    </div>
  );
}
