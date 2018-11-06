import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>aug_r</h1>
      <div><Link to="/posts">See all posts</Link></div>
      <div><Link to="/create">Create a post</Link></div>
    </div>
  );
}

export default Home;
