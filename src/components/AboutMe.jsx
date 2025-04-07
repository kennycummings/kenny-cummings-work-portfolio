import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="main-heading">
        <h2 id="about-me">👋 Hi, I'm Kenny Cummings!</h2>
      </div>

      {/* Intro Section */}
      <div className="intro-container">
        <div className="text-container">
          <p>
            I’m a front-end developer who loves turning clean design into functional, responsive websites. Whether I’m coding an e-commerce platform or fine-tuning UX, I strive to build experiences that feel effortless to users and rewarding to clients.
          </p>
          <p>
            My journey into web development started with a simple site to showcase a creative project—and quickly turned into a passion for full-stack solutions, digital storytelling, and tech-driven growth. When I’m not coding, I’m usually writing music, working on indie games, or diving into UI trends.
          </p>
        </div>
        <div className="image-container">
          <img src="assets/images/Kenny-Cummings-LinkedIn-Photo.png" alt="Kenny Cummings" className="image" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h3>🚀 What I Bring to the Table:</h3>
        <ul>
          <li>🖥 <strong>Full Stack Development:</strong> JavaScript, React.js, HTML, CSS, CMS solutions</li>
          <li>📈 <strong>E-commerce Growth:</strong> Leveraging data to drive product performance</li>
          <li>📊 <strong>SEO & Digital Strategy:</strong> Boosting visibility through optimized content</li>
          <li>📌 <strong>Data-Driven Decision Making:</strong> Turning analytics into action</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta-container">
        <h3>💡 Let’s connect and build something amazing together!</h3>
        <p>
          Reach out for collaborations, freelance projects, or just to talk shop about development, design, or creativity in tech.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
