import React from 'react';
import './DailyQuestFitness.css';

const screenshots = [
  {
    src: '/assets/images/DailyFitnessQuest/daily-quests.png',
    alt: "Home screen showing today's Daily Quest and an unlocked Boss Gate",
    caption: 'Turn Workouts Into Daily Quests — Every session becomes a quest with XP, streaks, and boss gates.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/rest-days.png',
    alt: 'Rest at Camp recovery modal that preserves the streak',
    caption: 'Rest Days Keep Your Streak — Guilt-free recovery options that preserve your momentum.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/defeat-boss-gates.png',
    alt: 'Boss Gate defeat screen for the Iron Warden milestone boss',
    caption: 'Defeat Boss Gates — Milestone boss challenges that reward bonus XP and stats.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/build-your-avatar.png',
    alt: 'Avatar Forge screen customizing class, gear, aura, and rank frame',
    caption: 'Build Your Hero — Customize class, gear, and aura, framed by a rank badge that grows as you level.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/train-with-pr-forge.png',
    alt: 'PR Forge screen showing a percentage-based strength program',
    caption: 'Train with PR Forge — Percentage-based strength programs generated from your current lifts.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/complete-strength-quests.png',
    alt: 'Active Strength Quest showing guided sets and an AMRAP set',
    caption: 'Complete Strength Quests — Fully guided, programmed strength workouts, set by set.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/estimate-your-maxes.png',
    alt: 'Estimated Max Calculator with one-rep-max formulas',
    caption: 'Estimate Your Maxes — Built-in one-rep-max formulas for accurate training maxes.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/track-strength-records.png',
    alt: 'PR Forge Records screen showing PRs across every lift',
    caption: 'Track Strength Records — PR history and estimated maxes across every major movement.',
  },
];

const DailyQuestFitness = () => {
  return (
    <div className="dfq-container">
      <h2 id="daily-fitness-quest">Daily Quest Fitness</h2>
      <h5>A mobile fitness RPG that turns workouts into quests and strength training into an adventure.</h5>

      <img
        src="/assets/images/DailyFitnessQuest/daily-fitness-quest-feature-graphic.png"
        alt="Daily Quest Fitness logo and wordmark"
        className="small-image"
      />

      <video
        src="/assets/images/DailyFitnessQuest/daily-fitness-quest-promo.mp4"
        controls
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Daily Quest Fitness promo video"
        style={{ width: '100%', maxWidth: '340px', borderRadius: '14px', display: 'block', margin: '1.25rem auto 0' }}
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
          Daily Quest Fitness is a mobile fitness RPG built with React Native and Expo. The app turns workouts into
          quest-driven progression, combining Daily Quests, Strength Quest Programs, PR Forge, an Estimated Max
          Calculator, Avatar Forge, character progression, Training Paths, Workout History, Theme customization,
          and full RPG progression mechanics into a mobile-first fitness experience.
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
          <li>Daily Quests — guided workouts that turn every session into trackable progress</li>
          <li>Strength Quest Programs — structured, quest-based strength training cycles</li>
          <li>PR Forge — generates percentage-based programs from your current estimated maxes</li>
          <li>Estimated Max Calculator — accurate one-rep-max formulas built in</li>
          <li>Avatar Forge — character class, appearance, and progression customization</li>
          <li>RPG character progression — earn XP, level up, and improve attributes through real workouts</li>
          <li>Training Paths — choose strength, endurance, recovery, mobility, and more</li>
          <li>Workout History — review completed quests and track long-term consistency</li>
          <li>Theme customization — unlockable fantasy-inspired background themes</li>
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
          <li>Full feature set includes Daily Quests, PR Forge, Strength Programs, Avatar Forge, Training Paths, and more</li>
        </ul>
      </div>
    </div>
  );
};

export default DailyQuestFitness;
