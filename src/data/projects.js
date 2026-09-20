/**
 * Source unique de vérité pour tous les projets du portfolio.
 * Ajouter un projet = ajouter un objet ici. Aucun composant à modifier.
 *
 * Schéma :
 * {
 *   id, slug, title, category,
 *   shortDescription,   // pour la carte
 *   fullDescription,    // pour une future page dédiée /projects/slug
 *   technologies: [],
 *   coverImage,          // chemin dans /public/projects/<slug>/cover.jpg
 *   github, demo,        // null si non disponible
 *   featured,
 * }
 */
export const projects = [
  {
    id: 1,
    slug: 'easycar-location',
    title: 'EasyCar Location',
    category: 'Mobile',
    shortDescription:
      "Application mobile Flutter de gestion de location de voitures, pensée pour le marché d'Afrique centrale (FCFA).",
    fullDescription:
      "EasyCar Location est une application mobile développée avec Flutter, orientée vers une expérience utilisateur soignée en Material Design 3. Elle gère la location de voitures avec des données locales (mock) et une architecture basée sur Provider pour la gestion d'état.",
    technologies: ['Flutter', 'Dart', 'Material Design 3', 'Provider'],
    coverImage: '/projects/easycar-location/cover.jpg',
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 2,
    slug: 'saint-esprit',
    title: 'Saint Esprit',
    category: 'Web',
    shortDescription:
      'Plateforme full-stack de gestion scolaire avec temps réel, sécurité renforcée et interface glassmorphism.',
    fullDescription:
      "Saint Esprit est une application web ambitieuse de gestion d'établissement scolaire. Frontend en React/Vite/Tailwind avec shadcn/ui, backend NestJS, base de données PostgreSQL via Prisma, fonctionnalités temps réel avec Socket.io, et un ensemble de mesures de sécurité (reCAPTCHA v3, bcrypt, rate limiting, protection IDOR).",
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.io'],
    coverImage: '/projects/saint-esprit/cover.jpg',
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 3,
    slug: 'velox-drive',
    title: 'Velox Drive',
    category: 'Web',
    shortDescription: 'Site web de location de voitures, développé avec React et Vite.',
    fullDescription:
      'Velox Drive est un site web permettant la location de voitures, construit avec React et Vite.',
    technologies: ['React', 'Vite'],
    coverImage: '/projects/velox-drive/cover.jpg',
    github: 'https://github.com/MPAGA756/velox-drive',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    slug: 'luxurycar',
    title: 'LuxuryCar',
    category: 'Web',
    shortDescription: 'Prototype de site web pour un concessionnaire automobile.',
    fullDescription:
      'LuxuryCar est un prototype de site web pensé pour un concessionnaire de voitures, développé avec React et Vite.',
    technologies: ['React', 'Vite'],
    coverImage: '/projects/luxurycar/cover.jpg',
    github: 'https://github.com/MPAGA756/luxurycar',
    demo: null,
    featured: false,
  },
  {
    id: 5,
    slug: 'highwayrush',
    title: 'HighwayRush',
    category: 'Game',
    shortDescription: 'Jeu de course développé sous Unity 6.',
    fullDescription:
      'HighwayRush est un projet de jeu vidéo de course développé avec Unity 6.',
    technologies: ['Unity', 'C#'],
    coverImage: '/projects/highwayrush/cover.jpg',
    github: null,
    demo: null,
    featured: false,
  },
]