import './App.css';
import Nav from './pages/Nav'
import Register from './pages/Register'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route to="/" element={<></>} />
        <Route to="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;