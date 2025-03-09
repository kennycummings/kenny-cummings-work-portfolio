import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="web-development-projects">Web Development Projects</h2>

      {/* Round on Me Project */}
      <div className="text-container">
        <h3>Round on Me</h3>
        <a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/round-on-me-homepage.png" alt="Round on Me" />
        </a>
        <h4>
          <b>Check out my golfer meet-up app:</b>
          <br />
          <a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Round on Me
          </a>
        </h4>
      </div>

      {/* Your Nutrition Radar Project */}
      <div className="text-container">
        <h3>Your Nutrition Radar</h3>
        <a href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/Your-Nutrition-Radar-Home.png" alt="Your Nutrition Radar" />
        </a>
        <h4>
          <b>Check out my diet and nutrition app:</b>
          <br />
          <a href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#" target="_blank" rel="noopener noreferrer">
            Your Nutrition Radar
          </a>
        </h4>
      </div>

      {/* JavaScript Quiz Game Project */}
      <div className="text-container">
        <h3>JavaScript Quiz Game</h3>
        <a href="https://kennycummings.github.io/javascript-quiz-game/" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/javascript-quiz-game.png" alt="JavaScript Quiz Game" />
        </a>
        <h4>
          <b>Check out my JavaScript Quiz Game:</b>
          <br />
          <a href="https://kennycummings.github.io/javascript-quiz-game/" target="_blank" rel="noopener noreferrer">
            JavaScript Quiz Game
          </a>
        </h4>
      </div>

      {/* Web Content and Development Experience */}
      <h2 id="web-content-and-development">Web Content and Development Work Experience</h2>
      <div className="container">
        <div className="image-container">
          <img src="assets/images/AWMA-homepage-new.png" alt="AWMA Homepage Navigation Edit" />
        </div>
        <div className="text-container">
          <h4>AWMA - Web Content Specialist</h4>
          <ul>
            <li>Achieved a 100% increase in clicks, impressions, and CTR by implementing strategic enhancements.</li>
            <li>Utilized HTML, CSS, JavaScript, and Shopify Liquid to maintain and improve the website.</li>
            <li>Led the migration project from Shopify to Magento.</li>
            <li>Managed SEO strategies and collaborated with NetElixir for site mapping.</li>
          </ul>
          <b>Source: <a href="https://awma.com" target="_blank">AWMA Homepage</a></b>
        </div>
      </div>

      {/* Copywriting and Blogging Experience */}
      <h2 id="copywriting-and-blogging">Copywriting and Blogging Work Experience</h2>
      <div className="container">
        <div className="text-container">
          <h4>room service 360 - Ecommerce Content Specialist</h4>
          <ul>
            <li>Managed luxury furniture brands and expanded product offerings.</li>
            <li>Published over 500 new products with SEO-optimized content.</li>
            <li>Utilized Adobe Photoshop for content creation and image editing.</li>
            <li>Configured product filters and improved user experience.</li>
          </ul>
          <b>Source: <a href="https://www.roomservice360.com/inspiration/the-changing-of-the-seasons-fall-is-here/" target="_blank">roomservice 360 Fall Blog</a></b>
        </div>
        <div className="image-container">
          <img src="assets/images/roomservice360-fall-blog.png" alt="roomservice 360 Fall Blog" />
        </div>
      </div>

      <h4 className="textAWMA">
        Authored SEO-optimized blog content using WordPress.
      </h4>
    </div>
  );
};

export default Projects;
