import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Download, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const CallToAction: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

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
            
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">3+</div>
              <div className="text-blue-100">Années d'expérience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">30+</div>
              <div className="text-blue-100">Projets réalisés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">99.99%</div>
              <div className="text-blue-100">Clients satisfaits</div>
            </div>
          </motion.div>
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

export default CallToAction;