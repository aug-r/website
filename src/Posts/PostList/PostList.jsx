import React from 'react';

import PostItem from './PostItem';

function PostList(props) {
  const { posts } = props || [];
  const mapped = posts.map((p, i) => <PostItem post={p} i={i} key={`post-list-item-${p.id}`} />);
  return (
    <div className="section">
      <div className="row">
        {mapped}
      </div>
    </div>
  );
}

export default PostList;
