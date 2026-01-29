import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="main-heading">
        <h2 id="contact-me">📬 Let’s Connect</h2>
      </div>

      <div className="contact-content">
        {/* Left / Identity */}
        <div className="contact-left">
          <h3>Kenny Cummings</h3>
          <p className="contact-title">
            Front-End Developer & AEM Web Content Author
          </p>

          <p className="contact-blurb">
            I’m open to front-end, content engineering, and AEM-focused roles.
            Feel free to reach out about opportunities, collaborations, or projects.
          </p>
        </div>

        {/* Right / Contact Methods */}
        <div className="contact-right">
          <a
            href="https://www.linkedin.com/in/kennycummings/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            🔗 LinkedIn
          </a>

          <a
            href="mailto:kennethccummings@gmail.com"
            className="contact-link"
          >
            ✉️ kennethccummings@gmail.com
          </a>

          <span className="contact-text">
            📞 215&nbsp;•&nbsp;432&nbsp;•&nbsp;0306
          </span>

          <a
            href="/assets/Kenny-C-Cummings-Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link resume"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <small>© {new Date().getFullYear()} Kenny Cummings</small>
      </div>
    </div>
  );
};

export default Contact;
