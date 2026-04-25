# Virtual University Events Guide Website

A complete front-end only university events website built from the provided PRD and task checklist.

## Included pages

- `index.html` - Home page with hero, featured event slider, categories, and latest events
- `events.html` - All events with category, date, and location filters
- `event.html` - Event details, static map image, gallery, share/calendar UI, and related events
- `about.html` - Platform description, vision, mission, team, and publishing policies
- `contact.html` - Contact form with JavaScript validation and Bootstrap alerts

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5 via CDN
- Google Fonts: Cairo and Tajawal

## Features

- Responsive Bootstrap layout
- Customized modern university event UI
- Dynamic featured events slider
- Dynamic event filtering by category, month, and location
- Contact form validation
- Arabic and English content switching
- RTL layout for Arabic and LTR layout for English
- Bootstrap RTL stylesheet switching
- Booking modal UI demo
- Scroll-to-top button
- Dark/light mode toggle
- Filter preferences saved with `localStorage`
- Safer storage fallback if browser preferences are restricted
- Improved dark-theme contrast and mobile layout polish

## Recent audit fixes

- Fixed filter state handling so selected filters are not reset during re-rendering.
- Improved dark/light theme details for modals, buttons, forms, placeholders, and navbar controls.
- Improved responsive behavior for slider controls, card actions, hero buttons, and category pills.
- Added accessible focus states and reduced-motion CSS support.
- Added a Bootstrap modal fallback guard to avoid runtime errors if the CDN script is unavailable.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

Example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment note

The project is ready for GitHub Pages deployment. External deployment requires a GitHub repository and permission to enable Pages.
