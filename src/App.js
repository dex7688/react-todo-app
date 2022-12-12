import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [filterState, setFilterState] = useState('All');

  const filterChange = (filter) => {
    setFilterState(filter);
  };

  return (
    <div className='app'>
      <Header filterChange={filterChange} filterState={filterState} />
      <TodoList filterState={filterState} />
    </div>
  );
}

export default App;
