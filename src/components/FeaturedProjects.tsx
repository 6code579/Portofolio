import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import edusco from '../images/projects/edusco.svg';
import ecommerce from '../images/projects/ecommerce.svg';
import apiRest from '../images/projects/api-rest.svg';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs.',
      image: edusco,
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'Chart.js','Jwt'],
      githubUrl: 'https://github.com/francisco-mouanda/edusco-platform',
      liveUrl: 'https://edusco-demo.herokuapp.com',
      featured: true,
      date: 'Avril 2025',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 2,
      title: 'E-commerce Laravel',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes et des utilisateurs.',
      image: ecommerce,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/francisco-mouanda/laravel-ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      date: 'Decembre 2024',
      bgColor: 'bg-amber-100'
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
      date: 'Janvier 2025',
      bgColor: 'bg-emerald-100'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="featured-projects" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Projets <span className="text-blue-800">Récents</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes derniers projets, alliant innovation technique 
            et design moderne pour créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <a 
            href="/projects" 
            className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <span>Voir tous les projets</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;