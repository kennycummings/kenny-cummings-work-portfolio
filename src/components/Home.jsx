import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to My Portfolio!</h2>
      <p>
        Hi, I'm Kenny Cummings, a passionate and results-driven Full Stack Web Developer | AEM Web Content Author with a diverse background in digital marketing, eCommerce, and product management.
        My expertise lies in JavaScript, React.js, CSS, HTML, CMS, and PIM. I have a proven track record of managing the entire product lifecycle, implementing effective content/promotions, and driving sales growth.
        Explore my portfolio and work experience to learn more about my skills and projects!
      </p>

      <a href="/projects" className="cta-button">
        View My Projects
      </a>
    </div>
  );
};

export default Home;
