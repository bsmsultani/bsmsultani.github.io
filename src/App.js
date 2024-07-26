// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Content from './Content'; // Import the Content component
import Rightsidebar from './Righsidebar';
import './App.css';

// Main App component with routing
const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
        <Routes>
          <Route path="/" element={<p>Select a topic from the sidebar.</p>} />
          <Route path="/topic/:topicId" element={<Content />} />
          <Route path="/topic/:topicId/post/:postId" element={<Content />} />
        </Routes>
      <Rightsidebar />
    </div>
  </Router>
);

export default App;
