import React from 'react';
import './InDevelopment.css';

const InDevelopment = () => {
  return (
    <div>
      <p>
        <h2>In Development</h2>
        <br />

        <h3>Awoken</h3>
        <h4>My video game in development made with GODOT!</h4>
        <br />

        <img
          src="/assets/images/awoken-character-portrait-title-screen.png"
          alt="Awoken Title Screen"
          className="small-image"
        />

        <br />
        <br />

        <iframe width="560" height="315" src="https://www.youtube.com/embed/lInGzFuYrj0?si=14yj5Lcv6w8kThuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <br />
        <br />
      </p>
    </div>
  );
};

export default InDevelopment;
