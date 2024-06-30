import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
        <div className="web-development-projects">
          <h2 id="web-development-projects">Web Development Projects</h2>

          <br />
          <br />

          <h3>Round on Me</h3>

          <a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/round-on-me-homepage.png" alt="Round on Me" style={{ width: '100%' }} />
          </a>

          <br />
          <br />

          <div>
            <h4><b>Check out my golfer meet-up app:</b></h4>
            <h4><b><a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">Round on Me</a></b></h4>
          </div>

          <br />
          <br />

          <h3>Your Nutrition Radar</h3>

          <a href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/Your-Nutrition-Radar-Home.png" alt="Your Nutrition Radar" style={{ width: '100%' }} />
          </a>

          <br />
          <br />

          <div>
            <h4><b>Check out my diet and nutrition app:</b></h4>
            <h4><b><a href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#" target="_blank" rel="noopener noreferrer">Your Nutrition Radar</a></b></h4>
          </div>

          <br />
          <br />

          <h3>JavaScript Quiz Game</h3>

          <a href="https://kennycummings.github.io/javascript-quiz-game/" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/javascript-quiz-game.png" alt="JavaScript Quiz Game" style={{ width: '100%' }} />
          </a>

          <br />
          <br />

          <div>
            <h4><b>Check out my JavaScript Quiz Game:</b></h4>
            <h4><b><a href="https://kennycummings.github.io/javascript-quiz-game/" target="_blank" rel="noopener noreferrer">JavaScript Quiz Game</a></b></h4>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="main-heading">
        <h2 id="web-content-and-development">Web Content and Development Work Experience</h2>
      </div>

      <div className="container">
        <div className="image-container">
          <img src="./assets/images/AWMA-homepage-new.png" alt="AWMA Homepage Navigation Edit" style={{ width: '100%' }} className="image" />
        </div>
        <div className="text-container">
          <h4>AWMA - Web Content Specialist</h4>
          <p>
            <ul>
              <li>Achieved an impressive 100% increase in clicks, impressions, and click-through-rate over a 6-month period by implementing strategic enhancements such as new copy, metadata optimization, navigation improvements, and best SEO practices</li>
              <li>Utilized knowledge of HTML, CSS, JavaScript, and Shopify Liquid to maintain and advance website</li>
              <li>Led a critical project overseeing the seamless website host migration from Shopify to Magento</li>
              <li>Designed a captivating new homepage for the Magento site</li>
              <li>Nurtured business partnerships with NetElixir to strengthen SEO, site mapping, and content strategies</li>
              <li>Managed website content and apps, ensuring content accuracy and resolving technical issues</li>
              <li>Effectively utilized Google (Analytics, My Business, and Ads) to drive data-informed decisions and executed successful PPC campaigns</li>
              <li>Managed content management systems including implementation, configuration, and maintenance</li>
            </ul>
            <b>Source: <a href="https://awma.com" target="_blank">AWMA Homepage</a></b>
          </p>

        </div>
        <div className='textAWMA'>

          <h4 style={{ textAlign: 'center' }}>
          Achieved an impressive 100% increase in clicks, impressions, and click-through-rate over a 6-month period by implementing strategic enhancements such as new copy, metadata optimization, navigation improvements, and best SEO practices.
          </h4>
        </div>
      </div>

      <br />
      <br />

      <div className="main-heading">
        <h2 id="copywriting-and-blogging">Copywriting and Blogging Work Experience</h2>
      </div>

      <div className="container">
        <div className="text-container">
          <h4>room service 360 - Ecommerce Content Specialist</h4>
          <p>
            <ul>
              <li>Managed luxury furniture brands including Porada, Bonaldo, Gamma Arredamenti, and Nicoline Italia, significantly expanding product offerings</li>
              <li>Introduced over 500 new products, skillfully creating and maintaining product detail pages in Magento</li>
              <li>Excelled in content curation, aligning published content with brand identity and best SEO practices</li>
              <li>Utilized Adobe Photoshop for image editing and PDF spec sheet creation</li>
              <li>Played a pivotal role in configuring product filters and sorting mechanisms to enhance user experience</li>
              <li>Authored SEO-optimized blog content using WordPress</li>
            </ul>
            <b>Source: <a href="https://www.roomservice360.com/inspiration/the-changing-of-the-seasons-fall-is-here/"
              target="_blank">roomservice 360 Fall Blog</a></b>
          </p>
        </div>
        <div className="image-container">
          <img src="./assets/images/roomservice360-fall-blog.png" alt="roomservice 360 Fall Blog" style={{ width: '100%' }} className="image" />
        </div>
      </div>

      <h4 style={{ textAlign: 'center' }}>
        Authored SEO-optimized blog content using WordPress.
      </h4>
    </div>
  );
};

export default Projects;
