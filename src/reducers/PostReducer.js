// reducers/postsReducer.js
import { FETCH_POSTS, REMOVE_POST } from '../actions/types';

const initialState = {
  posts: [],
  loading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postsReducer;
