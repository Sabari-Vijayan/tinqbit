import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Increased threshold for better UX
      setScrolled(isScrolled);
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="nav-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-section">
          <img src="/logos/logo.png" alt="tinqbit" className="logo"/>
        </div>
        {/* Hamburger for mobile */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {/* Desktop nav */}
        <div className="nav-buttons">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About-us">About us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <Link to="/Contact-us" className="get-started-section">
          <button className="get-started">
            get started
          </button>
        </Link>
      </nav>
      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        style={{ display: menuOpen ? 'flex' : 'none' }}
      >
        <ul className="mobile-nav-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Homes</Link></li>
          <li><Link to="/About-us" onClick={() => setMenuOpen(false)}>About us</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <Link to="/Contact-us" className="mobile-get-started-section" onClick={() => setMenuOpen(false)}>
          <button className="get-started mobile-get-started">get started</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;