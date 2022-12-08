import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '마트가기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

  const updateTodos = (updated) => {
    setTodos([...todos, updated]);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
      <AddTodo updateTodos={updateTodos} />
    </div>
  );
}
