import React from 'react';
import './nav.styles.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <p>SANJAY SINGH</p>
      </div>
      <div className="nav-info">
        <Link className="home" to="/" aria-label="Go to Home">
          <span>HOME</span>
        </Link>
        <Link className="contact" to="/Contact" aria-label="Go to Contact">
          <span>CONTACT</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
