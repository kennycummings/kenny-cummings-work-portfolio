import React from 'react';

const Projects = () => {
  return (
    <div>

      <div className="web-development-projects">
        <h2 id="web-development-projects">Web Development Projects</h2>

        <br />
        <br />

        <h3>
          <center> Round on Me </center>
        </h3>

        <a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/round-on-me-homepage.png" alt="Round on Me" style={{ width: '100%' }} />
        </a>

        <br />
        <br />

        <p>
          <center>
            <h4><b>Check out my golfer meet-up app:</b></h4>
            <h4><b><a href="https://round-on-me-d919eb5aa07c.herokuapp.com/" target="_blank" rel="noopener noreferrer">Round on Me</a></b></h4>
          </center>
        </p>

        <br />
        <br />

        {/* Repeat the above structure for other projects */}

      </div>

      <br />
      <br />

      <div className="main-heading">
        <h2 id="web-content-and-development">Web Content and Development Work Experience</h2>
      </div>

      <div className="container">
        {/* Add content for web content and development work experience */}
      </div>

      <br />
      <br />

      <div className="main-heading">
        <h2 id="copywriting-and-blogging">Copywriting and Blogging Work Experience</h2>
      </div>

      <div className="container">
        {/* Add content for copywriting and blogging work experience */}
      </div>
    </div>
  );
};

export default Projects;
