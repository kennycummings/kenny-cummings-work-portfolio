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
            I thrive at the intersection of creativity and technology, crafting seamless digital experiences that drive engagement and growth.
          </p>
          <p>
            My journey into web development began when I built my first website to showcase a passion project. That curiosity evolved into a career where I specialize in <strong>Full Stack Development, Digital Marketing, and E-commerce Solutions.</strong>
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
          Reach out for collaborations, projects, or just to chat about the latest in web development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
