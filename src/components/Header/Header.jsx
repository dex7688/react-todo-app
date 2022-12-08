import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import styles from './Header.module.css';

export default function Header({ filterChange, selected }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <header className={styles.container}>
      <HiOutlineMoon className={styles.lightIcon} />
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <div
            className={`${styles.filter} ${filter === selected ? styles.selected : ''}`}
            key={index}
            onClick={() => filterChange(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
    </header>
  );
}
