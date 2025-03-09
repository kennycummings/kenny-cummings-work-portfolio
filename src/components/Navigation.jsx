import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the new CSS file

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Kenny Cummings
        </Link>

        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          ☰
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setNavOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setNavOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={() => setNavOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/indevelopment" className="nav-link" onClick={() => setNavOpen(false)}>
                In Development
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setNavOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
