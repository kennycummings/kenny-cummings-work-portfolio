import React from 'react';
import './DailyQuestFitness.css';

const screenshots = [
  {
    src: '/assets/images/DailyFitnessQuest/complete-strength-quests.png',
    alt: 'Complete Strength Quests screen showing guided workout with XP tracking',
    caption: 'Complete Strength Quests — Track every set, earn XP, and complete fully guided strength workouts.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/train-with-pr-forge.png',
    alt: 'PR Forge screen showing percentage-based strength program generation',
    caption: 'Train with PR Forge — Generate intelligent percentage-based strength programs from your current lifts.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/track-strength-records.png',
    alt: 'Strength Records screen showing estimated maxes and PR history',
    caption: 'Track Strength Records — Maintain estimated maxes and PR history across every major movement pattern.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/estimate-your-maxes.png',
    alt: 'Estimated Max Calculator screen with one-rep-max formulas',
    caption: 'Estimate Your Maxes — Quickly calculate accurate training maxes using built-in one-rep-max formulas.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/level-your-hero.png',
    alt: 'Hero level screen showing XP gains and RPG attributes',
    caption: 'Level Your Hero — Gain experience, level up, and improve your RPG-inspired attributes through real workouts.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/build-your-avatar.png',
    alt: 'Avatar Forge screen showing hunter class and appearance customization',
    caption: 'Build Your Avatar — Customize your hunter\'s class, appearance, and progression.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/choose-your-training-path.png',
    alt: 'Training Path selection screen with strength, endurance, recovery, and mobility options',
    caption: 'Choose Your Training Path — Select from multiple fitness paths including strength, endurance, recovery, and mobility.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/workout-history.png',
    alt: 'Workout History screen showing completed quests and consistency tracking',
    caption: 'Workout History — Review completed quests and track your long-term consistency.',
  },
  {
    src: '/assets/images/DailyFitnessQuest/background-themes.png',
    alt: 'Background Themes screen showing unlockable fantasy-inspired visual themes',
    caption: 'Background Themes — Personalize the experience with unlockable fantasy-inspired themes.',
  },
];

const DailyQuestFitness = () => {
  return (
    <div className="dfq-container">
      <h2 id="daily-fitness-quest">Daily Quest Fitness</h2>
      <h5>A mobile fitness RPG that turns workouts into quests and strength training into an adventure.</h5>

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
