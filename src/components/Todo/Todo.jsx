import React from 'react';
import styles from './Todo.module.css';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ item, onDelete, onStatusChange }) {
  const handleDeleteClick = () => {
    onDelete(item);
  };

  const handleCheckBoxChange = () => {
    onStatusChange(item);
  };

  return (
    <li className={styles.container}>
      <input
        className={styles.checkBox}
        type='checkbox'
        id={item.id}
        checked={item.status === 'Completed'}
        onChange={handleCheckBoxChange}
      />
      <label className={styles.text} htmlFor={item.id}>
        {item.text}
      </label>
      <span className={styles.iconWrapper} onClick={handleDeleteClick}>
        <FiTrash2 className={styles.icon} />
      </span>
    </li>
  );
}
