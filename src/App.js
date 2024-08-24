// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Main App component with routing

const url = "http://127.0.0.1:8080"


const App = () => {

  useEffect(() => {
    localStorage.setItem('url', url)
  }, [])

  
  return (
  <Router>
    <div className="app">
      <h1> Under development </h1>
    </div>
  </Router>
)};

export default App;
