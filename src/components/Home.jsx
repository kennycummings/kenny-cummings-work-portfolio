import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>🚀 Welcome — I’m Kenny Cummings</h2>

      <p className="home-subheadline">
        Front-end developer and <strong>AEM web content author</strong> focused on building
        clean, scalable experiences that perform in production.
      </p>

      <div className="home-highlights">
        <div className="home-card">
          <h3>What I do</h3>
          <ul>
            <li>Ship responsive UI and page updates fast (without breaking design systems)</li>
            <li>Author and QA content in AEM with production-ready workflows</li>
            <li>Support SEO and content performance across real business goals</li>
          </ul>
        </div>

        <div className="home-card">
          <h3>Tools & strengths</h3>
          <ul>
            <li><strong>Front-end:</strong> JavaScript, HTML, CSS (and React when needed)</li>
            <li><strong>Content platforms:</strong> AEM / CMS workflows</li>
            <li><strong>Execution:</strong> detail-oriented delivery under real deadlines</li>
          </ul>
        </div>
      </div>

      <p className="home-footerline">
        📌 Explore my projects, see what I’m building with <strong>Awoken</strong>, and check out
        my work experience across web content, eCommerce, and SEO.
      </p>

      <div className="home-cta-row">
        <a href="/projects" className="cta-button">
          View Projects
        </a>
        <a href="/indevelopment" className="cta-button secondary">
          See Awoken
        </a>
        <a href="/contact" className="cta-button secondary">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;
