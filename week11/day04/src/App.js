import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';
import NotDo from './components/NotDo';

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
      <NotDo />
    </div>
  );
}

export default App;
