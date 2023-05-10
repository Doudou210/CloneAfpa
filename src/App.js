import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from "./components/LoginPage";
import Register from './components/Register';
// import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <Header/>
      <LoginPage/>
      <Home/>
      {/* <Banner/> */}
      <Footer/>
      
      <Routes>
        <Route path='/' component={Home}/>
        <Route path='/loginpage' component={LoginPage}/>
        <Route path='/register' component={Register}/>
      </Routes>
    </div>
  )
}

export default App;
