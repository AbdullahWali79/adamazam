import React from 'react';
import './AboutAuthor.css';

const AboutAuthor: React.FC = () => {
  return (
    <div className="page about-author-page">
      <div className="container">
        <h1 className="page-title">About The Author</h1>
        <div className="author-details">
          <div className="author-image">
            <img 
              src="https://github.com/adamazam2749-cmyk/adamazam.com/blob/main/author_new_img.jpg?raw=true" 
              alt="Adam Azam" 
              className="author-photo"
            />
          </div>
          <div className="author-content">
            <h2>Adam Azam</h2>
            <p className="author-bio">
              Adam Azam is a passionate writer and storyteller with a unique voice that 
              resonates with readers worldwide. With years of experience in crafting 
              compelling narratives, Adam brings depth and authenticity to every story.
            </p>
            <p className="author-bio">
              His writing style combines emotional depth with engaging storytelling, 
              creating works that not only entertain but also inspire and provoke thought. 
              Adam's dedication to his craft is evident in every page he writes.
            </p>
            <div className="author-achievements">
              <h3>Achievements & Recognition</h3>
              <ul>
                <li>Published author with multiple works</li>
                <li>Recognized for literary excellence</li>
                <li>Active in the writing community</li>
                <li>Mentor to aspiring writers</li>
              </ul>
            </div>
            <div className="author-contact">
              <h3>Connect with Adam</h3>
              <p>Follow Adam's journey and stay updated with his latest works.</p>
              <a href="/contact-us" className="btn">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
