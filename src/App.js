import React from 'react';
import logo from './assets/imgs/logo.png';
import './App.css';
import ModalExampleTopAligned from "./ShopViewModal";
import SwipeViewModel from "./SwipeViewModel";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <Link to="/swipe">
          A Shoc Demo
        </Link>
      </header>
    </div>
  );
}

export default App;
