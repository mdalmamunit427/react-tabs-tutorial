import React, { useState } from 'react';
import './navbar.css';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Portfolio</div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;