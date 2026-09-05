// data/projects.js

export const projects = [
  {
    slug: "trendbuy",

    featured: true,

    title: "TrendBuy",

    subtitle:
      "A modern e-commerce app for discovering trending products.",

    description:
      "TrendBuy is a cross-platform e-commerce application designed to help users discover and purchase trending products. With a clean interface and powerful features, it makes shopping simple and enjoyable.",

    tags: [
      "Mobile App",
      "E-commerce",
      "Cross-platform",
      "Personal Project",
    ],

    cardImage: "/Trendbuy.png",
    heroImage: "/Trendbuy.png",

    liveUrl: "https://example.com",

    githubUrl: "https://github.com/yourusername/trendbuy",

    overview: {
      title: "Project Overview",

      description:
        "TrendBuy was built to solve the common problem of disorganized e-commerce management. The goal was to create a simple yet powerful tool that works seamlessly across platforms, providing a smooth and intuitive user experience.",

      image: "/Trendbuy.png",
    },

    features: [
      {
        icon: "list",
        title: "Product Discovery",
        description:
          "Easily discover trending products.",
      },
      {
        icon: "devices",
        title: "Cross-Platform",
        description:
          "Available on both Android and iOS using Flutter.",
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "Work together with your team in real-time.",
      },
      {
        icon: "moon",
        title: "Dark Mode",
        description:
          "A beautiful dark theme for comfortable usage.",
      },
    ],

    technologies: [
      {
        name: "Flutter",
        logo: "/logos/flutter.svg",
      },
      {
        name: "Firebase",
        logo: "/logos/firebase.svg",
      },
      {
        name: "Dart",
        logo: "/logos/dart.svg",
      },
      {
        name: "Figma",
        logo: "/logos/figma.svg",
      },
    ],

    challenges: [
      "Implementing real-time synchronization",
      "Handling offline data storage",
      "Creating a consistent UI across platforms",
      "Optimizing app performance",
    ],

    learnings: [
      "Deepened my knowledge of state management",
      "Improved my problem-solving skills",
      "Gained experience with real-time databases",
      "Learned best practices for cross-platform development",
    ],

    results: [
      {
        value: "1K+",
        label: "Active Users",
      },
      {
        value: "4.8",
        label: "App Rating",
      },
      {
        value: "5K+",
        label: "Downloads",
      },
    ],
  },

  {
    slug: "cash-app",

    title: "Cash App",

    subtitle: "A simple app for keeping track of daily spending.",

    description:
      "Cash App is a focused expense-tracking application designed to make daily spending easier to record and understand.",

    tags: ["Mobile App", "Finance", "Flutter", "Personal Project"],

    cardImage: "/Cash-app.png",
    heroImage: "/Cash-app.png",

    liveUrl: "https://example.com",

    githubUrl: "https://github.com/yourusername/cash-app",

    overview: {
      title: "Project Overview",
      description:
        "A lightweight expense tracker focused on quick entry, clear information, and a calm mobile experience.",
      image: "/Cash-app.png",
    },

    features: [
      {
        icon: "list",
        title: "Product Discovery",
        description:
          "Easily discover trending products.",
      },
      {
        icon: "devices",
        title: "Cross-Platform",
        description:
          "Available on both Android and iOS using Flutter.",
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "Work together with your team in real-time.",
      },
      {
        icon: "moon",
        title: "Dark Mode",
        description:
          "A beautiful dark theme for comfortable usage.",
      },
    ],

    technologies: [
      { name: "Flutter" },
      { name: "Hive" },
      { name: "Dart" },
    ],
    challenges: [],
    learnings: [],
    results: [],
  },

  {
    slug: "clinic",

    title: "Clinic Management System",

    subtitle: "A comprehensive solution for managing medical practices.",

    description:
      "A modern clinic management system built with Next.js and Tailwind CSS, designed to streamline operations and improve patient care.",

    tags: ["Web App", "NextJS", "Portfolio"],

    cardImage: "/Clinic.png",
    heroImage: "/Clinic.png",

    liveUrl: "https://example.com",

    githubUrl: "https://github.com/yourusername/clinic",

    overview: {
      title: "Project Overview",

      description:
        "A personal portfolio designed to present projects, skills and experience in a simple and elegant way.",

      image: "/Clinic.png",
    },

    features: [
      {
        icon: "list",
        title: "Product Discovery",
        description:
          "Easily discover best clinics.",
      },
      {
        icon: "devices",
        title: "Cross-Platform",
        description:
          "Responsive design for all devices and screen sizes.",
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "see all the doctors and their information in one place.",
      },
      {
        icon: "moon",
        title: "Dark Mode",
        description:
          "A beautiful dark theme for comfortable usage.",
      },
    ],

    technologies: [
      {
        name: "Next.js",
        logo: "/logos/next.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "/logos/tailwind.svg",
      },
      {
        name: "django",
        logo: "/logos/django.svg",
      }
    ],

    challenges: [],

    learnings: [],

    results: [],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}