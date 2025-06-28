import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Shield, Users, Target, Award, Clock, Heart, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "React", level: 75, color: "from-cyan-500 to-blue-500" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-500 to-cyan-500" },
        { name: "TypeScript", level: 70, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Python", level: 85, color: "from-blue-600 to-yellow-500" },
        { name: "Django", level: 80, color: "from-green-600 to-green-800" },
        { name: "PHP", level: 75, color: "from-purple-600 to-blue-600" },
        { name: "MySQL", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "PostgreSQL", level: 70, color: "from-blue-600 to-indigo-600" },
        { name: "REST APIs", level: 85, color: "from-green-500 to-teal-500" }
      ]
    },
    {
      category: "Outils & DevOps",
      icon: Zap,
      skills: [
        { name: "Git", level: 85, color: "from-orange-600 to-red-600" },
        { name: "GitHub", level: 80, color: "from-gray-700 to-gray-900" },
        { name: "Docker", level: 65, color: "from-blue-500 to-blue-700" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-purple-500" },
        { name: "Postman", level: 75, color: "from-orange-500 to-red-500" },
        { name: "Figma", level: 60, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  const softSkills = [
    { name: "Résolution de problèmes", level: 90, icon: Target },
    { name: "Travail d'équipe", level: 85, icon: Users },
    { name: "Communication", level: 80, icon: Heart },
    { name: "Adaptabilité", level: 85, icon: Lightbulb },
    { name: "Gestion du temps", level: 75, icon: Clock },
    { name: "Apprentissage continu", level: 90, icon: Award }
  ];

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
            Compétences <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Techniques</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Un aperçu de mes compétences techniques et de mon expertise dans le développement web
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4"
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                    {category.category}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 sm:h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div variants={itemVariants}>
          <motion.h2
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white text-center mb-8 sm:mb-12"
          >
            Compétences <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Transversales</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mr-3"
                  >
                    <skill.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Niveau d'expertise
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 