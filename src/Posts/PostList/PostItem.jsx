import React from 'react';
import { Link } from 'react-router-dom';

function PostItem(props) {
  const { post } = props || {};
  const tags = post.tags || [];
  const tagChips = tags.map(t => <div className="chip" key={`post-item-tag-chip-${post._id}-${t}`}>{t}</div>);
  return (
    <div className="card">
      <div className="card-title">
        {post.title}
      </div>
      <div className="card-content">
        <div>{tagChips}</div>
        <Link to={post.link}>Click here for more info</Link>
      </div>
    </div>
  );
}

export default PostItem;
