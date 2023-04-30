import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
// import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Home/>
      {/* <Banner/> */}
      <Footer/>
      
      <Routes>
        <Route path='/' component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
