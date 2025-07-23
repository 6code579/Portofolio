import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Triple Spinner concentrique */}
        <div className="relative w-24 h-24">
          {/* Cercle externe */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-700 animate-spin"></div>
          {/* Cercle intermédiaire */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-spin-slow"></div>
          {/* Cercle interne */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-400 animate-spin-reverse-slower"></div>
        </div>

        {/* Texte animé */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          Chargement en cours...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
