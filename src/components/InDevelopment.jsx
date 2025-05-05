import React from 'react';
import './InDevelopment.css';

const InDevelopment = () => {
  return (
    <div className="indevelopment-container">
      <h2 id="in-development">🎮 In Development</h2>

      <h3>Awoken</h3>
      <h5>An original turn-based RPG built in Godot, inspired by classics like Final Fantasy X and Chrono Trigger.</h5>

      <img
        src="/assets/images/awoken-character-portrait-title-screen.png"
        alt="Awoken Title Screen"
        className="small-image"
      />

      <p>
        <strong>Awoken</strong> is my passion project—a narrative-driven RPG where players uncover inner strength through
        turn-based combat, branching dialogue, and meaningful character progression. Built with the Godot Engine, it
        features a custom battle system, hand-drawn sprite animations, and a limit break mechanic that rewards strategy and timing.
      </p>

      <p>
        I'm leading development, design, and music production—wearing multiple hats to bring this vision to life. It's a
        playground for creativity, code, and storytelling—and a space where I'm constantly learning new techniques in game logic, UI/UX, and player feedback systems.
      </p>

      <div className="indevelopment-video">
        <iframe
          src="https://www.youtube.com/watch?v=5OdtnaY8Fpg"
          title="Awoken Game Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        🔧 <em>Tech stack: Godot Engine (GDScript), Aseprite, Dialogic, custom UI system</em>
      </p>
    </div>
  );
};

export default InDevelopment;
