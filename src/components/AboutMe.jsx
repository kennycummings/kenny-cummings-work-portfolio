import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div className="main-heading">
        <h2 id="about-me">About Me</h2>
      </div>

      <div className="container">
        <div className="text-container">
          <p style={{ textAlign: 'left' }}>
            Results-driven Full Stack Web Developer with a diverse background encompassing 3 years of web development expertise, coupled with 6 years of digital marketing, ecommerce, product management, and category management experience. Advanced in JavaScript, CSS, and HTML. Proficient in managing the entire product life cycle, implementing promotions, and driving sales growth. Adept at utilizing CMS, PIM, and Microsoft Excel for effective content and customer management. Demonstrated success as an Amazon and eBay seller. Highly analytical and adaptable, leveraging data analysis to provide actionable insights for product management. Proven track record of enhancing site visibility and Google performance through the implementation of innovative content strategies.
          </p>
        </div>
        <div className="image-container">
          <img src="assets/images/Kenny-Cummings-LinkedIn-Photo.png" alt="Kenny Cummings LinkedIn Profile Picture" style={{ width: '300px', height: '300px' }} className="image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
