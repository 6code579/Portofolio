import { Code, Globe, Smartphone, Zap, Shield, Users, Clock, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  /** Le site interdit son affichage en iframe (X-Frame-Options) : pas d'aperçu en direct. */
  noEmbed?: boolean;
  category: string;
  date?: string;
}

export const projects: Project[] = [
  {
    slug: 'lucane-crm',
    title: 'Lucane CRM',
    description:
      "Application web CRM de téléprospection qui permet aux équipes d'appeler, qualifier et suivre leurs prospects au même endroit, vers les pays de leur choix, grâce à un softphone intégré. La plateforme propose plus de 200 pays joignables choisis par l'administrateur, un journal d'appels automatique à 100 % et des données hébergées en Europe.",
    technologies: [],
    liveUrl: 'https://lucane-crm.vercel.app/',
    noEmbed: true,
    category: 'Web App',
  },
  {
    slug: 'lucane',
    title: 'Lucane',
    description:
      "Site vitrine de la startup Lucane, une agence tech proposant des services de développement web et de solutions numériques sur mesure. Le site présente l'équipe, les offres et la vision de l'entreprise dans un design moderne reflétant l'identité de la marque.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
    githubUrl: 'https://github.com/LucaneTech/Lucane',
    liveUrl: 'https://lucanetech.netlify.app',
    category: 'Frontend',
    date: 'Octobre 2025',
  },
  {
    slug: 'agrobusiness',
    title: 'Agrobusiness',
    description:
      "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/agrobusiness',
    liveUrl: 'https://www.kfkagrobusiness.com/',
    category: 'Frontend',
    date: 'Mai 2026',
  },
  {
    slug: 'panval',
    title: 'Panval',
    description:
      "Site web de Panval Consilium International, un cabinet de conseil stratégique basé au Congo. La plateforme présente leurs services de conseil en stratégie d'entreprise, de formation professionnelle et d'accompagnement personnalisé (CEP), destinés aux organisations souhaitant renforcer leurs capacités.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/Panval',
    liveUrl: 'https://panvalconsiliuminter.com/',
    category: 'Frontend',
    date: 'Avril 2026',
  },
  {
    slug: 'active-rise',
    title: 'Active Rise',
    description:
      "Site vitrine d'Active Rise, une agence de marketing stratégique accompagnant les entreprises dans leur développement et leur visibilité digitale. Le site met en avant les expertises, les offres de services et les réalisations de l'agence pour aider ses clients à accroître leur croissance commerciale.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/Active_rise',
    liveUrl: 'https://activerise.netlify.app',
    category: 'Frontend',
    date: 'Mai 2026',
  },
  {
    slug: 'hermon',
    title: 'Hermon',
    description:
      "Site web de Hermon Eximia, une plateforme de conciergerie haut de gamme proposant une gamme complète de services premium sur mesure. L'entreprise s'adresse à une clientèle exigeante en quête d'accompagnement personnalisé, alliant excellence, discrétion et qualité de service dans plusieurs domaines d'expertise.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/hermon',
    liveUrl: 'https://hermon-eximia.com/',
    category: 'Frontend',
    date: 'Avril 2026',
  },
  {
    slug: 'folio-francisco',
    title: 'Folio Francisco',
    description:
      "Portfolio professionnel de Francisco Mouanda, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Laravel, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours, à destination d'entreprises à la recherche d'un développeur web expérimenté.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
    githubUrl: 'https://github.com/LucaneTech/Portofolio',
    liveUrl: 'https://franciscomouanda.netlify.app/',
    category: 'Frontend',
    date: 'Avril 2025',
  },
  {
    slug: 'oralise',
    title: 'Oralise',
    description:
      "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/Oralise',
    liveUrl: 'https://oralise.netlify.app/',
    category: 'Frontend',
    date: 'Mai 2026',
  },
  {
    slug: 'trip-manager',
    title: 'Trip Manager',
    description:
      'Application web de réservation et de gestion de voyages touristiques conçue pour simplifier l’organisation des séjours et améliorer l’expérience des voyageurs. La plateforme permet de rechercher des destinations, réserver des circuits et hébergements, gérer les itinéraires, suivre les réservations et centraliser les informations des clients via une interface moderne, fluide et sécurisée avec système d’authentification intégré.',
    technologies: ['Django', 'React TS', 'Tailwindcss', 'JwT', 'Axios'],
    githubUrl: 'https://github.com/LucaneTech/trip_management',
    videoUrl:
      'https://res.cloudinary.com/dvjwcal8e/video/upload/v1779129908/Trip_app_zuwcpj.mp4',
    category: 'Web App',
    date: 'Mai 2026',
  },
  {
    slug: 'kone-shop',
    title: 'Kone Shop',
    description:
      "Landing page e-commerce de Kone Shop, une boutique en ligne proposant une expérience d'achat moderne et intuitive. Le site met en avant les produits phares et les offres de la boutique dans un design épuré et attractif, pensé pour maximiser l'engagement et les conversions.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LucaneTech/Kone-Shop',
    liveUrl: 'https://koneshop.netlify.app',
    category: 'E-commerce',
    date: 'Septembre 2025',
  },
  {
    slug: 'lucane-filter',
    title: 'Lucane Filter',
    description:
      "Application web de filtrage et gestion de contacts développée pour optimiser les opérations des équipes de call center. L'outil permet de trier, filtrer et organiser efficacement des listes de contacts grâce à une interface simple et sécurisée, avec système d'authentification intégré pour protéger l'accès aux données.",
    technologies: ['Full Django', 'Docker', 'Celery', 'Pandas', 'Django-tailwind', 'Pillow'],
    githubUrl: 'https://github.com/LucaneTech/contact_filter2026',
    videoUrl:
      'https://res.cloudinary.com/dvjwcal8e/video/upload/v1779128287/Demo_contactFilter_lwlnyj.mp4',
    category: 'Web App',
    date: 'Mars 2026',
  },
];

/** Projets de la page d'accueil : titres et stacks tels qu'affichés aujourd'hui sur l'accueil. */
export const featuredProjects: Project[] = [
  { ...projects.find((p) => p.slug === 'lucane')!, title: 'Lucane Tech' },
  {
    ...projects.find((p) => p.slug === 'hermon')!,
    technologies: ['React', 'TypeScript', 'React-i18next', 'Tailwind CSS', 'Vite', 'EmailJS'],
  },
  projects.find((p) => p.slug === 'agrobusiness')!,
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'NodeJS', 'Express', 'FastAPI', 'RESTful APIs', 'Supabase'],
  },
  { title: 'Database', skills: ['MySQL', 'MongoDB', 'SQLite', 'Firebase'] },
  { title: 'Tools & DevOps', skills: ['Git', 'Docker', 'Linux', 'VS Code'] },
];

export const otherSkills: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code, title: 'Développement', desc: 'Architecture, Tests, Code Review' },
  { icon: Globe, title: 'Design UX/UI', desc: 'Responsive, Accessibilité, Performance' },
  { icon: Smartphone, title: 'Mobile', desc: 'React Native, PWA, Responsive' },
  { icon: Zap, title: 'DevOps', desc: 'Déploiement, Monitoring, Sécurité' },
];

export const expertise = [
  { skill: 'Frontend', level: 90 },
  { skill: 'Backend', level: 80 },
  { skill: 'Database', level: 70 },
  { skill: 'DevOps', level: 45 },
];

export const stats = [
  { end: 3, decimals: 0, suffix: '+', label: "Années d'expérience" },
  { end: 30, decimals: 0, suffix: '+', label: 'Projets réalisés' },
  { end: 99.99, decimals: 2, suffix: '%', label: 'Clients satisfaits' },
];

export const experiences = [
  {
    period: 'Jan 2025 - Présent',
    title: 'Développeur Full-stack Freelance',
    company: 'Freelance',
    description:
      'Développement de sites web et applications pour divers clients. Gestion complète du cycle de vie des projets, de la conception à la mise en production. Utilisation de technologies modernes telles que React, Django, Laravel et Tailwind CSS pour créer des solutions performantes et adaptées aux besoins des clients.',
  },
  {
    period: 'Juillet 2026 - Septembre 2026',
    title: 'Développeur Frontend & E-commerce : Stagiaire',
    company: 'BLAZE & Co',
    description:
      'Conception de pages dans Figma puis intégration en code sur plusieurs boutiques Shopify.Amélioration de l’UX et des parcours d’achat dans une logique CRO.Contribution aux opérations e-commerce avec Klaviyo, Microsoft Clarity et Intelligems. ',
  },
  {
    period: 'Avril 2025 - Juillet 2025',
    title: 'Stage Développeur Web',
    company: 'WebConsulting',
    description:
      'Développement en équipe d’une plateforme de réservation intégrant l’authentification JWT, un dashboard administratif et paiement. Conception et intégration d’APIs REST sécurisées avec Django. Participation à l’architecture technique, aux tests et à l’amélioration continue des fonctionnalités. ',
  },
  {
    period: 'Avril 2024- Juillet 2024',
    title: 'Développeur Web – Stagiaire',
    company: "L'Atélier",
    description:
      "Réalisation de projets web dans le cadre de ma formation BTS. Développement d'applications avec Python/Django, création d'APIs REST et projets frontend avec React.",
  },
];

export const education = [
  {
    period: '2025 - 2026',
    title: 'Bachelor : Développement Web et Applications Mobiles',
    company: 'EEMCI',
    description:
      'Établissement supérieur privé spécialisé dans les métiers du numérique. Formation approfondie en développement web et mobile, incluant la maîtrise des frameworks modernes, la gestion de bases de données et le déploiement d’applications.',
  },
  {
    period: '2023 - 2025',
    title: 'BTS : Développement Web et Applications Mobiles',
    company: 'EEMCI',
    description:
      "Formation en développement web et applications. Spécialisation en solutions d'infrastructure, systèmes et réseaux. Projets pratiques en développement web.",
  },
  {
    period: 'Après Bac',
    title: 'Formation Autodidacte',
    company: 'Parcours personnel',
    description: `Auto-formation continue en développement web full-stack, en complément de la formation suivie à l'EEMCI. Approfondissement des technologies comme Laravel, Django, React, Tailwind CSS, GitHub et le web scraping (LinkedIn, Facebook). Réalisation de projets personnels et d'expérimentation, avec une forte autonomie dans l'apprentissage, la résolution de problèmes et l'adaptation aux nouvelles technologies.`,
  },
  {
    period: '2022 - 2023',
    title: 'Baccalauréat Professionnel',
    company: 'Lycée Professionnel L.W.S',
    description:
      "Formation scientifique et technique axée sur les disciplines industrielles telles que les mathématiques, la physique appliquée, la mécanique et l'électrotechnique. Elle développe des compétences solides en analyse, en raisonnement logique et en résolution de problèmes techniques.",
  },
];

export const story = [
  "Passionné par la technologie depuis mon plus jeune âge, j'ai découvert le développement web comme une façon de créer et d'innover. Mon parcours m'a conduit à maîtriser les technologies modernes du web.",
  "Aujourd'hui, je combine créativité et expertise technique pour développer des applications web performantes et user-friendly. Chaque projet est une opportunité d'apprendre et de repousser mes limites.",
  "Je crois en l'importance de créer des solutions qui non seulement fonctionnent parfaitement, mais qui offrent également une expérience utilisateur exceptionnelle.",
];

export const mission = [
  "Transformer vos idées en applications web robustes et élégantes. Je m'engage à livrer des solutions qui dépassent vos attentes tout en respectant les meilleures pratiques du développement.",
  "Mon approche combine innovation technique et design centré utilisateur pour créer des expériences digitales mémorables et efficaces.",
];

export const values: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: 'Performance', desc: 'Code optimisé et applications rapides' },
  { icon: Shield, title: 'Sécurité', desc: 'Protection des données et bonnes pratiques' },
  { icon: Users, title: 'Collaboration', desc: "Travail d'équipe et communication claire" },
  { icon: Clock, title: 'Ponctualité', desc: 'Respect des délais et livraisons à temps' },
];

export const approach: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code, title: 'Développement Agile', desc: 'Méthodologie itérative et adaptative' },
  { icon: Database, title: 'Architecture Solide', desc: 'Code maintenable et évolutif' },
  { icon: Globe, title: 'Responsive Design', desc: 'Compatible tous appareils' },
  { icon: Smartphone, title: 'UX/UI Optimisée', desc: 'Expérience utilisateur intuitive' },
];

export const contactInfo = [
  { title: 'Email', value: 'profrancisco579@gmail.com', href: 'mailto:profrancisco579@gmail.com', description: 'Réponse rapide garantie' },
  { title: 'Téléphone', value: '+212 0781343642', href: 'tel:+2120781343642', description: 'Appel ou WhatsApp' },
  { title: 'Localisation', value: 'Meknès, Maroc', href: null, description: 'Disponible en remote' },
  { title: 'Disponibilité', value: 'Lun-Ven, 9h-18h', href: null, description: 'GMT+1' },
];

export const socials = [
  { name: 'GitHub', href: 'https://github.com/LucaneTech', description: 'Mes projets open source' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/franciscomouanda579', description: 'Profil professionnel' },
  { name: 'Instagram', href: 'https://www.instagram.com/lucane.tech/', description: 'Contact personnel' },
];

export const availability = [
  { label: 'Projets freelance', value: 'Disponible' },
  { label: 'Collaboration', value: 'Ouvert aux opportunités' },
  { label: 'Réponse', value: 'Sous 24h' },
];

export const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/projects', label: 'Projets' },
  { path: '/about', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
];
