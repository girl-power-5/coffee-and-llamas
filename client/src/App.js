import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";

function App() {

  useEffect(() => { 
    API.getData()
      .then(res => console.log('TEST', res))
      .catch(err => console.log(err))
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
