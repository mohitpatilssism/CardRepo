// actions/postsActions.js
import { FETCH_POSTS, REMOVE_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
  // Fetch posts from API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log("noww",data)

  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: postId,
});
