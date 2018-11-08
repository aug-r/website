import React from 'react';
import { Link } from 'react-router-dom';

function PostItem(props) {
  const { post } = props || {};
  const tags = post.tags || [];
  const { i } = props;
  const tagChips = tags.map(t => <div className="chip" key={`post-item-tag-chip-${post.id}-${t}`}>{t}</div>);
  return (
    <div className="col l4 m4 s6">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            {post.title}
          </div>
          <div>{post.timestamp}</div>
          <div>{post.date}</div>
          <div>{tagChips}</div>
          <Link to={`/post/${post.id}`}>See more...</Link>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
