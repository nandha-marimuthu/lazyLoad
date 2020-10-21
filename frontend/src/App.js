import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vugha Technologies
        </p>
        <a
          className="App-link"
          href="https://vugha.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to vugha
        </a>
      </header>
    </div>
  );
}

export default App;
