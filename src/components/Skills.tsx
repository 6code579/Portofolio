import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Material UI']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: ['Python', 'Django', 'NodeJS', 'Express', 'FastAPI', 'RESTful APIs']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: ['MySQL', 'MongoDB', 'SQLite', 'Firebase']
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      skills: ['Git', 'Docker', 'Linux', 'VS Code']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Compétences <span className="text-blue-700 dark:text-blue-400">Techniques</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Une expertise technique complète pour développer des solutions web
            de bout en bout, de la conception à la mise en production.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className={`p-6 ${category.bgColor} border-b ${category.borderColor}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-md flex items-center justify-center border ${category.borderColor}`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div variants={cardVariants} className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              Autres Compétences
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Développement</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Architecture, Tests, Code Review</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Design UX/UI</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Responsive, Accessibilité, Performance</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Mobile</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">React Native, PWA, Responsive</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-md flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">DevOps</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Déploiement, Monitoring, Sécurité</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div variants={cardVariants} className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
              Niveau d'Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { skill: 'Frontend', level: 90, color: 'bg-blue-500' },
                { skill: 'Backend', level: 80, color: 'bg-green-500' },
                { skill: 'Database', level: 70, color: 'bg-purple-500' },
                { skill: 'DevOps', level: 45, color: 'bg-orange-500' }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.skill}</span>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-md h-2">
                    <motion.div
                      className={`h-2 rounded-md ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
