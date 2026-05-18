import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';


const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const projects = [
    {
      id: 2,
      title: 'Lucane',
      description: "Site vitrine de la startup Lucane, une agence tech proposant des services de développement web et de solutions numériques sur mesure. Le site présente l'équipe, les offres et la vision de l'entreprise dans un design moderne reflétant l'identité de la marque.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
      githubUrl: 'https://github.com/LucaneTech/Lucane',
      liveUrl: 'https://lucane.tech',
      featured: false,
      category: 'Frontend',
      date: 'Octobre 2025',
      bgColor: '',
    },

    {
      id: 16,
      title: 'Agrobusiness',
      description: "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/agrobusiness',
      liveUrl: 'https://www.kfkagrobusiness.com/',
      featured: false,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },
    {
      id: 12,
      title: 'Panval',
      description: "Site web de Panval Consilium International, un cabinet de conseil stratégique basé au Congo. La plateforme présente leurs services de conseil en stratégie d'entreprise, de formation professionnelle et d'accompagnement personnalisé (CEP), destinés aux organisations souhaitant renforcer leurs capacités.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Panval',
      liveUrl: 'https://panvalconsiliuminter.com/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2026',
      bgColor: '',
    },
    {
      id: 15,
      title: 'Active Rise',
      description: "Site vitrine d'Active Rise, une agence de marketing stratégique accompagnant les entreprises dans leur développement et leur visibilité digitale. Le site met en avant les expertises, les offres de services et les réalisations de l'agence pour aider ses clients à accroître leur croissance commerciale.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Active_rise',
      liveUrl: 'https://activerise.netlify.app',
      featured: false,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },
    {
      id: 13,
      title: 'Hermon',
      description: "Site web de Hermon Eximia, une plateforme de conciergerie haut de gamme proposant une gamme complète de services premium sur mesure. L'entreprise s'adresse à une clientèle exigeante en quête d'accompagnement personnalisé, alliant excellence, discrétion et qualité de service dans plusieurs domaines d'expertise.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/hermon',
      liveUrl: 'https://hermon-eximia.com/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2026',
      bgColor: '',
    },
    {
      id: 14,
      title: 'Folio Francisco',
      description: "Portfolio professionnel de Francisco Mouanda, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Laravel, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours, à destination d'entreprises à la recherche d'un développeur web expérimenté.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
      githubUrl: 'https://github.com/LucaneTech/Portofolio',
      liveUrl: 'https://francisco.lucane.tech/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2025',
      bgColor: '',
    },
    {
      id: 17,
      title: 'Oralise',
      description: "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Oralise',
      liveUrl: 'https://oralise.pro/',
      featured: false,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },
    {
      id: 20,
      title: 'Trip Manager',
      description: "Application web de réservation et de gestion de voyages touristiques conçue pour simplifier l’organisation des séjours et améliorer l’expérience des voyageurs. La plateforme permet de rechercher des destinations, réserver des circuits et hébergements, gérer les itinéraires, suivre les réservations et centraliser les informations des clients via une interface moderne, fluide et sécurisée avec système d’authentification intégré.",
      image: '#',
      technologies: ['Django', 'React TS', 'Tailwindcss','JwT', 'Axios'],
      githubUrl: 'https://github.com/LucaneTech/trip_management',
      // liveUrl: 'https://contact-filter.up.railway.app/',
      videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779129908/Trip_app_zuwcpj.mp4",
      featured: false,
      category: 'Web App',
      date: 'Mai 2026',
      bgColor: 'bg-white',
    },
    {
      id: 1,
      title: 'Kone Shop',
      description: "Landing page e-commerce de Kone Shop, une boutique en ligne proposant une expérience d'achat moderne et intuitive. Le site met en avant les produits phares et les offres de la boutique dans un design épuré et attractif, pensé pour maximiser l'engagement et les conversions.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Kone-Shop',
      liveUrl: 'https://koneshop.online',
      featured: false,
      category: 'E-commerce',
      date: 'Septembre 2025',
      bgColor: '',
    },
    {
      id: 11,
      title: 'Lucane Filter',
      description: "Application web de filtrage et gestion de contacts développée pour optimiser les opérations des équipes de call center. L'outil permet de trier, filtrer et organiser efficacement des listes de contacts grâce à une interface simple et sécurisée, avec système d'authentification intégré pour protéger l'accès aux données.",
      image: '#',
      technologies: ['Full Django', 'Docker', 'Celery', 'Pandas', 'Django-tailwind', 'Pillow'],
      githubUrl: 'https://github.com/LucaneTech/contact_filter2026',
      // liveUrl: 'https://contact-filter.up.railway.app/',
      videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779128287/Demo_contactFilter_lwlnyj.mp4",
      featured: false,
      category: 'Web App',
      date: 'Mars 2026',
      bgColor: 'bg-white',
    },

    {
      id: 10,
      title: 'Eureka',
      description: "Site vitrine d'Eureka & Co, une entreprise spécialisée dans les services de nettoyage et d'entretien. La plateforme présente les prestations proposées et les secteurs d'intervention dans un design moderne et professionnel, reflétant le sérieux et le savoir-faire de l'équipe.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Eureka',
      liveUrl: 'https://eureka-co.net',
      featured: false,
      category: 'Frontend',
      date: 'Février 2026',
      bgColor: '',
    },



  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Mes <span className="text-blue-600 dark:text-blue-400">Projets</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Découvrez une sélection de mes réalisations en développement web
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 border border-slate-200 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Tous les projets' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-500 dark:text-slate-400">
              Aucun projet trouvé avec ces critères.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
