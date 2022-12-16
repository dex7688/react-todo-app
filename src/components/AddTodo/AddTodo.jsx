import React, { useState } from 'react';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd({ id: `${Date.now()}`, text, status: 'Active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  );
}
