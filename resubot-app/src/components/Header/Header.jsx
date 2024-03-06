import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <div className="close-icon" onClick={() => setIsOpen(false)}>X</div> {/* Add this line */}

      </div>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
