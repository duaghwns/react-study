import axios from 'axios';
import React, { 
  Component
  , useState
  , ReactDOM
  , useRef 
} from 'react';

import NavBar from './NavBar';
const App =()=> {
  const [click, setClick ] = useState(0);

  const btnClick = ()=> {
    console.log("click", click);
    setClick(click+1);
  }

  axios.get({method:'get', url:'/board/list'})
    .then(jsonData => {
      console.log('axios >> ', jsonData);
    });

  return (
    <div className="App">
      <NavBar/>
      <h1>Todo List App</h1>
      <h2>{click}</h2>
      <input type="text" className="asdf" placeholder="React" value=""/>
      <input type="button" id='clk' className="btn" value="asdf" onClick={btnClick}/>
    </div>
  );
}

export default App;
