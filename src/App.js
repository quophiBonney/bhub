import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Login from '../src/Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
    <Router>
       <Header/>
       <Routes>
        <Route path="/" exact Component={Main}/>
        <Route path="/login" exact Component={Login}/>
        <Route path="/signup" exact Component={Signup}/>
        </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
