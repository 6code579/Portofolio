import React from 'react';
import { motion } from 'framer-motion';
import { Code, Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl"
        >
          <Code className="w-full h-full text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-slate-800 dark:text-white mb-4"
        >
          Chargement...
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-48 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
        />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mt-4"
        >
          <Loader className="w-6 h-6 text-blue-600 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;