# Project content and media refresh — October 9, 2026

The portfolio now uses **Archwake** for the React Native / Expo fitness app and **Terralus** for the Godot fantasy JRPG. The novel that inspired Terralus is still titled *Awoken*.

## Verified destinations

- Archwake: https://archwake.com/ (HTTP 200 verified October 9)
- Terralus: https://playterralus.com/ (HTTP 200 verified October 9)
- Terralus official trailer: https://www.youtube.com/watch?v=EyzAn_0Ka_Q (the current product site and its October 1 publication record)

## Media provenance

Assets are copied from existing project repositories. No artwork was generated or altered for this update.

- `public/assets/images/terralus/feature-20260930.webp`: the current studio site's lossless WebP of the approved September 30 Terralus feature graphic, from `guardian-kenny-studios/public/assets/terralus-feature-20260930.webp`.
- Terralus gallery PNGs: copied from the current product site's `awokenrpg/public/media/`. These include September 30 gameplay captures and the current product site's Resonance and Alblanca images. Descriptions match `awokenrpg/src/Site.js` and the store upload manifest.
- `public/assets/images/archwake/mark.svg`: current app brand mark from `DailyQuestFitness/assets/branding/archwake/archwake-mark.svg`.
- Archwake portrait PNGs: October 9 Azure Warrior, Gold Guardian, and Steel Rogue studies from `DailyQuestFitnessSite/sites/archwake/public/assets/portraits/`. They are labeled **character art previews**; they are not screenshots and are not represented as installed app artwork.

The older Awoken-branded screenshots, title images, trailer embed, and Daily Quest Fitness screenshots/promo have been retired from the portfolio build.

## Content sources

Project copy is centralized in `src/data/projectContent.js`. Archwake features and beta wording were checked against the current app's `app.json`, the separate Archwake site's build source and beta page, and `DailyQuestFitnessSite/src/data/features.ts`. Terralus copy was checked against the current product site's `src/Site.js` and studio project content. Neither project is presented as publicly released.

The public routes are `/archwake` and `/terralus`. `/daily-fitness-quest` and `/indevelopment` redirect to the corresponding current routes so existing portfolio links continue working.
