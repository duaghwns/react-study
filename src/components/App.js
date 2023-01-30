import React, { Component, useState, ReactDOM, useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App =()=> {
  const [click, setClick ] = useState(0);

  const btnClick = ()=> {
    console.log("click", click);
    setClick(click+1);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <h2>{click}</h2>
      <input type="text" className="asdf" placeholder="React" value=""/>
      <input type="button" id='clk' className="btn" value="asdf" onClick={btnClick}/>
    </div>
  );
}

export default App;
