// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Rightsidebar.css';

// Sample data for topics
const topics = [
  {
    id: 'cab201',
    name: 'CAB201 - Programming Principles',
    posts: [
      { id: 'programming', title: 'Programming' },
      { id: 'types-and-expressions', title: 'Types and Expressions' },
      { id: 'structured-programming', title: 'Structured Programming' },
      // Add more posts here
    ]
  },
  // Add more topics here
];

const search_bar = () => (
  <div>
    <input type='text' className='search-input' placeholder='Search...' />
  </div>
);

// Sidebar component
const Rightsidebar = () => (
  <div className="leftsidebar">
    <div>
      <input type='text' className='search-input' placeholder='Search...' />
    </div>
  </div>
);

export default Rightsidebar;
