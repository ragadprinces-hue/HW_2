// Virtual University Events Guide front-end interactions.
// Implements slider, filters, validation, RTL/LTR language switching, dark mode,
// booking modal, scroll-to-top, and localStorage preferences.

const EVENTS = [
  {
    "id": "innovation-week",
    "image": "assets/img/event-tech.svg",
    "category": "tech",
    "location": "innovationHall",
    "date": "2026-04-28",
    "time": "10:00 AM - 1:00 PM",
    "featured": true,
    "en": {
      "title": "Tech Innovation Week",
      "description": "Hands-on demos, startup pitches, and workshops led by university innovators.",
      "full": "Tech Innovation Week brings students, faculty, and local partners together for product demos, design sprints, AI showcases, and startup mentoring. The program is designed for beginners and experienced makers alike."
    },
    "ar": {
      "title": "\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0627\u0644\u062a\u0642\u0646\u064a",
      "description": "\u0639\u0631\u0648\u0636 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0646\u0627\u0634\u0626\u0629 \u0648\u0648\u0631\u0634 \u064a\u0642\u0648\u062f\u0647\u0627 \u0645\u0628\u062a\u0643\u0631\u0648 \u0627\u0644\u062c\u0627\u0645\u0639\u0629.",
      "full": "\u064a\u062c\u0645\u0639 \u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0627\u0644\u062a\u0642\u0646\u064a \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0623\u0639\u0636\u0627\u0621 \u0647\u064a\u0626\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0633 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u062d\u0648\u0644 \u0639\u0631\u0648\u0636 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0645\u062e\u062a\u0628\u0631\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u062c\u0644\u0633\u0627\u062a \u0627\u0644\u0625\u0631\u0634\u0627\u062f \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639."
    }
  },
  {
    "id": "culture-festival",
    "image": "assets/img/event-culture.svg",
    "category": "culture",
    "location": "mainTheater",
    "date": "2026-05-02",
    "time": "5:00 PM - 9:00 PM",
    "featured": true,
    "en": {
      "title": "Culture Festival",
      "description": "A student-led celebration of food, stories, exhibitions, and cross-cultural performances.",
      "full": "The Culture Festival highlights the diversity of campus life through student booths, heritage performances, short talks, and collaborative art spaces."
    },
    "ar": {
      "title": "\u0645\u0647\u0631\u062c\u0627\u0646 \u0627\u0644\u062b\u0642\u0627\u0641\u0629",
      "description": "\u0627\u062d\u062a\u0641\u0627\u0644 \u0637\u0644\u0627\u0628\u064a \u0628\u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0648\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629.",
      "full": "\u064a\u0628\u0631\u0632 \u0645\u0647\u0631\u062c\u0627\u0646 \u0627\u0644\u062b\u0642\u0627\u0641\u0629 \u062a\u0646\u0648\u0639 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0623\u062c\u0646\u062d\u0629 \u0637\u0644\u0627\u0628\u064a\u0629 \u0648\u0639\u0631\u0648\u0636 \u062a\u0631\u0627\u062b\u064a\u0629 \u0648\u0645\u0633\u0627\u062d\u0627\u062a \u0641\u0646\u064a\u0629 \u0645\u0634\u062a\u0631\u0643\u0629."
    }
  },
  {
    "id": "sports-finals",
    "image": "assets/img/event-sports.svg",
    "category": "sports",
    "location": "sportsComplex",
    "date": "2026-05-09",
    "time": "3:00 PM - 7:00 PM",
    "featured": true,
    "en": {
      "title": "University Sports Finals",
      "description": "Cheer for student teams in football, basketball, and track finals.",
      "full": "The annual sports finals bring together university teams and supporters for an afternoon of finals, awards, and community energy."
    },
    "ar": {
      "title": "\u0646\u0647\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0636\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u064a\u0629",
      "description": "\u0634\u062c\u0639 \u0641\u0631\u0642 \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064a \u0646\u0647\u0627\u0626\u064a\u0627\u062a \u0643\u0631\u0629 \u0627\u0644\u0642\u062f\u0645 \u0648\u0627\u0644\u0633\u0644\u0629 \u0648\u0627\u0644\u062c\u0631\u064a.",
      "full": "\u062a\u062c\u0645\u0639 \u0646\u0647\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0636\u0629 \u0627\u0644\u0633\u0646\u0648\u064a\u0629 \u0641\u0631\u0642 \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0648\u062c\u0645\u0627\u0647\u064a\u0631\u0647\u0627 \u0641\u064a \u064a\u0648\u0645 \u0645\u0644\u064a\u0621 \u0628\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 \u0648\u0627\u0644\u062c\u0648\u0627\u0626\u0632 \u0648\u0631\u0648\u062d \u0627\u0644\u0645\u062c\u062a\u0645\u0639."
    }
  },
  {
    "id": "music-night",
    "image": "assets/img/event-music.svg",
    "category": "music",
    "location": "artsHall",
    "date": "2026-05-16",
    "time": "7:00 PM - 10:00 PM",
    "featured": false,
    "en": {
      "title": "Student Music Night",
      "description": "Live student bands, acoustic sets, and an open mic finale.",
      "full": "Student Music Night gives campus performers a polished stage and gives visitors a relaxed evening of music, lights, and community."
    },
    "ar": {
      "title": "\u0644\u064a\u0644\u0629 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0637\u0644\u0627\u0628\u064a\u0629",
      "description": "\u0641\u0631\u0642 \u0637\u0644\u0627\u0628\u064a\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0648\u0639\u0631\u0648\u0636 \u0647\u0627\u062f\u0626\u0629 \u0648\u0645\u064a\u0643\u0631\u0648\u0641\u0648\u0646 \u0645\u0641\u062a\u0648\u062d.",
      "full": "\u062a\u0645\u0646\u062d \u0644\u064a\u0644\u0629 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0637\u0644\u0627\u0628\u064a\u0629 \u0644\u0644\u0645\u0648\u0647\u0648\u0628\u064a\u0646 \u0645\u0646\u0635\u0629 \u0623\u0646\u064a\u0642\u0629 \u0648\u062a\u0645\u0646\u062d \u0627\u0644\u062d\u0636\u0648\u0631 \u0623\u0645\u0633\u064a\u0629 \u0645\u0631\u064a\u062d\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0627\u0644\u0623\u0636\u0648\u0627\u0621."
    }
  },
  {
    "id": "volunteer-day",
    "image": "assets/img/event-volunteer.svg",
    "category": "community",
    "location": "campusGarden",
    "date": "2026-06-01",
    "time": "8:30 AM - 12:30 PM",
    "featured": false,
    "en": {
      "title": "Community Volunteer Day",
      "description": "Join service teams for campus garden upgrades and local outreach activities.",
      "full": "Community Volunteer Day connects students with meaningful service projects, including campus beautification, donations sorting, and neighborhood outreach."
    },
    "ar": {
      "title": "\u064a\u0648\u0645 \u0627\u0644\u062a\u0637\u0648\u0639 \u0627\u0644\u0645\u062c\u062a\u0645\u0639\u064a",
      "description": "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0641\u0631\u0642 \u0627\u0644\u062e\u062f\u0645\u0629 \u0644\u062a\u062d\u0633\u064a\u0646 \u062d\u062f\u064a\u0642\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u062d\u0644\u064a.",
      "full": "\u064a\u0631\u0628\u0637 \u064a\u0648\u0645 \u0627\u0644\u062a\u0637\u0648\u0639 \u0627\u0644\u0645\u062c\u062a\u0645\u0639\u064a \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0645\u0634\u0627\u0631\u064a\u0639 \u062e\u062f\u0645\u064a\u0629 \u0645\u0641\u064a\u062f\u0629 \u062a\u0634\u0645\u0644 \u062a\u062c\u0645\u064a\u0644 \u0627\u0644\u062d\u0631\u0645 \u0648\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062d\u064a."
    }
  },
  {
    "id": "career-expo",
    "image": "assets/img/event-career.svg",
    "category": "career",
    "location": "alumniCenter",
    "date": "2026-06-12",
    "time": "11:00 AM - 4:00 PM",
    "featured": false,
    "en": {
      "title": "Career Pathways Expo",
      "description": "Meet employers, alumni mentors, and career advisors in one focused afternoon.",
      "full": "The Career Pathways Expo is built for students planning internships, first jobs, or graduate study. Expect employer booths, resume feedback, and alumni networking."
    },
    "ar": {
      "title": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0647\u0646\u064a",
      "description": "\u0642\u0627\u0628\u0644 \u062c\u0647\u0627\u062a \u0627\u0644\u062a\u0648\u0638\u064a\u0641 \u0648\u0627\u0644\u0645\u0631\u0634\u062f\u064a\u0646 \u0648\u0627\u0644\u062e\u0631\u064a\u062c\u064a\u0646 \u0641\u064a \u064a\u0648\u0645 \u0648\u0627\u062d\u062f.",
      "full": "\u0635\u0645\u0645 \u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0647\u0646\u064a \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0630\u064a\u0646 \u064a\u062e\u0637\u0637\u0648\u0646 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0623\u0648 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0623\u0648 \u0627\u0644\u062f\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u0639\u0644\u064a\u0627 \u0645\u0639 \u0623\u062c\u0646\u062d\u0629 \u062a\u0648\u0638\u064a\u0641 \u0648\u0645\u0631\u0627\u062c\u0639\u0629 \u0633\u064a\u0631 \u0630\u0627\u062a\u064a\u0629."
    }
  }
];
const I18N = {
  "en": {
    "meta": {
      "titlePrefix": "University Events Guide",
      "index": "Home",
      "events": "Events",
      "event": "Event Details",
      "about": "About",
      "contact": "Contact"
    },
    "nav": {
      "brand": "University Events",
      "home": "Home",
      "events": "Events",
      "details": "Details",
      "about": "About",
      "contact": "Contact",
      "language": "AR",
      "theme": "Dark"
    },
    "footer": {
      "description": "A student-friendly platform for discovering, filtering, and sharing university events.",
      "contactTitle": "Contact",
      "address": "Student Affairs Building, Main Campus",
      "linksTitle": "Social",
      "quickTitle": "Explore",
      "copyright": "Copyright 2026 University Events Guide. All rights reserved."
    },
    "common": {
      "viewDetails": "View Details",
      "bookSeat": "Book seat",
      "eventsCount": "events"
    },
    "home": {
      "eyebrow": "Campus life, organized",
      "title": "Discover university events that fit your week.",
      "subtitle": "Browse featured programs, filter upcoming activities, and switch between Arabic and English without losing the experience.",
      "primaryCta": "Explore events",
      "secondaryCta": "See latest",
      "statEvents": "Events",
      "statCategories": "Categories",
      "statLanguages": "Languages",
      "floatOneLabel": "Featured today",
      "floatOneTitle": "Innovation Week",
      "floatTwoLabel": "Next up",
      "floatTwoTitle": "Culture Festival",
      "featuredEyebrow": "Featured",
      "featuredTitle": "Featured Events",
      "viewAll": "View all events",
      "categoriesEyebrow": "Browse by interest",
      "categoriesTitle": "Event Categories",
      "latestEyebrow": "Fresh on campus",
      "latestTitle": "Latest Events",
      "filterEvents": "Filter events"
    },
    "events": {
      "eyebrow": "All campus events",
      "title": "Find the right event faster.",
      "subtitle": "Use category, date, and location filters to narrow the university calendar.",
      "emptyTitle": "No events found",
      "emptyText": "Try clearing one of the filters or selecting a different month."
    },
    "filters": {
      "category": "Category",
      "date": "Date",
      "location": "Location",
      "allCategories": "All categories",
      "allDates": "All dates",
      "allLocations": "All locations",
      "clear": "Clear filters",
      "showing": "Showing {count} event(s)",
      "monthApr": "April 2026",
      "monthMay": "May 2026",
      "monthJun": "June 2026"
    },
    "details": {
      "dateTime": "Date and time",
      "location": "Location",
      "addCalendar": "Add to Calendar",
      "share": "Share",
      "overviewEyebrow": "Overview",
      "aboutEvent": "About this event",
      "galleryEyebrow": "Photos",
      "galleryTitle": "Image Gallery",
      "mapEyebrow": "Campus map",
      "mapTitle": "Event location",
      "mapNote": "Static map image for front-end demonstration.",
      "relatedEyebrow": "Keep exploring",
      "relatedTitle": "Related Events"
    },
    "about": {
      "eyebrow": "About the guide",
      "title": "A practical event discovery platform for university life.",
      "subtitle": "The guide helps students, clubs, and departments publish clear event information in a responsive multilingual experience.",
      "platformTitle": "Platform description",
      "platformText": "A front-end guide that organizes university events, categories, locations, and event details in one easy interface.",
      "visionTitle": "Vision",
      "visionText": "Make campus activities visible, inclusive, and simple to explore for every student.",
      "missionTitle": "Mission",
      "missionText": "Provide a polished digital front door for academic, cultural, sport, community, and career events.",
      "teamEyebrow": "People behind it",
      "teamTitle": "Editorial Team",
      "policiesEyebrow": "Publishing policies",
      "policiesTitle": "Basic publishing policies",
      "policyOne": "Events must include accurate dates and locations.",
      "policyTwo": "Submissions should respect university community standards.",
      "policyThree": "Images and descriptions should be clear and student-friendly."
    },
    "team": {
      "amira": {
        "name": "Amira Hassan",
        "role": "Events Coordinator"
      },
      "omar": {
        "name": "Omar Nasser",
        "role": "UI Content Designer"
      },
      "lina": {
        "name": "Lina Kareem",
        "role": "Student Editor"
      }
    },
    "contact": {
      "eyebrow": "Contact the team",
      "title": "Have an event question?",
      "subtitle": "Send a message to the university events team. Required fields and email format are validated with JavaScript.",
      "infoEyebrow": "Reach us",
      "infoTitle": "Contact information",
      "office": "Office",
      "bookingDemo": "Open booking modal demo"
    },
    "forms": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "namePlaceholder": "Your name",
      "emailPlaceholder": "name@example.com",
      "messagePlaceholder": "Tell us how we can help",
      "send": "Send message",
      "success": "Thanks! Your message was validated and submitted in the UI demo.",
      "errorRequired": "Please complete all required fields.",
      "errorEmail": "Please enter a valid email address."
    },
    "modal": {
      "eyebrow": "UI booking demo",
      "title": "Reserve your seat",
      "chooseEvent": "Choose an event from the website.",
      "cancel": "Cancel",
      "submit": "Confirm reservation",
      "success": "Reservation confirmed in the UI demo."
    },
    "alerts": {
      "calendar": "Calendar action is a front-end UI demo.",
      "share": "Event link copied to clipboard.",
      "shareFallback": "Share action is a front-end UI demo."
    },
    "categories": {
      "tech": "Technology",
      "culture": "Culture",
      "sports": "Sports",
      "music": "Music",
      "community": "Community",
      "career": "Career"
    },
    "locations": {
      "innovationHall": "Innovation Hall",
      "mainTheater": "Main Theater",
      "sportsComplex": "Sports Complex",
      "artsHall": "Arts Hall",
      "campusGarden": "Campus Garden",
      "alumniCenter": "Alumni Center"
    }
  },
  "ar": {
    "meta": {
      "titlePrefix": "\u062f\u0644\u064a\u0644 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629",
      "index": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "events": "\u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "event": "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629",
      "about": "\u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629",
      "contact": "\u062a\u0648\u0627\u0635\u0644"
    },
    "nav": {
      "brand": "\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629",
      "home": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "events": "\u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "details": "\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644",
      "about": "\u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629",
      "contact": "\u062a\u0648\u0627\u0635\u0644",
      "language": "EN",
      "theme": "\u062f\u0627\u0643\u0646"
    },
    "footer": {
      "description": "\u0645\u0646\u0635\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0637\u0644\u0627\u0628 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0648\u062a\u0635\u0641\u064a\u062a\u0647\u0627 \u0648\u0645\u0634\u0627\u0631\u0643\u062a\u0647\u0627.",
      "contactTitle": "\u0627\u0644\u062a\u0648\u0627\u0635\u0644",
      "address": "\u0645\u0628\u0646\u0649 \u0634\u0624\u0648\u0646 \u0627\u0644\u0637\u0644\u0627\u0628\u060c \u0627\u0644\u062d\u0631\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a",
      "linksTitle": "\u0627\u0644\u0634\u0628\u0643\u0627\u062a",
      "quickTitle": "\u0627\u0633\u062a\u0643\u0634\u0641",
      "copyright": "\u062d\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 2026 \u062f\u0644\u064a\u0644 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."
    },
    "common": {
      "viewDetails": "\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644",
      "bookSeat": "\u0627\u062d\u062c\u0632 \u0645\u0642\u0639\u062f\u0627\u064b",
      "eventsCount": "\u0641\u0639\u0627\u0644\u064a\u0627\u062a"
    },
    "home": {
      "eyebrow": "\u062d\u064a\u0627\u0629 \u062c\u0627\u0645\u0639\u064a\u0629 \u0645\u0646\u0638\u0645\u0629",
      "title": "\u0627\u0643\u062a\u0634\u0641 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u062c\u0627\u0645\u0639\u064a\u0629 \u062a\u0646\u0627\u0633\u0628 \u0623\u0633\u0628\u0648\u0639\u0643.",
      "subtitle": "\u062a\u0635\u0641\u062d \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u0645\u064a\u0632\u0629 \u0648\u0635\u0641 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629 \u0648\u0628\u062f\u0644 \u0628\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0633\u0644\u0627\u0633\u0629.",
      "primaryCta": "\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "secondaryCta": "\u0634\u0627\u0647\u062f \u0627\u0644\u0623\u062d\u062f\u062b",
      "statEvents": "\u0641\u0639\u0627\u0644\u064a\u0629",
      "statCategories": "\u0641\u0626\u0627\u062a",
      "statLanguages": "\u0644\u063a\u062a\u0627\u0646",
      "floatOneLabel": "\u0645\u0645\u064a\u0632 \u0627\u0644\u064a\u0648\u0645",
      "floatOneTitle": "\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631",
      "floatTwoLabel": "\u0627\u0644\u0642\u0627\u062f\u0645",
      "floatTwoTitle": "\u0645\u0647\u0631\u062c\u0627\u0646 \u0627\u0644\u062b\u0642\u0627\u0641\u0629",
      "featuredEyebrow": "\u0645\u0645\u064a\u0632",
      "featuredTitle": "\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0645\u0645\u064a\u0632\u0629",
      "viewAll": "\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "categoriesEyebrow": "\u062a\u0635\u0641\u062d \u062d\u0633\u0628 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645",
      "categoriesTitle": "\u0641\u0626\u0627\u062a \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "latestEyebrow": "\u062c\u062f\u064a\u062f \u0641\u064a \u0627\u0644\u062d\u0631\u0645",
      "latestTitle": "\u0623\u062d\u062f\u062b \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "filterEvents": "\u0635\u0641 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a"
    },
    "events": {
      "eyebrow": "\u0643\u0644 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062d\u0631\u0645",
      "title": "\u0627\u0639\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0628\u0633\u0631\u0639\u0629.",
      "subtitle": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0641\u0626\u0629 \u0648\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0648\u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062a\u0636\u064a\u064a\u0642 \u062a\u0642\u0648\u064a\u0645 \u0627\u0644\u062c\u0627\u0645\u0639\u0629.",
      "emptyTitle": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0639\u0627\u0644\u064a\u0627\u062a",
      "emptyText": "\u062c\u0631\u0628 \u0645\u0633\u062d \u0623\u062d\u062f \u0627\u0644\u0641\u0644\u0627\u062a\u0631 \u0623\u0648 \u0627\u062e\u062a\u064a\u0627\u0631 \u0634\u0647\u0631 \u0645\u062e\u062a\u0644\u0641."
    },
    "filters": {
      "category": "\u0627\u0644\u0641\u0626\u0629",
      "date": "\u0627\u0644\u062a\u0627\u0631\u064a\u062e",
      "location": "\u0627\u0644\u0645\u0648\u0642\u0639",
      "allCategories": "\u0643\u0644 \u0627\u0644\u0641\u0626\u0627\u062a",
      "allDates": "\u0643\u0644 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e",
      "allLocations": "\u0643\u0644 \u0627\u0644\u0645\u0648\u0627\u0642\u0639",
      "clear": "\u0645\u0633\u062d \u0627\u0644\u0641\u0644\u0627\u062a\u0631",
      "showing": "\u064a\u062a\u0645 \u0639\u0631\u0636 {count} \u0641\u0639\u0627\u0644\u064a\u0629",
      "monthApr": "\u0623\u0628\u0631\u064a\u0644 2026",
      "monthMay": "\u0645\u0627\u064a\u0648 2026",
      "monthJun": "\u064a\u0648\u0646\u064a\u0648 2026"
    },
    "details": {
      "dateTime": "\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0648\u0627\u0644\u0648\u0642\u062a",
      "location": "\u0627\u0644\u0645\u0648\u0642\u0639",
      "addCalendar": "\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u062a\u0642\u0648\u064a\u0645",
      "share": "\u0645\u0634\u0627\u0631\u0643\u0629",
      "overviewEyebrow": "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
      "aboutEvent": "\u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629",
      "galleryEyebrow": "\u0635\u0648\u0631",
      "galleryTitle": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
      "mapEyebrow": "\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u062d\u0631\u0645",
      "mapTitle": "\u0645\u0648\u0642\u0639 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629",
      "mapNote": "\u0635\u0648\u0631\u0629 \u062e\u0631\u064a\u0637\u0629 \u062b\u0627\u0628\u062a\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0627\u062c\u0647\u0629.",
      "relatedEyebrow": "\u062a\u0627\u0628\u0639 \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641",
      "relatedTitle": "\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0630\u0627\u062a \u0635\u0644\u0629"
    },
    "about": {
      "eyebrow": "\u0639\u0646 \u0627\u0644\u062f\u0644\u064a\u0644",
      "title": "\u0645\u0646\u0635\u0629 \u0639\u0645\u0644\u064a\u0629 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u062d\u064a\u0627\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u0629.",
      "subtitle": "\u064a\u0633\u0627\u0639\u062f \u0627\u0644\u062f\u0644\u064a\u0644 \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0639\u0644\u0649 \u0646\u0634\u0631 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0648\u0627\u0636\u062d\u0629 \u0628\u062a\u062c\u0631\u0628\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0644\u063a\u0627\u062a.",
      "platformTitle": "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u0635\u0629",
      "platformText": "\u062f\u0644\u064a\u0644 \u0648\u0627\u062c\u0647\u0629 \u0623\u0645\u0627\u0645\u064a\u0629 \u064a\u0646\u0638\u0645 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0648\u0641\u0626\u0627\u062a\u0647\u0627 \u0648\u0645\u0648\u0627\u0642\u0639\u0647\u0627 \u0628\u0648\u0627\u062c\u0647\u0629 \u0633\u0647\u0644\u0629.",
      "visionTitle": "\u0627\u0644\u0631\u0624\u064a\u0629",
      "visionText": "\u062c\u0639\u0644 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062d\u0631\u0645 \u0648\u0627\u0636\u062d\u0629 \u0648\u0634\u0627\u0645\u0644\u0629 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0644\u0643\u0644 \u0637\u0627\u0644\u0628.",
      "missionTitle": "\u0627\u0644\u0631\u0633\u0627\u0644\u0629",
      "missionText": "\u062a\u0642\u062f\u064a\u0645 \u0648\u0627\u062c\u0647\u0629 \u0631\u0642\u0645\u064a\u0629 \u0623\u0646\u064a\u0642\u0629 \u0644\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629 \u0648\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064a\u0629.",
      "teamEyebrow": "\u0627\u0644\u0641\u0631\u064a\u0642",
      "teamTitle": "\u0641\u0631\u064a\u0642 \u0627\u0644\u062a\u062d\u0631\u064a\u0631",
      "policiesEyebrow": "\u0633\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0646\u0634\u0631",
      "policiesTitle": "\u0633\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",
      "policyOne": "\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0636\u0645\u0646 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u062a\u0648\u0627\u0631\u064a\u062e \u0648\u0645\u0648\u0627\u0642\u0639 \u062f\u0642\u064a\u0642\u0629.",
      "policyTwo": "\u064a\u062c\u0628 \u0623\u0646 \u062a\u062d\u062a\u0631\u0645 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0645\u0639\u0627\u064a\u064a\u0631 \u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u062c\u0627\u0645\u0639\u0629.",
      "policyThree": "\u064a\u0641\u0636\u0644 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0623\u0648\u0635\u0627\u0641 \u0648\u0627\u0636\u062d\u0629 \u0648\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0637\u0644\u0627\u0628."
    },
    "team": {
      "amira": {
        "name": "\u0623\u0645\u064a\u0631\u0629 \u062d\u0633\u0646",
        "role": "\u0645\u0646\u0633\u0642\u0629 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a"
      },
      "omar": {
        "name": "\u0639\u0645\u0631 \u0646\u0627\u0635\u0631",
        "role": "\u0645\u0635\u0645\u0645 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0648\u0627\u062c\u0647\u0629"
      },
      "lina": {
        "name": "\u0644\u064a\u0646\u0627 \u0643\u0631\u064a\u0645",
        "role": "\u0645\u062d\u0631\u0631\u0629 \u0637\u0644\u0627\u0628\u064a\u0629"
      }
    },
    "contact": {
      "eyebrow": "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0641\u0631\u064a\u0642",
      "title": "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0633\u0624\u0627\u0644 \u0639\u0646 \u0641\u0639\u0627\u0644\u064a\u0629\u061f",
      "subtitle": "\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0649 \u0641\u0631\u064a\u0642 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062c\u0627\u0645\u0639\u0629. \u064a\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u062c\u0627\u0641\u0627\u0633\u0643\u0631\u064a\u0628\u062a.",
      "infoEyebrow": "\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644",
      "infoTitle": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644",
      "office": "\u0627\u0644\u0645\u0643\u062a\u0628",
      "bookingDemo": "\u0641\u062a\u062d \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062d\u062c\u0632"
    },
    "forms": {
      "name": "\u0627\u0644\u0627\u0633\u0645",
      "email": "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
      "message": "\u0627\u0644\u0631\u0633\u0627\u0644\u0629",
      "namePlaceholder": "\u0627\u0633\u0645\u0643",
      "emailPlaceholder": "name@example.com",
      "messagePlaceholder": "\u0627\u0643\u062a\u0628 \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062f\u062a\u0643",
      "send": "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629",
      "success": "\u0634\u0643\u0631\u0627\u064b! \u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0631\u0633\u0627\u0644\u062a\u0643 \u0648\u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0641\u064a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0648\u0627\u062c\u0647\u0629.",
      "errorRequired": "\u064a\u0631\u062c\u0649 \u0625\u0643\u0645\u0627\u0644 \u0643\u0644 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.",
      "errorEmail": "\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d."
    },
    "modal": {
      "eyebrow": "\u0646\u0645\u0648\u0630\u062c \u062d\u062c\u0632 \u0644\u0644\u0648\u0627\u062c\u0647\u0629",
      "title": "\u0627\u062d\u062c\u0632 \u0645\u0642\u0639\u062f\u0643",
      "chooseEvent": "\u0627\u062e\u062a\u0631 \u0641\u0639\u0627\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639.",
      "cancel": "\u0625\u0644\u063a\u0627\u0621",
      "submit": "\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u062c\u0632",
      "success": "\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u062c\u0632 \u0641\u064a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0648\u0627\u062c\u0647\u0629."
    },
    "alerts": {
      "calendar": "\u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u062a\u0642\u0648\u064a\u0645 \u0646\u0645\u0648\u0630\u062c \u0648\u0627\u062c\u0647\u0629 \u0641\u0642\u0637.",
      "share": "\u062a\u0645 \u0646\u0633\u062e \u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629.",
      "shareFallback": "\u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0646\u0645\u0648\u0630\u062c \u0648\u0627\u062c\u0647\u0629 \u0641\u0642\u0637."
    },
    "categories": {
      "tech": "\u062a\u0642\u0646\u064a\u0629",
      "culture": "\u062b\u0642\u0627\u0641\u0629",
      "sports": "\u0631\u064a\u0627\u0636\u0629",
      "music": "\u0645\u0648\u0633\u064a\u0642\u0649",
      "community": "\u0645\u062c\u062a\u0645\u0639",
      "career": "\u0645\u0647\u0646\u0629"
    },
    "locations": {
      "innovationHall": "\u0642\u0627\u0639\u0629 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631",
      "mainTheater": "\u0627\u0644\u0645\u0633\u0631\u062d \u0627\u0644\u0631\u0626\u064a\u0633\u064a",
      "sportsComplex": "\u0627\u0644\u0645\u062c\u0645\u0639 \u0627\u0644\u0631\u064a\u0627\u0636\u064a",
      "artsHall": "\u0642\u0627\u0639\u0629 \u0627\u0644\u0641\u0646\u0648\u0646",
      "campusGarden": "\u062d\u062f\u064a\u0642\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u0629",
      "alumniCenter": "\u0645\u0631\u0643\u0632 \u0627\u0644\u062e\u0631\u064a\u062c\u064a\u0646"
    }
  }
};

function readPreference(key, fallback = '') {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Preferences are progressive enhancement; the UI still works without storage.
  }
}

function removePreference(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Ignore storage errors in restricted browsing modes.
  }
}

const APP = {
  lang: readPreference('ue_lang', 'en'),
  theme: readPreference('ue_theme', 'light'),
  sliderIndex: 0,
  sliderTimer: null,
  currentEventId: null
};

const BOOTSTRAP_LTR = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
const BOOTSTRAP_RTL = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css';

function t(path, fallback = '') {
  return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), I18N[APP.lang]) ?? fallback ?? path;
}

function eventText(event) {
  return event[APP.lang] || event.en;
}

function formatDate(dateStr) {
  const locale = APP.lang === 'ar' ? 'ar-SA' : 'en-GB';
  return new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(dateStr + 'T12:00:00'));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function applyLanguage(lang) {
  APP.lang = lang;
  writePreference('ue_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  const bootstrapLink = document.getElementById('bootstrapStylesheet');
  if (bootstrapLink) bootstrapLink.href = lang === 'ar' ? BOOTSTRAP_RTL : BOOTSTRAP_LTR;
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n, node.textContent); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder, node.placeholder); });
  const page = document.body.dataset.page || 'index';
  document.title = `${t('meta.titlePrefix')} | ${t(`meta.${page}`, page)}`;
  renderPage();
}

function applyTheme(theme) {
  APP.theme = theme;
  writePreference('ue_theme', theme);
  document.documentElement.dataset.theme = theme;
  const button = document.querySelector('[data-action="toggle-theme"]');
  if (button) button.textContent = theme === 'dark' ? (APP.lang === 'ar' ? 'فاتح' : 'Light') : t('nav.theme');
}

function setActiveNav() {
  const page = document.body.dataset.page || 'index';
  document.querySelectorAll('[data-page-link]').forEach((link) => {
    link.classList.toggle('active', link.dataset.pageLink === page);
    if (link.dataset.pageLink === page) link.setAttribute('aria-current', 'page');
  });
}

function createEventCard(event, options = {}) {
  const text = eventText(event);
  const category = t(`categories.${event.category}`);
  const location = t(`locations.${event.location}`);
  const description = options.compact ? text.description.slice(0, 105) + (text.description.length > 105 ? '...' : '') : text.description;
  return `
    <article class="event-card">
      <img class="event-image" src="${event.image}" alt="${escapeHtml(text.title)}">
      <div class="event-card-body">
        <span class="category-badge">${category}</span>
        <h3>${escapeHtml(text.title)}</h3>
        <div class="event-meta">
          <span>${formatDate(event.date)}</span>
          <span>${escapeHtml(location)}</span>
        </div>
        <p>${escapeHtml(description)}</p>
        <div class="card-actions">
          <a class="btn btn-primary" href="event.html?id=${encodeURIComponent(event.id)}">${t('common.viewDetails')}</a>
          <button class="btn btn-outline-primary" type="button" data-book-event="${event.id}">${t('common.bookSeat')}</button>
        </div>
      </div>
    </article>`;
}

function renderHome() {
  const latestGrid = document.getElementById('latestEventsGrid');
  if (latestGrid) {
    latestGrid.innerHTML = EVENTS.slice(0, 3).map((event) => `<div class="col-md-6 col-xl-4">${createEventCard(event, { compact: true })}</div>`).join('');
  }

  const categoryPills = document.getElementById('categoryPills');
  if (categoryPills) {
    const categories = [...new Set(EVENTS.map((event) => event.category))];
    categoryPills.innerHTML = categories.map((category) => {
      const count = EVENTS.filter((event) => event.category === category).length;
      return `<a class="category-pill" href="events.html?category=${category}"><strong>${t(`categories.${category}`)}</strong><span>${count} ${t('common.eventsCount')}</span></a>`;
    }).join('');
  }

  renderSlider();
}

function renderSlider() {
  const slider = document.getElementById('featuredSlider');
  const dots = document.getElementById('featuredDots');
  if (!slider || !dots) return;
  const featured = EVENTS.filter((event) => event.featured);
  const event = featured[APP.sliderIndex % featured.length];
  const text = eventText(event);
  slider.innerHTML = `
    <article class="slider-card">
      <div class="slider-card-content">
        <span class="category-badge">${t(`categories.${event.category}`)}</span>
        <h3>${escapeHtml(text.title)}</h3>
        <div class="event-meta">
          <span>${formatDate(event.date)}</span>
          <span>${escapeHtml(t(`locations.${event.location}`))}</span>
        </div>
        <p>${escapeHtml(text.description)}</p>
        <div class="card-actions">
          <a class="btn btn-primary" href="event.html?id=${encodeURIComponent(event.id)}">${t('common.viewDetails')}</a>
          <button class="btn btn-outline-primary" type="button" data-book-event="${event.id}">${t('common.bookSeat')}</button>
        </div>
      </div>
      <div class="slider-card-media"><img src="${event.image}" alt="${escapeHtml(text.title)}"></div>
    </article>`;
  dots.innerHTML = featured.map((_, index) => `<button type="button" class="${index === APP.sliderIndex ? 'active' : ''}" data-slider-dot="${index}" aria-label="Slide ${index + 1}"></button>`).join('');
}

function moveSlider(direction) {
  const featured = EVENTS.filter((event) => event.featured);
  APP.sliderIndex = (APP.sliderIndex + direction + featured.length) % featured.length;
  renderSlider();
}

function setupSliderTimer() {
  if (!document.getElementById('featuredSlider')) return;
  clearInterval(APP.sliderTimer);
  APP.sliderTimer = setInterval(() => moveSlider(1), 5500);
}

function getStoredFilters() {
  try {
    return JSON.parse(readPreference('ue_filters', '{}'));
  } catch (error) {
    removePreference('ue_filters');
    return {};
  }
}

function getFilterValues() {
  return {
    category: document.getElementById('categoryFilter')?.value || 'all',
    date: document.getElementById('dateFilter')?.value || 'all',
    location: document.getElementById('locationFilter')?.value || 'all'
  };
}

function populateFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const dateFilter = document.getElementById('dateFilter');
  const locationFilter = document.getElementById('locationFilter');
  if (!categoryFilter || !dateFilter || !locationFilter) return;

  const params = new URLSearchParams(window.location.search);
  const saved = getStoredFilters();
  const hydrated = categoryFilter.dataset.hydrated === 'true';
  const currentValues = getFilterValues();
  const current = hydrated
    ? currentValues
    : {
        category: params.get('category') || saved.category || 'all',
        date: saved.date || 'all',
        location: saved.location || 'all'
      };

  const categories = [...new Set(EVENTS.map((event) => event.category))];
  const months = [...new Set(EVENTS.map((event) => event.date.slice(0, 7)))];
  const locations = [...new Set(EVENTS.map((event) => event.location))];
  const monthLabels = { '2026-04': t('filters.monthApr'), '2026-05': t('filters.monthMay'), '2026-06': t('filters.monthJun') };

  categoryFilter.innerHTML = `<option value="all">${t('filters.allCategories')}</option>` + categories.map((category) => `<option value="${category}">${t(`categories.${category}`)}</option>`).join('');
  dateFilter.innerHTML = `<option value="all">${t('filters.allDates')}</option>` + months.map((month) => `<option value="${month}">${monthLabels[month] || month}</option>`).join('');
  locationFilter.innerHTML = `<option value="all">${t('filters.allLocations')}</option>` + locations.map((location) => `<option value="${location}">${t(`locations.${location}`)}</option>`).join('');

  categoryFilter.value = categories.includes(current.category) ? current.category : 'all';
  dateFilter.value = months.includes(current.date) ? current.date : 'all';
  locationFilter.value = locations.includes(current.location) ? current.location : 'all';
  categoryFilter.dataset.hydrated = 'true';
}

function renderEventsPage() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  populateFilters();
  const category = document.getElementById('categoryFilter').value;
  const date = document.getElementById('dateFilter').value;
  const location = document.getElementById('locationFilter').value;
  const filters = { category, date, location };
  writePreference('ue_filters', JSON.stringify(filters));

  const filtered = EVENTS.filter((event) => {
    const byCategory = category === 'all' || event.category === category;
    const byDate = date === 'all' || event.date.startsWith(date);
    const byLocation = location === 'all' || event.location === location;
    return byCategory && byDate && byLocation;
  });

  grid.innerHTML = filtered.map((event) => `<div class="col-md-6 col-xl-4">${createEventCard(event)}</div>`).join('');
  const noEvents = document.getElementById('noEvents');
  if (noEvents) noEvents.classList.toggle('d-none', filtered.length !== 0);
  const summary = document.getElementById('filterSummary');
  if (summary) summary.textContent = t('filters.showing').replace('{count}', filtered.length);
}

function getCurrentEvent() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || APP.currentEventId || EVENTS[0].id;
  return EVENTS.find((event) => event.id === id) || EVENTS[0];
}

function renderEventDetails() {
  const title = document.getElementById('detailTitle');
  if (!title) return;
  const event = getCurrentEvent();
  APP.currentEventId = event.id;
  const text = eventText(event);
  title.textContent = text.title;
  document.getElementById('detailDescription').textContent = text.description;
  document.getElementById('detailFullText').textContent = text.full;
  document.getElementById('detailDateTime').textContent = `${formatDate(event.date)} | ${event.time}`;
  document.getElementById('detailLocation').textContent = t(`locations.${event.location}`);
  document.getElementById('detailCategory').textContent = t(`categories.${event.category}`);
  const image = document.getElementById('detailImage');
  image.src = event.image;
  image.alt = text.title;

  const gallery = document.getElementById('galleryGrid');
  if (gallery) {
    gallery.innerHTML = ['assets/img/gallery-1.svg', 'assets/img/gallery-2.svg', 'assets/img/gallery-3.svg'].map((src, index) => `<img src="${src}" alt="${escapeHtml(text.title)} gallery image ${index + 1}">`).join('');
  }
  const related = document.getElementById('relatedEvents');
  if (related) {
    related.innerHTML = EVENTS.filter((item) => item.id !== event.id).slice(0, 3).map((item) => `<div class="col-md-6 col-xl-4">${createEventCard(item, { compact: true })}</div>`).join('');
  }
}

function renderPage() {
  setActiveNav();
  renderHome();
  renderEventsPage();
  renderEventDetails();
  bindBookingButtons();
  applyTheme(APP.theme);
}

function showAlert(container, type, message) {
  if (!container) return;
  container.innerHTML = `<div class="alert alert-${type}" role="alert">${escapeHtml(message)}</div>`;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function bindContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const alertBox = document.getElementById('formAlert');
    if (!name || !email || !message) return showAlert(alertBox, 'danger', t('forms.errorRequired'));
    if (!isValidEmail(email)) return showAlert(alertBox, 'danger', t('forms.errorEmail'));
    showAlert(alertBox, 'success', t('forms.success'));
    form.reset();
  });
}

function bindBookingButtons() {
  document.querySelectorAll('[data-book-event]').forEach((button) => {
    if (button.dataset.boundBooking === 'true') return;
    button.dataset.boundBooking = 'true';
    button.addEventListener('click', () => {
      const id = button.dataset.bookEvent;
      const event = id === 'current' ? getCurrentEvent() : EVENTS.find((item) => item.id === id);
      const preview = document.getElementById('bookingEventPreview');
      APP.currentEventId = event ? event.id : APP.currentEventId;
      if (preview) preview.textContent = event ? eventText(event).title : t('modal.chooseEvent');
      const bookingAlert = document.getElementById('bookingAlert');
      if (bookingAlert) bookingAlert.innerHTML = '';
      const modalElement = document.getElementById('bookingModal');
      if (window.bootstrap?.Modal && modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else if (modalElement) {
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
        modalElement.removeAttribute('aria-hidden');
      }
    });
  });
}

function bindBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('bookingName').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    const alertBox = document.getElementById('bookingAlert');
    if (!name || !email) return showAlert(alertBox, 'danger', t('forms.errorRequired'));
    if (!isValidEmail(email)) return showAlert(alertBox, 'danger', t('forms.errorEmail'));
    showAlert(alertBox, 'success', t('modal.success'));
    form.reset();
  });
}

function bindGlobalControls() {
  document.querySelector('[data-action="toggle-language"]')?.addEventListener('click', () => applyLanguage(APP.lang === 'en' ? 'ar' : 'en'));
  document.querySelector('[data-action="toggle-theme"]')?.addEventListener('click', () => applyTheme(APP.theme === 'dark' ? 'light' : 'dark'));
  document.querySelector('[data-action="scroll-top"]')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.addEventListener('click', (event) => {
    const sliderButton = event.target.closest('[data-slider]');
    if (sliderButton) {
      moveSlider(sliderButton.dataset.slider === 'next' ? 1 : -1);
      setupSliderTimer();
    }
    const dot = event.target.closest('[data-slider-dot]');
    if (dot) {
      APP.sliderIndex = Number(dot.dataset.sliderDot);
      renderSlider();
      setupSliderTimer();
    }
  });

  ['categoryFilter', 'dateFilter', 'locationFilter'].forEach((id) => {
    document.getElementById(id)?.addEventListener('change', renderEventsPage);
  });
  document.getElementById('clearFilters')?.addEventListener('click', () => {
    removePreference('ue_filters');
    const cleanUrl = window.location.pathname.endsWith('events.html') ? 'events.html' : window.location.pathname;
    if (window.location.search) window.history.replaceState(null, '', cleanUrl);
    ['categoryFilter', 'dateFilter', 'locationFilter'].forEach((id) => { const el = document.getElementById(id); if (el) el.value = 'all'; });
    renderEventsPage();
  });

  document.getElementById('calendarButton')?.addEventListener('click', () => alert(t('alerts.calendar')));
  document.getElementById('shareButton')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(t('alerts.share'));
    } catch (error) {
      alert(t('alerts.shareFallback'));
    }
  });

  window.addEventListener('scroll', () => {
    const button = document.querySelector('.scroll-top');
    if (button) button.classList.toggle('is-visible', window.scrollY > 500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(APP.lang);
  applyTheme(APP.theme);
  bindGlobalControls();
  bindContactForm();
  bindBookingForm();
  setupSliderTimer();
});
