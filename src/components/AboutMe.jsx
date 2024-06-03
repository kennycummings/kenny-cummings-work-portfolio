import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="main-heading">
        <h2 id="about-me">About Me</h2>
      </div>

      <div className="content-container">
        <div className="text-container">
          <p>
          Results-driven Full Stack Web Developer and Digital Marketer/Merchandiser with a diverse background encompassing 6 years of digital marketing, Ecommerce, product management, and category management experience coupled with 3 years of web development expertise. Expert in CMS. Advanced in JavaScript, React.js, CSS, and HTML. Highly analytical and adaptable, leveraging data analysis to provide actionable insights for product management. Proven track record of enhancing site visibility and Google performance via implementation of innovative content strategies and code enhancements.
          </p>
        </div>
        <div className="image-container">
          <img src="assets/images/Kenny-Cummings-LinkedIn-Photo.png" alt="Kenny Cummings LinkedIn Profile Picture" className="image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
