import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="page home-page">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <img 
              src="https://github.com/adamazam2749-cmyk/adamazam.com/blob/main/logo.png?raw=true" 
              alt="Adam Azam Logo" 
              className="logo"
            />
            <h1 className="hero-title">Welcome to Adam Azam's Portfolio</h1>
            <p className="hero-subtitle">
              Author, Writer, and Creative Mind
            </p>
            <div className="hero-buttons">
              <a href="/about-the-book" className="btn">About The Book</a>
              <a href="/about-the-author" className="btn btn-secondary">About The Author</a>
            </div>
          </div>
        </div>
        
        <div className="featured-section">
          <h2 className="section-title">Featured Work</h2>
          <div className="featured-content">
            <div className="book-showcase">
              <img 
                src="https://github.com/adamazam2749-cmyk/adamazam.com/blob/main/book-mock-467x800.png?raw=true" 
                alt="Book Cover" 
                className="book-image"
              />
              <div className="book-info">
                <h3>Latest Book</h3>
                <p>Discover the compelling narrative and insights in Adam's latest work.</p>
                <a href="/about-the-book" className="btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
