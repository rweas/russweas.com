import React from 'react';
import logo from './russweas.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to russweas.com.
        </p>
        <a
          className="App-link"
          href="https://notes.russweas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CS 101 Notes
        </a>
        <a
          className="App-link"
          href="https://github.com/rweas"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub @rweas
        </a>
        <a
          className="App-link"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
         Resume
        </a>
      </header>
    </div>
  );
}

export default App;
