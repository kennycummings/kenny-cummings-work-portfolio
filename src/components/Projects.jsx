import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="web-development-projects">Web Development Projects</h2>

      {/* Awoken Project */}
      <div className="text-container">
        <h3>Awoken (In Development)</h3>
        <a href="https://awokenrpg.onrender.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/awoken-title-screen.jpg" alt="Awoken RPG Title Screen" />
        </a>
        <p>
          <strong>Awoken</strong> is an original, narrative-driven turn-based RPG built in the Godot Engine.
          I designed and implemented the core combat systems, dialogue flow, UI, and original soundtrack.
        </p>
        <ul>
          <li>Custom turn-based battle system with skills, targeting, and feedback</li>
          <li>Branching dialogue and cutscenes using Dialogic</li>
          <li>Custom UI systems, animations, and visual effects</li>
          <li>Original music composition and audio integration</li>
        </ul>
        <p>
          <em>Tech: Godot, GDScript, Dialogic, Aseprite, custom UI systems</em>
        </p>
        <a href="https://awokenrpg.onrender.com/" target="_blank" rel="noopener noreferrer">
          View Awoken Companion Site
        </a>
      </div>

      {/* Your Nutrition Radar Project */}
      <div className="text-container">
        <h3>Your Nutrition Radar</h3>
        <a
          href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Your-Nutrition-Radar-Home.png"
            alt="Your Nutrition Radar home screen"
          />
        </a>
        <p>
          <strong>Your Nutrition Radar</strong> is a browser-based nutrition and recipe exploration app
          built with vanilla JavaScript and a public food/recipe API.
        </p>
        <ul>
          <li>Integrated a third-party recipe and nutrition API using JavaScript</li>
          <li>Parsed and rendered dynamic API data to the DOM</li>
          <li>Implemented conditional rendering and user-driven search flows</li>
          <li>Collaborated on a team project using Git and GitHub</li>
        </ul>
        <p>
          <em>Tech: JavaScript, HTML, CSS, third-party recipe/nutrition API</em>
        </p>
        <p>
          <em>Repo: Team-owned (available upon request)</em>
        </p>
        <a
          href="https://mykhailozakh.github.io/Your-Nutrition-Radar/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
      </div>

      {/* JavaScript Quiz Game Project */}
      <div className="text-container">
        <h3>JavaScript Quiz Game</h3>
        <a
          href="https://kennycummings.github.io/javascript-quiz-game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/javascript-quiz-game.png"
            alt="JavaScript Quiz Game"
          />
        </a>
        <p>
          A solo project demonstrating core JavaScript fundamentals such as DOM manipulation,
          event handling, and client-side state management.
        </p>
        <ul>
          <li>Built dynamic question and score logic in vanilla JavaScript</li>
          <li>Handled user input, validation, and game state transitions</li>
          <li>Designed responsive UI using HTML and CSS</li>
        </ul>
        <p>
          <em>Tech: JavaScript, HTML, CSS</em>
        </p>
        <a
          href="https://github.com/kennycummings/javascript-quiz-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repo
        </a>
      </div>

      {/* Web Content and Development Experience */}
      <h2 id="web-content-and-development">Web Content and Development Work Experience</h2>

      {/* Vanguard — Own Your Future Project */}
      <div className="container">
        <div className="image-container">
          <img
            src="assets/images/vanguard-how-should-i-save-for-college.png"
            alt="Vanguard Own Your Future — How should I save for college?"
          />
        </div>

        <div className="text-container">
          <h4>Vanguard — AEM Content Project (Own Your Future)</h4>
          <ul>
            <li>Published and maintained a financial education article in AEM using reusable components and structured content patterns</li>
            <li>Implemented/validated SEO metadata, semantic HTML, and accessibility-minded copy updates to support discoverability and UX</li>
            <li>Coordinated edits through Agile workflows and performed cross-device QA to ensure consistent rendering across breakpoints</li>
          </ul>

          <b>
            Source:{' '}
            <a
              href="https://ownyourfuture.vanguard.com/content/en/learn/financial-planning/how-should-i-save-for-college.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              How should I save for college?
            </a>
          </b>
        </div>
      </div>

      <div className="container">
        <div className="image-container">
          <img src="assets/images/AWMA-homepage-new.png" alt="AWMA Homepage Navigation Edit" />
        </div>
        <div className="text-container">
          <h4>AWMA — Web Content Specialist</h4>
          <ul>
            <li>Achieved a 100% increase in clicks, impressions, and CTR through strategic content and navigation enhancements</li>
            <li>Maintained and improved site functionality using HTML, CSS, JavaScript, and Shopify Liquid</li>
            <li>Led a platform migration from Shopify to Magento</li>
            <li>Managed SEO strategy and collaborated with NetElixir on site mapping</li>
          </ul>
          <b>
            Source:{' '}
            <a href="https://awma.com" target="_blank" rel="noopener noreferrer">
              AWMA Homepage
            </a>
          </b>
        </div>
      </div>

      {/* Copywriting and Blogging Experience */}
      <h2 id="copywriting-and-blogging">Copywriting and Blogging Work Experience</h2>
      <div className="container">
        <div className="text-container">
          <h4>room service 360 — Ecommerce Content Specialist</h4>
          <ul>
            <li>Published 500+ SEO-optimized product listings for luxury furniture brands</li>
            <li>Created and edited marketing imagery using Adobe Photoshop</li>
            <li>Configured product filters and improved on-site user experience</li>
            <li>Authored blog content using WordPress</li>
          </ul>
          <b>
            Source:{' '}
            <a
              href="https://www.roomservice360.com/inspiration/the-changing-of-the-seasons-fall-is-here/"
              target="_blank"
              rel="noopener noreferrer"
            >
              room service 360 Fall Blog
            </a>
          </b>
        </div>
        <div className="image-container">
          <img src="assets/images/roomservice360-fall-blog.png" alt="room service 360 Fall Blog" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
