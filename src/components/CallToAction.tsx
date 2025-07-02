import React from 'react';
import { ArrowRight, MessageCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const CallToAction: React.FC = () => {
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

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prêt à donner vie à votre
            <br />
            <span className="text-green-400">projet web ?</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Collaborons ensemble pour créer une solution sur mesure 
            qui répond parfaitement à vos besoins et dépasse vos attentes.
          </motion.p>

          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="/monCv.pdf" 
              download
              className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">3+</div>
              <div className="text-blue-100">Années d'expérience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">20+</div>
              <div className="text-blue-100">Projets réalisés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-blue-100">Clients satisfaits</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;