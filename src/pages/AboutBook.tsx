import React from 'react';
import './AboutBook.css';

const AboutBook: React.FC = () => {
  return (
    <div className="page about-book-page">
      <div className="container">
        <h1 className="page-title">About The Book</h1>
        <div className="book-details">
          <div className="book-cover">
            <img 
              src="https://github.com/adamazam2749-cmyk/adamazam.com/blob/main/book-mock-467x800.png?raw=true" 
              alt="Book Cover" 
              className="book-image"
            />
          </div>
          <div className="book-content">
            <h2>Book Title</h2>
            <p className="book-description">
              This is a compelling narrative that takes readers on an unforgettable journey. 
              The book explores themes of resilience, hope, and the human spirit through 
              beautifully crafted characters and an engaging plot.
            </p>
            <div className="book-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Compelling storytelling</li>
                <li>Rich character development</li>
                <li>Thought-provoking themes</li>
                <li>Beautiful prose</li>
              </ul>
            </div>
            <div className="book-actions">
              <button className="btn">Get the Book</button>
              <button className="btn btn-secondary">Read Excerpt</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBook;
