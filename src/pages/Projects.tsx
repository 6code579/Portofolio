import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import edusco from '../images/projects/edusco.svg';
import ecommerce from '../images/projects/ecommerce.svg';
import apiRest from '../images/projects/api-rest.svg';
import portfolio from '../images/projects/portfolio.svg';
import blog from '../images/projects/blog.svg';
import finances from '../images/projects/finances.svg';
import weather from '../images/projects/weather-app.svg';
import taskManager from '../images/projects/task-manager.svg';
import calculator from '../images/projects/calculator.svg';
import edconnect from '../images/projects/edconnect.svg';

const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Particules animées
  const particles = Array.from({ length: 12 }, (_, i) => i);

  const projects = [
    {
      id: 1,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs et tableau de bord analytique.',
      image: edusco,
      technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Chart.js'],
      githubUrl: 'https://github.com/francisco-mouanda/edusco-platform',
      liveUrl: 'https://edusco-demo.herokuapp.com',
      featured: true,
      category: 'Web App',
      date: 'Avril 2025',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'E-commerce Laravel',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes, des utilisateurs et tableau de bord analytique.',
      image: ecommerce,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/francisco-mouanda/laravel-ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      category: 'E-commerce',
      date: 'Decembre 2024',
      bgColor: 'bg-pink-50'
    },
    {
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker. Endpoints pour gestion d\'utilisateurs et de données.',
      image: apiRest,
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/francisco-mouanda/fastapi-mobile-api',
      liveUrl: 'https://api-docs.swagger.io',
      featured: true,
      category: 'API',
      date: 'Janvier 2025',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Portfolio React',
      description: 'Site portfolio moderne et responsive développé avec React et Tailwind CSS, intégrant animations fluides, optimisation SEO et design adaptatif. Présentation professionnelle de mes compétences et projets.',
      image: portfolio,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      githubUrl: 'https://github.com/francisco-mouanda/portfolio-react',
      liveUrl: 'https://francisco-mouanda.dev',
      category: 'Frontend',
      date: 'Juin 2025',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 5,
      title: 'Système de Blog CMS',
      description: 'CMS personnalisé avec éditeur rich-text, gestion des médias, commentaires modérés et optimisation pour les moteurs de recherche. Interface d\'administration intuitive et système de catégories.',
      image: blog,
      technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'CKEditor'],
      githubUrl: 'https://github.com/francisco-mouanda/django-blog-cms',
      liveUrl: 'https://blog-demo.herokuapp.com',
      category: 'CMS',
      date: 'Août 2024',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 6,
      title: 'App Mobile Finances',
      description: 'Application de gestion financière personnelle avec synchronisation cloud, graphiques interactifs et notifications intelligentes. Suivi des dépenses, budgets et objectifs financiers.',
      image: finances,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubUrl: 'https://github.com/francisco-mouanda/finance-tracker-app',
      category: 'Mobile',
      date: 'Septembre 2024',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 7,
      title: 'Application Météo',
      description: 'Application météo moderne avec prévisions sur 7 jours, géolocalisation et interface intuitive. Intégration de l\'API OpenWeatherMap et design responsive.',
      image: weather,
      technologies: ['React', 'JavaScript', 'OpenWeatherMap API', 'CSS3', 'Geolocation'],
      githubUrl: 'https://github.com/francisco-mouanda/weather-app-react',
      liveUrl: 'https://weather-app-demo.netlify.app',
      category: 'Web App',
      date: 'Fevrier 2025',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 8,
      title: 'Gestionnaire de Tâches',
      description: 'Application de gestion de tâches avec drag & drop, catégories, priorités et rappels. Interface moderne et fonctionnalités avancées de productivité.',
      image: taskManager,
      technologies: ['Vue.js', 'JavaScript', 'LocalStorage', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com/francisco-mouanda/task-manager-vue',
      liveUrl: 'https://task-manager-demo.netlify.app',
      category: 'Web App',
      date: 'Octobre 2024',
      bgColor: 'bg-purple-50'
    },
    {
      id: 9,
      title: 'Calculatrice Scientifique',
      description: 'Calculatrice scientifique complète avec fonctions trigonométriques, logarithmes et conversions d\'unités. Interface moderne et calculs précis.',
      image: calculator,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Math.js'],
      githubUrl: 'https://github.com/francisco-mouanda/scientific-calculator',
      liveUrl: 'https://calculator-demo.netlify.app',
      category: 'Frontend',
      date: 'Juillet 2024',
      bgColor: 'bg-orange-50'
    },
    {
      id: 10,
      title: 'EdConnect - Site Éducatif',
      description: 'Site interactif et moderne d\'un établissement scolaire au Congo Brazzaville. Plateforme éducative complète avec gestion des étudiants, cours, professeurs et interface responsive.',
      image: edconnect,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/francisco-mouanda/edconnect-school',
      liveUrl: 'https://edconnect-demo.netlify.app',
      category: 'Web App',
      date: 'Mars 2025',
      bgColor: 'bg-lime-50'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particules flottantes */}
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Formes géométriques animées */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-400/10 dark:to-blue-400/10 rounded-full blur-sm"
        />

        {/* Lignes animées */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />

        {/* Ondes de fond */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-300/10 dark:to-purple-300/10 rounded-full blur-3xl"
        />

        {/* Formes géométriques flottantes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-10 w-8 h-8 border-2 border-blue-400/30 dark:border-blue-300/30 rounded-lg"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-40 right-20 w-6 h-6 border-2 border-purple-400/30 dark:border-purple-300/30 rounded-full"
        />

        {/* Effet de parallaxe sur les étoiles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/60 dark:bg-blue-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6"
          >
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projets</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Découvrez une sélection de mes réalisations en développement web
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full sm:w-80"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Tous les projets' : category}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Aucun projet trouvé avec ces critères.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;