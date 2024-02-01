import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="main-heading">
        <h2 id="contact-me">Contact Me</h2>
      </div>

      <div className="container">
        <div className="left">
          <h4 style={{ color: 'whitesmoke' }}>Kenny Cummings</h4>
          <h4 style={{ color: 'whitesmoke' }}>Web Developer | Digital Marketer & Merchandiser</h4>
        </div>

        <div className="right">
          <h4>
            <a
              href="https://www.linkedin.com/in/kennycummings/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              LinkedIn
            </a>
          </h4>
          <h5 style={{ color: 'whitesmoke' }}>kennethccummings@gmail.com</h5>
          <h5 style={{ color: 'whitesmoke' }}>215.432.0306</h5>
        </div>
      </div>

      <div className="footer" style={{ textAlign: 'center' }}>
        <h6 style={{ color: 'whitesmoke' }}>Made by Kenny Cummings</h6>
      </div>
    </div>
  );
};

export default Contact;
