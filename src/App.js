import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalExampleTopAligned from "./ShopViewModal";
import SwipeViewModel from "./SwipeViewModel";
import {Link} from "react-router-dom";


function App() {
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
        <ModalExampleTopAligned/>
        <Link to="/swipe">
          Swipe Card
        </Link>
        <Link to="/interest">
          Interest Card
        </Link>
        <Link to="/demographic">
          Demographic Card
        </Link>
      </header>
    </div>
  );
}

export default App;
