import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutBook from './pages/AboutBook';
import AboutAuthor from './pages/AboutAuthor';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AddBlog from './pages/AddBlog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-the-book" element={<AboutBook />} />
          <Route path="/about-the-author" element={<AboutAuthor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blogs/addblogs" element={<AddBlog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
