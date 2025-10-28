import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-the-book" className="nav-link">ABOUT THE BOOK</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-the-author" className="nav-link">ABOUT THE AUTHOR</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
