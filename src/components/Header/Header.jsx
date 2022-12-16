import React from 'react';
import styles from './Header.module.css';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header({ filterChange, filterState }) {
  const filters = ['All', 'Active', 'Completed'];
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={styles.container}>
      {darkMode === 'dark' ? (
        <HiOutlineSun className={styles.lightIcon} onClick={toggleDarkMode} />
      ) : (
        <HiOutlineMoon className={styles.lightIcon} onClick={toggleDarkMode} />
      )}

      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <div
            className={`${styles.filter} ${filter === filterState ? styles.selected : ''}`}
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
