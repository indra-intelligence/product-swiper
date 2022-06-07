import React from 'react';
import logo from './assets/imgs/logo.png';
import background from './assets/imgs/ashoc-bg.png'
import header from './assets/imgs/ashoc-header.png'
import './App.css';
import ModalExampleTopAligned from "./ShopViewModal";
import SwipeViewModel from "./SwipeViewModel";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <img src={header} className="" alt="logo" />
        <img src={background} className="" alt="logo" />
        <SwipeViewModel />
    </div>
  );
}

export default App;
