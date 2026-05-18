import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';


const FeaturedProjects: React.FC = () => {
  const projects = [
     {
      id: 1,
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
      id: 2,
      title: 'Panval',
      description: "Site web de Panval Consilium International, un cabinet de conseil stratégique basé au Congo. La plateforme présente leurs services de conseil en stratégie d'entreprise, de formation professionnelle et d'accompagnement personnalisé (CEP), destinés aux organisations souhaitant renforcer leurs capacités.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Daisyui', 'React-i18next', 'Vite', 'EmailJS'],
      githubUrl: 'https://github.com/LucaneTech/Panval',
      liveUrl: 'https://panvalconsiliuminter.com/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2026',
      bgColor: '',
    },
    {
      id: 3,
      title: 'Hermon',
      description: "Site web de Hermon Eximia, une plateforme de conciergerie haut de gamme proposant une gamme complète de services premium sur mesure. L'entreprise s'adresse à une clientèle exigeante en quête d'accompagnement personnalisé, alliant excellence, discrétion et qualité de service dans plusieurs domaines d'expertise.",
      image: '',
      technologies: ['React', 'TypeScript', 'React-i18next', 'Tailwind CSS', 'Vite', 'EmailJS'],
      githubUrl: 'https://github.com/LucaneTech/hermon',
      liveUrl: 'https://hermon-eximia.com/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2026',
      bgColor: '',
    },
  ];

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
    <section id="featured-projects" className="py-20 bg-white dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Projets <span className="text-blue-700 dark:text-blue-400">Récents</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
            className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors duration-150"
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
