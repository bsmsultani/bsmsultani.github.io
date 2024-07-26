// Content.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Content.css'; // Import the CSS for Content


// Sample data for topics and posts
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

// Content component
const Content = () => {
  const { topicId, postId } = useParams();
  const topic = topics.find(t => t.id === topicId);
  const post = topic ? topic.posts.find(p => p.id === postId) : null;

  return (
    <div className="content">
      {topic ? (
        <>
          <h1>{topic.name}</h1>
          {post ? (
            <>
            </>
          ) : (
            <>
              <h2>Contents</h2>
              <ul>
                {topic.posts.map(post => (
                  <li key={post.id}>
                    <Link to={`/topic/${topicId}/post/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* Previous and Next navigation */}
        </>
      ) : (
        <p>Select a topic from the sidebar.</p>
      )}
    </div>
  );
};

// Helper functions for navigation
const getPreviousLink = (topicId, postId) => {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return '#';
  const index = topic.posts.findIndex(p => p.id === postId);
  if (index > 0) return `/topic/${topicId}/post/${topic.posts[index - 1].id}`;
  return '#';
};

const getNextLink = (topicId, postId) => {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return '#';
  const index = topic.posts.findIndex(p => p.id === postId);
  if (index < topic.posts.length - 1) return `/topic/${topicId}/post/${topic.posts[index + 1].id}`;
  return '#';
};

export default Content;
