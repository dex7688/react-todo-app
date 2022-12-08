import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ id, text }) {
  return (
    <li>
      <input type='checkbox' id={id} />
      <label htmlFor={id}>{text}</label>
      <span>
        <FiTrash2 />
      </span>
    </li>
  );
}
