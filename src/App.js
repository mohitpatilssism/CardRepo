// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './components/PostsPages';

function App() {
  return (
  
    <Router>
    <Routes>
      <Route exact path="/" Component={PostsPage} />
      </Routes>
    </Router>
    
  );
}

export default App;

