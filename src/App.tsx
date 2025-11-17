import React from 'react';
import './App.css';
import Boardform from './components/boardform/Boardform';
import Board from './components/bord/Board';
import Loader from './components/loader/Loader';
import Cardform from './components/cardform/Cardform';

function App() {
  return (
    <div className="App">
      <Loader/>
      <Cardform/>
      <header className="App-header">
      <h1>Mokaps</h1>
      <Boardform/>
      <Board/>
      </header>
    </div>
  );
}

export default App;
