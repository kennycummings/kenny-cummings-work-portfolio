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
            Results-driven Full-Stack Web Developer with a diverse background encompassing 3 years of web development expertise, coupled with 6 years of digital marketing, ecommerce, product management, and category management experience. Advanced in JavaScript, CSS, HTML, CMS, and PIM. Proficient in managing the entire product life cycle, implementing promotions, and driving sales growth. Adept at utilizing CMS, PIM, and Microsoft Excel for effective content and customer management. Demonstrated success as an Amazon and eBay seller. Highly analytical and adaptable, leveraging data analysis to provide actionable insights for product management. Proven track record of enhancing site visibility and Google performance through the implementation of innovative content strategies.
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
