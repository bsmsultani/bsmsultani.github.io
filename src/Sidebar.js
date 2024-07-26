// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

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

// Sidebar component
const Sidebar = () => (
  <div className="sidebar">
    <h2>Topics</h2>
    <ul>
      {topics.map(topic => (
        <li key={topic.id} className="topic-box">
          <Link to={`/topic/${topic.id}`} className="topic-link">{topic.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
