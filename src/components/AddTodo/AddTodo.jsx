import React, { useState } from 'react';

export default function AddTodo({ updateTodos }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    updateTodos({ id: `${Date.now()}`, text, status: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
