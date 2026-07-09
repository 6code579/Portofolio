import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Sparkles, Instagram, X } from 'lucide-react';
import Portrait from '../images/francisco.png';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

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

  // Particules animées
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
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
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-sm"
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
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-400/10 dark:to-blue-400/10 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 rounded-full blur-sm"
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
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />

        <motion.div
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
        />

        {/* Grille de points */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
              style={{
                left: `${(i + 1) * 12.5}%`,
                top: `${(i + 1) * 12.5}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

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

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 dark:from-green-300/10 dark:to-blue-300/10 rounded-full blur-3xl"
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
          className="absolute top-20 right-10 w-8 h-8 border-2 border-blue-400/30 dark:border-blue-300/30 rounded-lg"
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
          className="absolute bottom-20 right-20 w-6 h-6 border-2 border-purple-400/30 dark:border-purple-300/30 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-10 w-4 h-4 bg-gradient-to-br from-green-400/40 to-blue-400/40 dark:from-green-300/40 dark:to-blue-300/40 rounded-sm"
        />

        {/* Effet de parallaxe sur les étoiles */}
        {Array.from({ length: 15 }, (_, i) => (
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

        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 200 300 Q 400 200 600 300 T 1000 300"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
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
              <div className="relative w-48 md:w-64 h-auto mt-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-slate-700 dark:to-slate-600">
                <img
                  src={Portrait}
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
              Fullstack
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
            Spécialisé en Django, React, Python et JavaScript. Je transforme vos idées en applications web robustes et élégantes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCvModalOpen(true)}
              className="px-8 py-4 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </motion.button>


            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}

              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Link to="/contact" > <span>Me contacter</span></Link>



            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/LucaneTech", color: "hover:text-slate-800 dark:hover:text-gray-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/franciscomouanda579", color: "hover:text-blue-600" },
              { icon: Instagram, href: "https://www.instagram.com/lucane.tech/", color: "hover:text-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white border border-gray-300 dark:border-slate-700/40 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-300 `}
              >
                <social.icon className={`w-6 h-6 duration-300 ${social.color}`} />
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
      {isCvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCvModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-xl p-6 w-full max-w-sm z-10"
          >
            <button
              onClick={() => setIsCvModalOpen(false)}
              className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-700 rounded-md">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Mon CV
              </h3>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Quelle version souhaitez-vous télécharger ?
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="/cv.pdf"
                download
                onClick={() => setIsCvModalOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors duration-150"
              >
                <Download className="w-4 h-4" />
                Version Simple
              </a>
              <a
                href="/Cv_details.pdf"
                download
                onClick={() => setIsCvModalOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold rounded-md transition-colors duration-150"
              >
                <Download className="w-4 h-4" />
                Version Détaillée
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;