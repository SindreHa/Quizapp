import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState("")

  const hello = () => {
    fetch('http://localhost:8080/api/hello')
    .then(response => response.text())
    .then(message => setText(message))
  }

  hello()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
