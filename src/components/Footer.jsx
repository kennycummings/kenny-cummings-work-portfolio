import React from 'react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <footer>
      <div className="main-heading">
        <h2 id="contact-me">Contact Me</h2>
      </div>

      <div className="left">
        <h4>Kenny Cummings</h4>
        <h4>Full Stack Web Developer | AEM Web Content Author</h4>
      </div>

      <div className="right">
        <h5>
          <a
            href="https://www.linkedin.com/in/kennycummings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </h5>
        <h5>kennethccummings@gmail.com</h5>
        <h5>215.432.0306</h5>
        <h5>
          <a
            href="/assets/KennyCummingsResume.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
        </h5>
      </div>

      <div className="left">
        <h6>Made by Kenny Cummings</h6>
      </div>
    </footer>
  );
};

export default Footer;
