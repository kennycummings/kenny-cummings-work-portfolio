import React from 'react';
import './DailyFitnessQuest.css';

const screenshots = [
  {
    src: '/assets/images/DailyFitnessQuest/daily-fitness-quest-home.png',
    alt: 'Daily Fitness Quest home screen with active boss gate',
    caption: 'Home — today\'s quest and boss gate status',
  },
  {
    src: '/assets/images/DailyFitnessQuest/daily-fitness-quest-quests.png',
    alt: 'Daily Fitness Quest training path selection screen',
    caption: 'Training path selection',
  },
  {
    src: '/assets/images/DailyFitnessQuest/daily-fitness-quest-boss-gate.png',
    alt: 'Daily Fitness Quest boss gate detail screen',
    caption: 'Boss gate detail',
  },
  {
    src: '/assets/images/DailyFitnessQuest/daily-fitness-quest-backgrounds.png',
    alt: 'Daily Fitness Quest avatar and customization screen',
    caption: 'Avatar Forge / customization',
  },
  {
    src: '/assets/images/DailyFitnessQuest/daily-fitness-quest-settings.png',
    alt: 'Daily Fitness Quest settings and safety screen',
    caption: 'Settings and safety',
  },
];

const DailyFitnessQuest = () => {
  return (
    <div className="dfq-container">
      <h2 id="daily-fitness-quest">Daily Fitness Quest</h2>
      <h5>A mobile fitness RPG that turns workouts into quests.</h5>

      <img
        src="/assets/images/DailyFitnessQuest/daily-fitness-quest-feature-graphic.png"
        alt="Daily Quest Fitness — Fitness Becomes the Quest"
        className="small-image"
      />

      <div className="dfq-links">
        <a
          href="https://dailyquestfitness.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Visit Live Site
        </a>
      </div>

      <div className="dfq-section">
        <h4>Product Overview</h4>
        <p>
          Daily Fitness Quest is a mobile fitness RPG built with React Native and Expo. The app turns workouts into
          quest-driven progression, combining habit-building, RPG milestones, boss gates, avatar customization,
          unlockable visual themes, and persistent profile settings into a mobile-first fitness experience.
        </p>
        <p>
          The goal was to make daily exercise feel less like a checklist and more like an adventure. I designed the
          app around short-term motivation loops, visual progression, and fantasy-inspired rewards that encourage
          users to return and keep training.
        </p>
      </div>

      <div className="dfq-section">
        <h4>Feature Highlights</h4>
        <ul>
          <li>Quest-based fitness flow that turns daily workouts into trackable progress</li>
          <li>Boss gates and progression milestones that make consistency feel rewarding</li>
          <li>Avatar Forge — character and class customization tied to training</li>
          <li>Persistent profile, settings, and theme storage across sessions</li>
          <li>Unlockable background/theme system supporting long-term engagement</li>
        </ul>
      </div>

      <div className="dfq-section">
        <h4>Technical Build</h4>
        <p>
          I built the MVP with React Native and Expo, focusing on reusable mobile UI patterns, persistent
          profile/settings storage, theme customization, and a readable fantasy interface that works across phone
          screens.
        </p>
        <p>
          🔧 <em>Tech stack: React Native, Expo, TypeScript, Mobile UI, Gamification, Product Design</em>
        </p>
      </div>

      <div className="dfq-section">
        <h4>My Role</h4>
        <p>Creator / React Native Developer — solo design and development of the full mobile experience.</p>
      </div>

      <h3>Screenshot Gallery</h3>
      <div className="dfq-gallery">
        {screenshots.map((shot) => (
          <div className="dfq-gallery-item" key={shot.src}>
            <img src={shot.src} alt={shot.alt} />
            <p className="dfq-gallery-caption">{shot.caption}</p>
          </div>
        ))}
      </div>

      <div className="dfq-section">
        <h4>Outcome / Current Status</h4>
        <ul>
          <li>MVP built and playable end-to-end on mobile</li>
          <li>Live landing page deployed at dailyquestfitness.netlify.app</li>
          <li>Actively testing and polishing for readability, retention, and usability</li>
          <li>Next steps: app store readiness, onboarding polish, retention improvements</li>
        </ul>
      </div>
    </div>
  );
};

export default DailyFitnessQuest;
