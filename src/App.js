import React from 'react';
import './App.css';
import './responsive/AllResponsive.css'
import { Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import LoginPage from './components/LoginPage';
// import Banner from './components/Banner';


function App() {
  return (
    <div>      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
