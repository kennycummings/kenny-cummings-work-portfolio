import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Navigation
        </Link>

        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          ☰{/* Preferred hamburger icon */}
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
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
              <Link to="/contact" className="nav-link" onClick={() => setNavOpen(false)}>
                Contact
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
