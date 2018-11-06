import React, { Component } from 'react';

import PostList from './PostList/PostList';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    console.log('here')
    fetch('/api/posts/recent')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <PostList posts={posts} />
      </div>
    );
  }
}

export default Posts;
