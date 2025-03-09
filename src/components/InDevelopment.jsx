import React from 'react';
import './InDevelopment.css';

const InDevelopment = () => {
  return (
    <div className="indevelopment-container">
      <h2 id="in-development">In Development</h2>

      <h3>Awoken</h3>
      <h5>My video game in development made with GODOT!</h5>

      <img
        src="/assets/images/awoken-character-portrait-title-screen.png"
        alt="Awoken Title Screen"
        className="small-image"
      />

      <div className="indevelopment-video">
        <iframe
          src="https://www.youtube.com/embed/lInGzFuYrj0?si=14yj5Lcv6w8kThuI"
          title="Awoken Game Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InDevelopment;
