// App.js
import React, { useEffect } from 'react';
import {Route, Routes, HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Biography from './components/Biography.js';
import Roadmap from './components/Roadmap.js'
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import '@coreui/coreui/dist/css/coreui.min.css'
import Authentication from './components/Auth.js';
import ContactMe from './components/Contact.js';
import Journey from './components/Journey.js';

import './App.css';



// Main App component with routing

const url = "http://127.0.0.1:8080"


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Biography></Biography>
      <Journey></Journey>
      <Projects isBlogs={false}></Projects>
      
      <Footer></Footer>
    </div>
  )
}

const Blog = () => {
  
  return (
    <div>
      <NavBar></NavBar>
      <Projects isBlogs={true}></Projects>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Authentication></Authentication>
      <Footer></Footer>
    </div>
  )
}


const App = () => {

  useEffect(() => {
    localStorage.setItem('url', url)
  }, [])



  
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/blogs/:id' element={<Blog></Blog>}></Route>
        <Route path='/projects/:id'element={<Home />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </HashRouter>
)};

export default App;
