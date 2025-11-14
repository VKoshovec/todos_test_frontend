import React from 'react';
import './App.css';
import Boardform from './components/boardform/Boardform';
import Board from './components/bord/Board';
import Loader from './components/loader/Loader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Mokaps</h1>
      <Boardform/>
      <Board/>
      </header>
    </div>
  );
}

export default App;
