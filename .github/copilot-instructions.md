# Workspace instructions for ABapp

This repository is a Create React App frontend project built with React 18, React Router v6, and standard CRA tooling.

## Project overview

- Frontend-only React app. No backend code is included in this repository.
- Uses `react-scripts` from Create React App.
- Key source files are in `src/`.
- Static app shell and manifest are in `public/`.
- Component and page files are generally individual modules such as `App.js`, `Home.js`, `Products.js`, `Contact.js`, etc.
- Assets are stored under `src/assets/`.

## Primary commands

- `npm start` — Run the development server.
- `npm test` — Launch the CRA test runner in watch mode.
- `npm run build` — Create a production build.
- `npm run eject` — Not recommended unless you want to permanently leave CRA managed config.

## What to do for common tasks

- For UI work, update components in `src/` and CSS in `src/App.css`, `src/index.css`, or component-specific styles if added.
- For routing changes, update `react-router-dom` usage in `src/index.js` and route components such as `App.js`.
- For new pages or views, add new files under `src/` and import them into the main app router.
- For image and asset updates, place files in `src/assets/` and import them in components.

## Technology notes

- Styling is managed with plain CSS files in `src/`.
- Routing uses `react-router-dom` version 6, so use `Routes`, `Route`, and `element` props.
- Motion effects may use `framer-motion`.
- Tests are configured by CRA and use `@testing-library/react` and `@testing-library/jest-dom`.

## Guidance for the agent

- Prefer small, incremental changes.
- Preserve the existing Create React App conventions and avoid ejecting.
- When recommending build/test actions, use the existing npm scripts from `package.json`.
- Do not assume TypeScript or custom Babel/webpack configuration exists.

## Example prompts

- "Refactor `src/App.js` to improve readability and split the page sections into smaller components."
- "Add a new route `/gallery` to the app using `react-router-dom` v6."
- "Update the home page styling in `src/App.css` so the hero section is responsive."
- "Fix the failing Jest test in `src/App.test.js`."
