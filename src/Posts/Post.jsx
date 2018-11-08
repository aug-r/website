import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentWillMount() {
    const { match } = this.props || {};
    const { params } = match || {};
    const postID = params.id;
    fetch(`/api/posts/${postID}`)
      .then(r => r.json())
      .then(data => this.setState({ post: data[0] }))
      .catch(err => console.error(err));
  }

  render() {
    const { post } = this.state;
    const tags = post.tags || [];
    const tagChips = tags.map(t => <div className="chip" key={`post-page-tag-chip-${post.id}-${t}`}>{t}</div>);
    return (
      <div className="container">
        <div className="section">
          <div className="card center">
            <div className="card-image">
              <img src={post.image} alt={post.title} />
              <span className="card-title">{post.title}</span>
            </div>
            <div className="card-content">
              {tagChips}
            </div>
            <div className="card-action">
              <a href={post.link}>Watch Video</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
