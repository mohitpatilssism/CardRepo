// components/PostCard.js
import React from 'react';

const PostCard = ({ post, onRemove }) => {
  const handleRemoveClick = () => {
    onRemove(post.id);
  };

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default PostCard;
