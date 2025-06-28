import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Youtube, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('featured-projects');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-green-500/10 dark:bg-green-400/10 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/10 dark:bg-purple-400/10 rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full opacity-20 blur-lg"
              />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-slate-700 dark:to-slate-600">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Portrait professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-lg"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight"
          >
            Développeur
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-300% mt-2"
            >
              Full-Stack
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
          >
            Passionné par la création de solutions web
            <br />
            <span className="font-semibold text-blue-800 dark:text-blue-400">performantes et modernes</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Spécialisé en Django, Laravel, Python et JavaScript. Je transforme vos idées en applications web robustes et élégantes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger CV</span>
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Me contacter</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-slate-800 dark:hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" },
              { icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-300 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToNext}
            className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;