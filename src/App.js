import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './page/Home';


function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path='/' component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
