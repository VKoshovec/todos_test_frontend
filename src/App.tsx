import React from 'react';
import './App.css';



import Boardform from './components/boardform/Boardform';
import Board from './components/bord/Board';
import Cardform from './components/cardform/Cardform';
import BoardList from './components/bordlist/Boardlist';

function App() {
  return (
    <div className="App">
      
      <Cardform/>
      <header className="App-header">

      <h1>Mokaps</h1>     
      <Boardform/>
      <BoardList/>

      </header>
    </div>
  );
}

export default App;
