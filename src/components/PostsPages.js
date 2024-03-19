// components/PostsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost } from '../actions/postsActions';
import PostCard from './PostCard';
import BottomNavigation from './BottomNavigation';

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId));
  };

  const renderPosts = () => {
    return posts.map((post) => (
      <PostCard key={post.id} post={post} onRemove={handleRemovePost} />
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {renderPosts()}
      <BottomNavigation />
    </div>
  );
};

export default PostsPage;
