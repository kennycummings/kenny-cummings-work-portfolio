import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const professionalProjects = [
  {
    key: 'vanguard',
    title: 'Vanguard — Enterprise AEM Content Operations',
    role: 'AEM Web Content Author supporting high-traffic financial-services digital experiences.',
    impact:
      'Authoring and maintaining AEM content, assets, metadata, and component-based page updates across enterprise web experiences, with a focus on accessibility, responsive execution, governance, and release quality.',
    bullets: [
      'Authored and maintained AEM page/component updates, content-fragment-driven changes, and reusable content patterns',
      'Supported headless and headful AEM experiences, including secure/public article patterns and component-based publishing workflows',
      'Managed digital assets including images, PDFs, and video through Adobe DAM',
      'Partnered with design, UX, engineering, QA, and stakeholders through Workfront/JIRA',
      'Applied HTML, CSS, JavaScript, SEO metadata, semantic HTML, accessibility checks, and cross-browser QA to improve production quality',
    ],
    tags: ['AEM', 'Adobe DAM', 'Workfront', 'JIRA', 'HTML', 'CSS', 'JavaScript', 'SEO', 'Accessibility', 'Content Governance'],
    image: 'assets/images/vanguard-how-should-i-save-for-college.png',
    imageAlt: 'Vanguard Own Your Future — How should I save for college?',
    link: 'https://ownyourfuture.vanguard.com/content/en/learn/financial-planning/how-should-i-save-for-college.html',
    linkLabel: 'View Published AEM Article',
  },
  {
    key: 'awma',
    title: 'Asian World of Martial Arts — E-Commerce Website Migration & SEO Growth',
    role: 'Web Content Specialist supporting e-commerce content, CMS updates, SEO, homepage design, and Shopify/Magento migration.',
    impact:
      'Helped improve e-commerce visibility and user experience through site migration, homepage redesign, SEO improvements, content updates, analytics, and front-end/CMS support.',
    bullets: [
      'Supported a critical migration from Shopify to Magento',
      'Designed and maintained homepage/content updates to improve visual presentation and navigation',
      'Used HTML, CSS, JavaScript, and Shopify Liquid to maintain and improve website functionality',
      'Applied SEO best practices, content enhancements, Google Analytics, and Google Ads insights',
      'Helped achieve a 100% increase in clicks, impressions, and click-through rate over 6 months',
    ],
    tags: ['Magento', 'Shopify', 'Shopify Liquid', 'HTML', 'CSS', 'JavaScript', 'SEO', 'Google Analytics', 'Google Ads', 'E-Commerce'],
    image: 'assets/images/AWMA-homepage-new.png',
    imageAlt: 'AWMA Homepage Navigation Edit',
    link: 'https://awma.com',
    linkLabel: 'View AWMA Homepage',
  },
  {
    key: 'roomservice360',
    title: 'room service 360° — Magento Product Content & E-Commerce UX',
    role: 'E-Commerce Content Specialist managing luxury furniture product content and Magento product detail pages.',
    impact:
      'Created and maintained large-scale product content while improving e-commerce browsing, filtering, SEO, and brand presentation.',
    bullets: [
      'Added and maintained 500+ product detail pages in Magento',
      'Managed luxury furniture brand content, product imagery, descriptions, and specifications',
      'Configured product filters and sorting mechanisms to improve shopping UX',
      'Used Adobe Photoshop for image editing and product presentation',
      'Authored SEO-optimized blog and product content in WordPress and Magento',
    ],
    tags: ['Magento', 'WordPress', 'Product Detail Pages', 'E-Commerce', 'SEO', 'Photoshop', 'Product Content', 'UX'],
    image: 'assets/images/roomservice360-fall-blog.png',
    imageAlt: 'room service 360 Fall Blog',
  },
];

const technicalProjects = [
  {
    key: 'awoken',
    title: 'Awoken — Game UI & Systems Development',
    role: 'Lead developer of a 2D JRPG built in Godot.',
    impact:
      'A long-term creative technical project demonstrating product ownership, custom UI systems, gameplay logic, interaction design, asset integration, and iterative development.',
    bullets: [
      'Built custom battle systems, party/menu interactions, inventory systems, and player-facing UI flows',
      'Programmed gameplay and interface logic using GDScript',
      'Designed UI patterns for RPG menus, combat actions, skills, equipment, status, and party management',
      'Integrated custom assets, music, dialogue, and game scenes into a cohesive playable experience',
      'Demonstrates sustained product ownership across design, development, content, polish, and QA',
    ],
    tags: ['Godot', 'GDScript', 'Game UI', 'UI Systems', 'Product Design', 'Interaction Design', 'RPG Systems'],
    image: 'assets/images/awoken-title-screen.jpg',
    imageAlt: 'Awoken RPG Title Screen',
    link: 'https://awokenrpg.onrender.com/',
    linkLabel: 'View Awoken Companion Site',
  },
  {
    key: 'daily-fitness-quest',
    title: 'Daily Quest Fitness — Mobile Fitness RPG (Guardian Kenny Studios)',
    role: 'Solo developer/designer of a React Native + Expo mobile app, currently in MVP testing and polish.',
    impact:
      'Daily Quest Fitness turns exercise into a quest-driven progression system with Daily Quests, Strength Quest Programs, PR Forge, an Estimated Max Calculator, Avatar Forge, character progression, Training Paths, Workout History, Theme customization, and full RPG progression mechanics.',
    bullets: [
      'Built a full-featured mobile fitness RPG with Daily Quests, Strength Programs, and character progression',
      'Implemented PR Forge — generates percentage-based strength programs from current estimated maxes',
      'Built an Estimated Max Calculator with built-in one-rep-max formulas',
      'Created Avatar Forge for class, appearance, and progression customization tied to real training',
      'Designed Training Paths (strength, endurance, recovery, mobility) and unlockable fantasy background themes',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile UI', 'Gamification', 'Async Storage / Persistent Settings', 'Product Design'],
    image: 'assets/images/DailyFitnessQuest/daily-fitness-quest-feature-graphic.png',
    imageAlt: 'Daily Quest Fitness — Fitness Becomes the Quest',
    link: 'https://dailyquestfitness.netlify.app/',
    linkLabel: 'Visit Live Site',
    caseStudyPath: '/daily-fitness-quest',
    caseStudyLabel: 'View Case Study',
    gallery: [
      {
        src: 'assets/images/DailyFitnessQuest/complete-strength-quests.png',
        alt: 'Complete Strength Quests screen showing guided workout with XP tracking',
      },
      {
        src: 'assets/images/DailyFitnessQuest/train-with-pr-forge.png',
        alt: 'PR Forge screen showing percentage-based strength program generation',
      },
      {
        src: 'assets/images/DailyFitnessQuest/track-strength-records.png',
        alt: 'Strength Records screen showing estimated maxes and PR history',
      },
      {
        src: 'assets/images/DailyFitnessQuest/estimate-your-maxes.png',
        alt: 'Estimated Max Calculator screen with one-rep-max formulas',
      },
      {
        src: 'assets/images/DailyFitnessQuest/level-your-hero.png',
        alt: 'Hero level screen showing XP gains and RPG attributes',
      },
      {
        src: 'assets/images/DailyFitnessQuest/build-your-avatar.png',
        alt: 'Avatar Forge screen showing hunter class and appearance customization',
      },
      {
        src: 'assets/images/DailyFitnessQuest/choose-your-training-path.png',
        alt: 'Training Path selection screen with multiple fitness paths',
      },
      {
        src: 'assets/images/DailyFitnessQuest/workout-history.png',
        alt: 'Workout History screen showing completed quests and consistency tracking',
      },
      {
        src: 'assets/images/DailyFitnessQuest/background-themes.png',
        alt: 'Background Themes screen showing unlockable fantasy-inspired visual themes',
      },
    ],
  },
];

const webDevProjects = [
  {
    key: 'nutrition-radar',
    title: 'Your Nutrition Radar',
    image: 'assets/images/Your-Nutrition-Radar-Home.png',
    imageAlt: 'Your Nutrition Radar home screen',
    description:
      'A browser-based nutrition and recipe exploration app built with vanilla JavaScript and a public food/recipe API.',
    bullets: [
      'Integrated a third-party recipe and nutrition API using JavaScript',
      'Parsed and rendered dynamic API data to the DOM',
      'Implemented conditional rendering and user-driven search flows',
      'Collaborated on a team project using Git and GitHub',
    ],
    tech: 'JavaScript, HTML, CSS, third-party recipe/nutrition API',
    note: 'Repo: Team-owned (available upon request)',
    link: 'https://mykhailozakh.github.io/Your-Nutrition-Radar/#',
    linkLabel: 'View Live Demo',
  },
  {
    key: 'js-quiz-game',
    title: 'JavaScript Quiz Game',
    image: 'assets/images/javascript-quiz-game.png',
    imageAlt: 'JavaScript Quiz Game',
    description:
      'A solo project demonstrating core JavaScript fundamentals such as DOM manipulation, event handling, and client-side state management.',
    bullets: [
      'Built dynamic question and score logic in vanilla JavaScript',
      'Handled user input, validation, and game state transitions',
      'Designed responsive UI using HTML and CSS',
    ],
    tech: 'JavaScript, HTML, CSS',
    link: 'https://github.com/kennycummings/javascript-quiz-game',
    linkLabel: 'View GitHub Repo',
  },
];

const CaseStudyCard = ({ project, reverse }) => (
  <div className="container case-study">
    <div className="image-container">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.imageAlt} />
        </a>
      ) : (
        <img src={project.image} alt={project.imageAlt} />
      )}
    </div>
    <div className="text-container">
      <h4>{project.title}</h4>
      <p className="case-study-role">{project.role}</p>
      <p>{project.impact}</p>
      <ul>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkLabel}
        </a>
      )}
      {project.caseStudyPath && (
        <Link to={project.caseStudyPath}>{project.caseStudyLabel || 'View Case Study'}</Link>
      )}
      {project.gallery?.length > 0 && (
        <div className="case-study-gallery">
          {project.gallery.map((shot) => (
            <div className="case-study-gallery-item" key={shot.src}>
              <img className="case-study-gallery-image" src={shot.src} alt={shot.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const WebDevCard = ({ project }) => (
  <div className="text-container">
    <h3>{project.title}</h3>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img src={project.image} alt={project.imageAlt} />
    </a>
    <p>{project.description}</p>
    <ul>
      {project.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
    <p>
      <em>Tech: {project.tech}</em>
    </p>
    {project.note && (
      <p>
        <em>{project.note}</em>
      </p>
    )}
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      {project.linkLabel}
    </a>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-container">
      <p className="projects-intro">
        AEM Web Content Author and front-end content developer with production experience across AEM, Magento,
        Shopify, WordPress, SEO, e-commerce, responsive web execution, and creative UI systems.
      </p>

      <h2 id="featured-professional-work">Featured Professional Web / CMS / E-Commerce Work</h2>
      {professionalProjects.map((project) => (
        <CaseStudyCard project={project} key={project.key} />
      ))}

      <h2 id="featured-technical-project">Featured Technical / Product Project</h2>
      {technicalProjects.map((project) => (
        <CaseStudyCard project={project} key={project.key} />
      ))}

      <h2 id="additional-web-development-projects">Additional Web Development Projects</h2>
      {webDevProjects.map((project) => (
        <WebDevCard project={project} key={project.key} />
      ))}
    </div>
  );
};

export default Projects;
