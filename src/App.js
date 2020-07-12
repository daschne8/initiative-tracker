import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterHolder from './containers/CharacterHolder';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      DnD Initiative Tracker
      </header>
      <CharacterHolder />
    </div>
  );
}

export default App;
