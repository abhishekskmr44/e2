import logo from './logo.svg';
import './App.css';
import React from "react";

import List from './sprint-1/day-1/assignments/List';
import Joinus from './sprint-1/day-1/assignments/Joinus';
import Settings from './sprint-1/day-1/assignments/Settings';
import Contactus from './sprint-1/day-1/assignments/Contactus
import Login from './sprint-1/day-1/assignments/Login';
import Help from './sprint-1/day-1/assignments/Help';
import Search from './sprint-1/day-1/assignments/Search';
import Home from './sprint-1/day-1/assignments/Home';
import Download from './sprint-1/day-1/assignments/Download';
import Allbtns from './sprint-1/day-1/assignments/Allbtns;


function App() {
  return (
    <>
    <div className="App">
    <h1>
      Problem 1
    </h1>
     <List/>
     <h1>Problem 2</h1>
      <div className="P2">
      <Joinus/>
      <Settings/>
      <Login/>
      <Contactus/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
      </div>
      <h2>Problem 2</h2>
      <div className="P3">
      <Allbtns id="B2" name="JOIN US" ></Allbtns>
        <Allbtns id="B1" name="Settings" ></Allbtns>
        <Allbtns  id="B3" name="LOG IN"></Allbtns>
        <Allbtns id="B4" name="CONTACT"></Allbtns>
        <Allbtns id="B5" name="SEARCH"></Allbtns>
        <Allbtns id="B6" name="HELP"></Allbtns>
        <Allbtns id="B7" name="HOME"></Allbtns>
        <Allbtns id="B8" name="DOWNLOAD"></Allbtns>
      </div>
    </div>
    </>
   
  );
}

export default App;



