import React from 'react';
import { archwake } from '../data/projectContent.js';
import './ProjectDetails.css';

const Archwake = () => (
  <article className="project-detail archwake-detail">
    <img className="project-mark" src="/assets/images/archwake/mark.svg" alt="Archwake golden guardian helm emblem" width="120" height="120" />
    <h2>Archwake</h2>
    <p className="project-subtitle">Real workouts. RPG progression. Make every day an ascent.</p>
    <div className="project-links">
      <a className="project-link" href={archwake.link} target="_blank" rel="noopener noreferrer">Visit Archwake</a>
      <a className="project-link" href="https://archwake.com/beta/" target="_blank" rel="noopener noreferrer">Beta & Updates</a>
    </div>

    <section className="project-section">
      <h3>Product Overview</h3>
      <p>{archwake.impact}</p>
      <p>I designed the app around visible progress, short-term motivation, and fantasy-inspired rewards. Training Paths, recovery options, and workout history help turn individual sessions into an ongoing adventure.</p>
    </section>

    <section className="project-section">
      <h3>Feature Highlights</h3>
      <ul>
        <li><strong>Daily Ascents:</strong> guided workouts, streaks, recovery, and XP</li>
        <li><strong>Avatar Forge:</strong> class, portrait, accents, aura, and progression unlocks</li>
        <li><strong>Boss Gates:</strong> milestone challenges tied to real training progress</li>
        <li><strong>PR Forge:</strong> structured strength programs, guided sets, and exercise substitutions</li>
        <li><strong>Strength tools:</strong> estimated-max calculations and personal-record tracking</li>
        <li><strong>Local progress:</strong> persistent device storage and user-controlled export/import</li>
      </ul>
    </section>

    <section className="project-section">
      <h3>Technical Build & My Role</h3>
      <p>{archwake.role} I own the product design, reusable mobile UI, progression systems, and persistent profile/settings experience.</p>
      <p><strong>Tech:</strong> React Native, Expo, TypeScript, local storage, and mobile product design.</p>
    </section>

    <section className="project-media" aria-labelledby="archwake-art">
      <h3 id="archwake-art">Current Character Art Previews</h3>
      <p className="project-media-note">{archwake.mediaNote}</p>
      <div className="project-art-gallery">
        {archwake.gallery.map((shot) => (
          <figure key={shot.src}>
            <a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${shot.caption}`}>
              <img src={shot.src} alt={shot.alt} width="1024" height="1024" loading="lazy" />
            </a>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>

    <section className="project-section">
      <h3>Current Status</h3>
      <p>Android testing is the current focus, with iOS / TestFlight planned. Archwake is not yet publicly released. The live site has current beta, support, and product information.</p>
    </section>
  </article>
);

export default Archwake;
