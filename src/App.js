// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Biography from './components/Biography.js';


import './App.css';

// Main App component with routing

const url = "http://127.0.0.1:8080"


const App = () => {

  useEffect(() => {
    localStorage.setItem('url', url)
  }, [])

  
  return (
  <Router>
    <div className="app" style={{"backgroundColor" : "white"}}>
      <NavBar></NavBar>
      <Biography></Biography>
    </div>
  </Router>
)};

export default App;
