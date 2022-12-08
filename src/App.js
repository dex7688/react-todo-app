import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [selected, setSelected] = useState('All');

  const filterChange = (filter) => {
    setSelected(filter);
  };

  console.log(selected);
  return (
    <div className='app'>
      <Header filterChange={filterChange} selected={selected} />
      <TodoList />
    </div>
  );
}

export default App;
