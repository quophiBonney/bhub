import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Login from '../src/Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
