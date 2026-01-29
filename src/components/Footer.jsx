import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h4 className="footer-name">Kenny Cummings</h4>
        <p className="footer-title">
          Front-End Developer & AEM Web Content Author
        </p>
      </div>

      <div className="right footer-links">
        <a
          href="https://www.linkedin.com/in/kennycummings/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:kennethccummings@gmail.com">
          Email
        </a>

        <a
          href="/assets/Kenny-C-Cummings-Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <div className="footer-bottom">
        <h6>© {new Date().getFullYear()} Kenny Cummings</h6>
      </div>
    </footer>
  );
};

export default Footer;
