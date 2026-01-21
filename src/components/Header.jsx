import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        {/* Brand should link home */}
        <NavLink to="/" className="brand" aria-label="Go to Home">
          <img
            src="assets/images/Kenny-Cummings-LinkedIn-Photo.png"
            alt="Kenny Cummings"
            className="brand-avatar"
          />
          <div className="brand-text">
            <h1>Kenny Cummings</h1>
            <p>Portfolio</p>
          </div>
        </NavLink>

        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/indevelopment" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Awoken
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
