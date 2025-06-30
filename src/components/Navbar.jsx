import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // Change 30px to your comfort
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <div className="nav-container">
       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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