import React, { useEffect, useMemo, useState } from 'react';
import './InDevelopment.css';

const AwokenSlideshow = () => {
  const slides = useMemo(() => [
    { src: "/assets/images/battle-scene-enchanted-forest-screenshot-Awoken.jpg", alt: "Awoken battle scene in the enchanted forest", caption: "Turn-based battle scene (Enchanted Forest)" },
    { src: "/assets/images/caden-asher-fight-cutscene-screenshot-awoken.jpg", alt: "Awoken cutscene with dialogue between characters", caption: "Dialogic cutscene + dialogue UI" },
    { src: "/assets/images/asher-dance-screenshot-awoken.jpg", alt: "Awoken battle VFX showcasing a skill animation", caption: "Skill animation / VFX moment" },
    { src: "/assets/images/caden-defeated-screenshot-awoken.jpg", alt: "Awoken scene showing a character defeated", caption: "Combat state + feedback (defeat)" },
    { src: "/assets/images/party-menu-screenshot-awoken.jpg", alt: "Awoken party menu UI", caption: "Party menu UI" },
    { src: "/assets/images/world-map-night-ship-screenshot-awoken.jpg", alt: "Awoken overworld scene at night near a ship", caption: "Overworld exploration (night + ship)" },
    { src: "/assets/images/world-map-screenshot-awoken.jpg", alt: "Awoken overworld scene daytime", caption: "Overworld exploration (daytime)" },
  ], []);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);

  const current = slides[index];

  return (
    <div
      className="awoken-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="awoken-slideshow-frame">
        <button className="slide-nav left" onClick={goPrev} aria-label="Previous screenshot">‹</button>
        <img className="slide-image" src={current.src} alt={current.alt} />
        <button className="slide-nav right" onClick={goNext} aria-label="Next screenshot">›</button>
      </div>

      <div className="slide-caption">{current.caption}</div>

      <div className="slide-dots" role="tablist" aria-label="Screenshot navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

const InDevelopment = () => {
  return (
    <div className="indevelopment-container">
      <h2 id="in-development">🎮 In Development</h2>

      <h3>Awoken</h3>
      <h5>
        An original turn-based RPG built in Godot — inspired by Final Fantasy X and Chrono Trigger.
      </h5>

      <AwokenSlideshow />

      {/* Quick links */}
      <div className="indevelopment-links">
        <a
          href="https://awokenrpg.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="link-button"
        >
          View Awoken Companion Site
        </a>
        <a
          href="https://www.youtube.com/watch?v=jGpbcFCeAoo&t=4s"
          target="_blank"
          rel="noreferrer"
          className="link-button secondary"
        >
          Watch Trailer on YouTube
        </a>
      </div>

      <img
        src="/assets/images/awoken-title-screen.jpg"
        alt="Awoken title screen"
        className="small-image"
      />

      <p>
        <strong>Awoken</strong> is my narrative-driven RPG passion project where players uncover inner strength through
        tactical turn-based combat, branching dialogue, and meaningful character progression. I’m building it in the
        Godot Engine with a focus on responsive UI, readable combat feedback, and systems that reward planning.
      </p>

      {/* What makes it interesting */}
      <div className="indevelopment-section">
        <h4>What I’m Building</h4>
        <ul>
          <li><strong>Custom turn-based battle system</strong> (ATB-style pacing, skills, targeting, UI flow)</li>
          <li><strong>Branching dialogue + cutscenes</strong> using Dialogic</li>
          <li><strong>Limit Break system</strong> that builds from player decisions and timing</li>
          <li><strong>Hand-crafted sprites + VFX</strong> (Aseprite pipelines and animations)</li>
          <li><strong>Original soundtrack</strong> (composition + implementation)</li>
        </ul>
      </div>

      {/* Role / ownership */}
      <div className="indevelopment-section">
        <h4>My Role</h4>
        <p>
          Solo developer: gameplay programming (GDScript), UI/UX, encounter design, narrative integration, and music
          production. The source code is private, but the systems and architecture are available to discuss in interviews.
        </p>
      </div>

      {/* Video */}
      <div className="indevelopment-video">
        <iframe
          src="https://www.youtube.com/embed/jGpbcFCeAoo?start=4"
          title="Awoken Game Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Tech */}
      <p>
        🔧 <em>Tech stack: Godot (GDScript), Dialogic, Aseprite, custom UI system, audio pipeline + implementation</em>
      </p>

      {/* Roadmap */}
      <div className="indevelopment-section">
        <h4>Currently Working On</h4>
        <ul>
          <li>Additional combat polish (damage feedback, targeting UX, skill tuning)</li>
          <li>Expanding playable content (quests, bosses, dungeons)</li>
          <li>More cutscenes + NPC interactions</li>
        </ul>
      </div>
    </div>
  );
};

export default InDevelopment;
