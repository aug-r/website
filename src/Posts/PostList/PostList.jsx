import React from 'react';

import PostItem from './PostItem';

function PostList(props) {
  const { posts } = props || [];
  const mapped = posts.map(p => <PostItem post={p} key={`post-list-item-${p.id}`} />);
  return (
    <div className="section">
      {mapped}
    </div>
  );
}

export default PostList;
