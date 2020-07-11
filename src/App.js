import React from 'react';
import logo from './logo.svg';
import './App.css';
import {seedChars} from './data/seed';
import CharacterHolder from './containers/CharacterHolder';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      DnD Initiative Tracker
      </header>
      <CharacterHolder props={seedChars}/>
    </div>
  );
}

export default App;
