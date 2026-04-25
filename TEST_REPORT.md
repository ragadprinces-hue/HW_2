# Test Report

Generated static checks for the completed front-end project.

## Static checks performed

- Required root files exist: `index.html`, `events.html`, `event.html`, `about.html`, `contact.html`.
- Required asset files exist: `assets/css/styles.css`, `assets/js/main.js`.
- All HTML pages include Bootstrap CSS CDN, Bootstrap JS bundle, Google Fonts, shared CSS, and shared JavaScript.
- Internal HTML links point to existing pages.
- JavaScript syntax check passed with `node --check assets/js/main.js`.
- Required JavaScript feature paths are present: slider rendering, events filtering, contact validation, Bootstrap RTL switching, dark mode, and localStorage preferences.

## Manual checks still recommended

- Open in Chrome, Firefox, and Edge.
- Toggle Arabic/English on each page and confirm the visual layout direction.
- Resize browser for mobile, tablet, and desktop breakpoints.
- Deploy to GitHub Pages when repository access is available.
