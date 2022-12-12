import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ id, text, setTodos, todos, status }) {
  // checkbox 컨트롤 하기 위한 state
  const [checked, setChecked] = useState(false);

  // checkbox의 상태를 변경하면 item의 status를 변경
  // 'Acive' <---> 'Completed'
  const handleCheck = () => {
    setChecked(!checked);
    const changed = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: checked ? 'Active' : 'Completed' };
      } else {
        return todo;
      }
    });
    setTodos(changed);
  };

  return (
    <li>
      <input type='checkbox' id={id} onChange={handleCheck} checked={status === 'Completed'} />
      <label htmlFor={id}>{text}</label>
      <span>
        <FiTrash2 />
      </span>
    </li>
  );
}
