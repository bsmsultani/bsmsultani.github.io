// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Biography from './components/Biography.js';
import Roadmap from './components/Roadmap.js'
import Projects from './components/Projects.js';

import './App.css';



// Main App component with routing

const url = "http://127.0.0.1:8080"


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Biography></Biography>
      <Roadmap></Roadmap>
      <Projects></Projects>
    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  )
}

const ContactMe = () => {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  )
}


const App = () => {

  useEffect(() => {
    localStorage.setItem('url', url)
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/contact' element={<ContactMe/>}></Route>
      </Routes>
    </BrowserRouter>
)};

export default App;
