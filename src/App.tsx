import React from 'react';
import './App.css';

function App() {
  console.log('App is rendering');
  
  return (
    <div style={{ 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Adam Azam Portfolio</h1>
      <p>Website is working!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Test Navigation</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <a href="/about-the-book" style={{ color: '#ffffff', textDecoration: 'none' }}>About The Book</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/about-the-author" style={{ color: '#ffffff', textDecoration: 'none' }}>About The Author</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/blog" style={{ color: '#ffffff', textDecoration: 'none' }}>Blog</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/contact-us" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
