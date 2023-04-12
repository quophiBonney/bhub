import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Login from '../src/Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import Timeline from "./Pages/Timeline/Timeline";
function App() {
  return (
    <Router>
      <div>
       <Header/>
       <Routes>
        <Route exact path="/" Component={Main}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;
