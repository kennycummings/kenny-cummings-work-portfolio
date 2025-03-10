import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>🚀 Welcome to My Digital Playground!</h2>
      <p>
        Hi, I'm <strong>Kenny Cummings</strong>, a results-driven <strong>Full Stack Web Developer & AEM Web Content Author</strong> with a passion for creating seamless, high-impact digital experiences. 
        With a background spanning <strong>web development, digital marketing, and eCommerce</strong>, I specialize in crafting intuitive user interfaces, optimizing content strategy, and driving business growth.
      </p>

      <p>
        My expertise lies in <strong>JavaScript, React.js, CSS, HTML, CMS, and PIM</strong>, and I thrive at the intersection of technology and strategy. From managing product lifecycles to executing engaging promotions, I bring ideas to life with efficiency and creativity.
      </p>

      <p>📌 Take a look around, explore my projects, and see how I turn code into captivating digital experiences.</p>

      <a href="/projects" className="cta-button">
        View My Projects
      </a>
    </div>
  );
};

export default Home;
