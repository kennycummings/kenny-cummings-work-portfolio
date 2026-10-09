import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="main-heading">
        <h2 id="about-me">👋 Hi, I’m Kenny Cummings</h2>
      </div>

      {/* Intro Section */}
      <div className="intro-container">
        <div className="text-container">
          <p>
            I’m a front-end developer and AEM web content author who specializes in building
            scalable, user-friendly digital experiences. My work lives at the intersection of
            clean UI, maintainable code, and content that actually performs in production.
          </p>

          <p>
            Professionally, I’ve supported high-traffic e-commerce and content platforms by
            shipping pages quickly, improving SEO and navigation, and collaborating across
            design, marketing, and development teams. I’m comfortable working inside established
            design systems while still finding opportunities to improve performance and usability.
          </p>

          <p>
            Outside of client and enterprise work, I build <strong>Archwake</strong>, a mobile fitness RPG,
            and <strong>Terralus</strong>, a story-driven RPG where I handle gameplay systems, UI,
            and original music. These projects
            let me explore architecture, UX flows, and creative problem-solving beyond typical web apps.
          </p>
        </div>

        <div className="image-container">
          <img
            src="/assets/images/Kenny-Cummings-LinkedIn-Photo.png"
            alt="Kenny Cummings"
            className="image"
          />
        </div>
      </div>

      {/* Skills / Value Section */}
      <div className="skills-container">
        <h3>🚀 What I Bring to the Table</h3>
        <ul>
          <li>
            🧩 <strong>Front-End Development:</strong> JavaScript, HTML, CSS, responsive layouts,
            component-based UI, and client-side state
          </li>
          <li>
            🏗 <strong>AEM & CMS Authoring:</strong> Page creation, component usage, QA workflows,
            content updates, and production support
          </li>
          <li>
            📈 <strong>SEO & Content Performance:</strong> Optimized product pages, metadata,
            internal linking, and collaboration with SEO teams
          </li>
          <li>
            🔍 <strong>Detail-Oriented Execution:</strong> Translating requirements into clean,
            reliable implementations under real deadlines
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta-container">
        <h3>💡 Let’s Work Together</h3>
        <p>
          I’m interested in front-end, content engineering, and AEM-focused roles where thoughtful
          execution and collaboration matter. Feel free to reach out if you’d like to talk projects,
          opportunities, or creative ideas.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
