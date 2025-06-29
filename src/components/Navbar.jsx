import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="nav-container">
       <nav className="navbar">
        <div className="logo-section">
          <img src="/logos/logo.png" alt="tinqbit" className="logo"/>
        </div>
        <div className="nav-buttons">
          <ul className="nav-menu">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/About-us">About us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <Link to="/get-started" className="get-started-section">
          <button className="get-started">
            get started
          </button>
        </Link>
      </nav>
    </div>
    );
};

export default Navbar;