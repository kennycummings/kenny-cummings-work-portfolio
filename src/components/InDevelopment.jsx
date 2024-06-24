import React from 'react';
import './InDevelopment.css';

const InDevelopment = () => {
  return (
    <div>

      <br />
      <br />

      <div className="in-development-container">
        <div className="in-development">
          <h2 id="in-development">In Development</h2>
        </div>

        <br />

        <h3>Awoken</h3>
        <h5>My video game in development made with GODOT!</h5>
        <br />

        <img
          src="/assets/images/awoken-character-portrait-title-screen.png"
          alt="Awoken Title Screen"
          className="small-image"
        />

        <br />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lInGzFuYrj0?si=14yj5Lcv6w8kThuI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <br />
      <br />
    </div>
  </div>
  );
};

export default InDevelopment;
