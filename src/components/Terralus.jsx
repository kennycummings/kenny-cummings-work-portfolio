import React, { useState } from 'react';
import { terralus } from '../data/projectContent.js';
import './ProjectDetails.css';

const Terralus = () => {
  const [index, setIndex] = useState(0);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const current = terralus.gallery[index];

  return (
    <article className="project-detail terralus-detail">
      <h2>Terralus</h2>
      <p className="project-subtitle">A story-driven fantasy JRPG with active-time combat and cinematic Resonance skills.</p>
      <img className="project-hero" src={terralus.image} alt={terralus.imageAlt} />
      <div className="project-links">
        <a className="project-link" href={terralus.link} target="_blank" rel="noopener noreferrer">Visit Terralus</a>
        <a className="project-link" href={terralus.trailerUrl} target="_blank" rel="noopener noreferrer">Watch Official Trailer</a>
      </div>

      <section className="project-section">
        <h3>Product Overview</h3>
        <p>{terralus.impact}</p>
        <p>The game grows out of my fantasy novel <em>Awoken</em>. I’m building Terralus in Godot with a focus on readable combat feedback, responsive menus, exploration, and meaningful party choices.</p>
      </section>

      <section className="project-section">
        <h3>Systems & My Role</h3>
        <p>{terralus.role} I handle gameplay programming, UI/UX, encounter design, narrative integration, and original music production.</p>
        <ul>{terralus.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        <p><strong>Tech:</strong> Godot, GDScript, Dialogic, custom UI systems, and game audio integration.</p>
      </section>

      <section className="project-media" aria-labelledby="terralus-screenshots">
        <h3 id="terralus-screenshots">Gameplay & Interface Gallery</h3>
        <figure className="project-slide">
          <a href={current.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot: ${current.caption}`}>
            <img src={current.src} alt={current.alt} width="1920" height="1080" />
          </a>
          <figcaption aria-live="polite">{current.caption}</figcaption>
        </figure>
        <div className="project-slide-controls" aria-label="Gameplay screenshot navigation">
          <button type="button" onClick={() => setIndex((i) => (i - 1 + terralus.gallery.length) % terralus.gallery.length)} aria-label="Previous screenshot">‹ Previous</button>
          <span>{index + 1} / {terralus.gallery.length}</span>
          <button type="button" onClick={() => setIndex((i) => (i + 1) % terralus.gallery.length)} aria-label="Next screenshot">Next ›</button>
        </div>
        <div className="project-thumbnails" aria-label="Choose a gameplay screenshot">
          {terralus.gallery.map((shot, i) => (
            <button key={shot.src} type="button" onClick={() => setIndex(i)} aria-label={shot.caption} aria-pressed={i === index}>
              <img src={shot.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <section className="project-media" aria-labelledby="terralus-trailer">
        <h3 id="terralus-trailer">Official Gameplay Trailer</h3>
        <div className="project-video">
          {isTrailerPlaying ? (
            <iframe src={`${terralus.trailerEmbed}&autoplay=1`} title="Terralus official gameplay trailer — Guardian Kenny Studios" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          ) : (
            <button className="project-video-poster" type="button" onClick={() => setIsTrailerPlaying(true)} aria-label="Play the Terralus official gameplay trailer">
              <img src={terralus.image} alt="" />
              <span><span aria-hidden="true">▶</span> Watch the official trailer · 1:00</span>
            </button>
          )}
        </div>
        <p><a href={terralus.trailerUrl} target="_blank" rel="noopener noreferrer">Watch the trailer on YouTube</a></p>
      </section>

      <section className="project-section">
        <h3>Current Status</h3>
        <p>Terralus is in development. The official site includes current gameplay media, story and character details, and playtest signup information.</p>
      </section>
    </article>
  );
};

export default Terralus;
