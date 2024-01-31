import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="float-left">Kenny Cummings Portfolio</h1>
      <div className="portfolio-container float-left">
        <img src="assets/images/Kenny-Cummings-LinkedIn-Photo.png" alt="Kenny Cummings LinkedIn Profile Picture" style={{ width: '75px', height: '75px' }} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
