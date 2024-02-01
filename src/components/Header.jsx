// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="float-left">Kenny Cummings Portfolio</h1>
      <div className="portfolio-container float-left">
        <img src="assets/images/Kenny-Cummings-LinkedIn-Photo.png" alt="Kenny Cummings LinkedIn Profile Picture" style={{ width: '75px', height: '75px' }} />
      </div>
    </div>
  );
};

export default Header;
