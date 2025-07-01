import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Shield, Users, Target, Award, Clock, Heart, Lightbulb } from 'lucide-react';
import Portrait from '../images/portrait.png'

const About: React.FC = () => {
  const experiences = [
    {
      period: 'Mai 2025 - Présent',
      title: 'Développeur Web',
      company: 'Freelance',
      description: 'Développement de sites web et applications pour des clients locaux. Création de portfolios, sites vitrines et applications web simples avec HTML, CSS, JavaScript et PHP.'
    },
    {
      period: 'Mars 2025 - Mai 2025',
      title: 'Stage Développeur Web',
      company: 'WebConsulting',
      description: 'Stage de 2 mois en développement web. Participation au développement frontend, intégration de maquettes et maintenance de sites existants. Utilisation de Bootstrap et JavaScript.'
    },
    {
      period: 'Avril 2024- Mai 2024',
      title: 'Développeur Web – Stagiaire',
      company: "L'Atélier",
      description: 'Réalisation de projets web dans le cadre de ma formation BTS. Développement d\'applications avec PHP/MySQL, création d\'APIs REST et projets frontend avec React.'
    }
  ];

  const education = [
    {
      period: '2023 - 2025',
      title: 'BTS Développement Informatique',
      school: 'EEMCI',
      description: 'Formation en développement web et applications. Spécialisation en solutions d\'infrastructure, systèmes et réseaux. Projets pratiques en développement web.'
    },
    {
      period: '2022 - Présent',
      title: 'Développeur Web Autodidacte',
      school: 'Parcours personnel',
      description: `Auto-formation continue en développement web full-stack, en complément de la formation suivie à l'EEMCI. Approfondissement des technologies comme Laravel, Django, React, Tailwind CSS, GitHub et le web scraping (LinkedIn, Facebook). Réalisation de projets personnels et d'expérimentation, avec une forte autonomie dans l'apprentissage, la résolution de problèmes et l'adaptation aux nouvelles technologies.`
    }
    ,
    {
      period: '2022 - 2023',
      title: 'Baccalauréat Professionnel',
      school: 'Lycée Professionnel L.W.S',
      description: 'Formation scientifique et technique axée sur les disciplines industrielles telles que les mathématiques, la physique appliquée, la mécanique et l’électrotechnique. Elle développe des compétences solides en analyse, en raisonnement logique et en résolution de problèmes techniques.'
    }
  ];

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
  const particles = Array.from({ length: 15 }, (_, i) => i);

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
        {Array.from({ length: 10 }, (_, i) => (
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
            À <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Propos</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Découvrez mon parcours, mes compétences et ma passion pour le développement web
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4"
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                  Mon Histoire
                </h2>
              </div>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Passionné par la technologie depuis mon plus jeune âge, j'ai découvert le développement web 
                  comme une façon de créer et d'innover. Mon parcours m'a conduit à maîtriser les technologies 
                  modernes du web.
                </p>
                <p>
                  Aujourd'hui, je combine créativité et expertise technique pour développer des applications 
                  web performantes et user-friendly. Chaque projet est une opportunité d'apprendre et de 
                  repousser mes limites.
                </p>
                <p>
                  Je crois en l'importance de créer des solutions qui non seulement fonctionnent parfaitement, 
                  mais qui offrent également une expérience utilisateur exceptionnelle.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mr-4"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                  Ma Mission
                </h2>
              </div>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Transformer vos idées en applications web robustes et élégantes. Je m'engage à livrer 
                  des solutions qui dépassent vos attentes tout en respectant les meilleures pratiques 
                  du développement.
                </p>
                <p>
                  Mon approche combine innovation technique et design centré utilisateur pour créer des 
                  expériences digitales mémorables et efficaces.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Values & Approach */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mr-4"
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                  Mes Valeurs
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Performance", desc: "Code optimisé et applications rapides" },
                  { icon: Shield, title: "Sécurité", desc: "Protection des données et bonnes pratiques" },
                  { icon: Users, title: "Collaboration", desc: "Travail d'équipe et communication claire" },
                  { icon: Clock, title: "Ponctualité", desc: "Respect des délais et livraisons à temps" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex-shrink-0">
                      <value.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{value.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl mr-4"
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                  Mon Approche
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Code, title: "Développement Agile", desc: "Méthodologie itérative et adaptative" },
                  { icon: Database, title: "Architecture Solide", desc: "Code maintenable et évolutif" },
                  { icon: Globe, title: "Responsive Design", desc: "Compatible tous appareils" },
                  { icon: Smartphone, title: "UX/UI Optimisée", desc: "Expérience utilisateur intuitive" }
                ].map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                  >
                    <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                      <approach.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 dark:text-white">{approach.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{approach.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Code className="w-6 h-6 text-blue-800 mr-3" />
              Expérience Professionnelle
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-100 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-800 rounded-full"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-blue-800 bg-blue-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800">{exp.title}</h4>
                    <p className="text-slate-600 font-medium">{exp.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Code className="w-6 h-6 text-blue-800 mr-3" />
              Formation
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-green-100 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800">{edu.title}</h4>
                    <p className="text-slate-600 font-medium">{edu.school}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;