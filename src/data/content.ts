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
      "CRM de téléprospection que j'ai conçu et développé seul. Un softphone intégré permet aux équipes d'appeler, de qualifier et de suivre leurs prospects au même endroit, vers plus de 200 pays choisis par l'administrateur. Chaque appel est enregistré automatiquement dans le journal, et les données sont hébergées en Europe.",
    technologies: ['React', 'Supabase', 'Vercel'],
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
      "Ce portfolio : mes projets, mes compétences et mon parcours de développeur full stack junior, avec des animations au scroll et une version mobile soignée.",
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
    slug: 'yabisso',
    title: 'YABISSO',
    description:
      "Prototype d'application mobile de marketplace pour les communautés étrangères au Maroc. Une dizaine d'écrans : création de boutique, suivi des clients, panier, commandes, notifications et paiement à la livraison. Conçue et développée seul.",
    technologies: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    githubUrl: 'https://github.com/LucaneTech/Yabisso',
    category: 'Mobile',
    date: 'Juillet 2026',
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
    title: 'Front-end et mobile',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'React Native', 'Expo'],
  },
  {
    title: 'Back-end et API',
    skills: ['Python', 'Django', 'Django REST Framework', 'Django Ninja', 'Celery', 'Node.js', 'Express', 'API REST', 'JWT'],
  },
  { title: 'Données', skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Pandas'] },
  { title: 'Tests et déploiement', skills: ['pytest', 'Docker', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Linux'] },
];

export const otherSkills: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code, title: 'Back-end', desc: 'API REST Django, authentification JWT, tâches de fond avec Celery' },
  { icon: Globe, title: 'Front-end', desc: 'Interfaces React responsives, intégration de maquettes Figma' },
  { icon: Smartphone, title: 'Mobile', desc: 'Applications React Native avec Expo et Supabase' },
  { icon: Zap, title: 'Mise en ligne', desc: 'Déploiement sur Vercel, Netlify et Render, conteneurs Docker' },
];

/** Chiffres réels, alignés sur le CV. */
export const stats = [
  { end: 8, decimals: 0, suffix: '+', label: 'Sites livrés à des clients' },
  { end: 3, decimals: 0, suffix: '', label: 'Stages en entreprise' },
  { end: 2025, decimals: 0, suffix: '', label: 'Début du freelance (Lucane Tech)' },
];

export const experiences = [
  {
    period: 'Janvier 2025 - Aujourd’hui',
    title: 'Développeur Full Stack Freelance',
    company: 'Lucane Tech',
    description:
      'Plus de 8 sites vitrines livrés à des clients du conseil, de l’agrobusiness, de la conciergerie, du marketing et de l’éducation (React, TypeScript, Tailwind CSS, Netlify). Applications internes sur mesure, dont Lucane Filter : outil Django de tri et de filtrage des fichiers de contacts d’un centre d’appels (Docker, Celery, Pandas).',
  },
  {
    period: 'Juillet 2026 - Septembre 2026',
    title: 'Développeur Front-end et E-commerce · Stage',
    company: 'BLAZE & Co',
    description:
      'Intégration de maquettes Figma sur 7 boutiques Shopify et optimisation SEO des fiches produits. Tests A/B de contenus et de landing pages avec Intelligems, analyse des parcours d’achat sur Microsoft Clarity, campagnes e-mail sur Klaviyo.',
  },
  {
    period: 'Avril 2025 - Juillet 2025',
    title: 'Développeur Full Stack · Stage',
    company: 'Web Consulting',
    description:
      'Plateforme de réservation destinée au marché africain, développée en équipe de 5 : authentification JWT, tableau de bord d’administration, paiement mobile via PawaPay. Conception et intégration des API REST en Django ; participation aux tests et aux choix d’architecture.',
  },
  {
    period: 'Avril 2024 - Juillet 2024',
    title: 'Développeur Web · Stage de BTS',
    company: "L'Atelier, centre de formation en langues",
    description:
      'Site web du centre et application interne de gestion des enseignants, des élèves et de l’administration (Django, tests pytest, déploiement sur Render).',
  },
];

export const education = [
  {
    period: '2025 - 2026',
    title: 'Bachelor : Développement Web et Applications Mobiles',
    company: 'EEMCI · École européenne de management et de commerce international',
    description:
      'Formation en développement web et mobile : frameworks modernes, bases de données et déploiement d’applications. Validé en 2026, diplôme remis en janvier 2027.',
  },
  {
    period: '2023 - 2025',
    title: 'BTS : Développement Web et Applications Mobiles',
    company: 'EEMCI · École européenne de management et de commerce international',
    description:
      'Bases du développement web et mobile, avec des projets pratiques, dont un stage chez L’Atelier.',
  },
  {
    period: 'Depuis 2023',
    title: 'Autoformation',
    company: 'Parcours personnel',
    description:
      'En parallèle de l’EEMCI, j’approfondis Django, React, React Native et Tailwind CSS à travers des projets personnels publiés sur GitHub.',
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
  "Après un Bac professionnel technique, j'ai choisi le développement web : un BTS puis un Bachelor en développement web et applications mobiles à l'EEMCI.",
  "Depuis janvier 2025, je travaille aussi en freelance sous le nom Lucane Tech : des sites pour des clients, des outils internes et des applications que je conçois et mets en ligne seul.",
  "Mes stages m'ont appris à travailler en équipe sur une vraie plateforme de réservation, puis à intégrer des boutiques Shopify pensées pour vendre.",
];

export const mission = [
  "Je cherche aujourd'hui un premier poste, en CDI ou en stage pré-embauche, dans une équipe où je pourrai progresser auprès de développeurs plus expérimentés.",
  "Je reste disponible pour des projets freelance : sites vitrines, outils internes et applications web ou mobiles.",
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
  { title: 'Téléphone', value: '+212 7 81 34 36 42', href: 'tel:+212781343642', description: 'Appel ou WhatsApp' },
  { title: 'Localisation', value: 'Meknès, Maroc', href: null, description: 'Disponible en remote' },
  { title: 'Disponibilité', value: 'Lun-Ven, 9h-18h', href: null, description: 'GMT+1' },
];

export const socials = [
  { name: 'GitHub', href: 'https://github.com/LucaneTech', description: 'Mes projets open source' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/franciscomouanda579', description: 'Profil professionnel' },
  { name: 'Instagram', href: 'https://www.instagram.com/lucane.tech/', description: 'Lucane Tech' },
];

export const availability = [
  { label: 'Emploi', value: 'CDI ou stage pré-embauche, disponible immédiatement' },
  { label: 'Projets freelance', value: 'Disponible' },
  { label: 'Réponse', value: 'Sous 24h' },
];

export const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/projects', label: 'Projets' },
  { path: '/about', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
];
