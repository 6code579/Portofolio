import React from 'react';
import { Github, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/6code579',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/franciscomouanda579',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/profile.php?id=61574184786834',
      icon: Facebook,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:profrancisco579@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ];

  // Animation variants
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
    <footer className="bg-slate-900 text-white py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:shadow-lg transition-all duration-300"
              >
                <span className='text-white font-bold md:text-2xl '>Francisco</span>
              </motion.div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Mouanda
              </motion.span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Développeur web passionné par la création de solutions web modernes et performantes.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">profrancisco579@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">Meknès, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">+212 0781343642</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-slate-400 hover:text-white transition-colors">
                Accueil
              </a>
              <a href="/projects" className="block text-slate-400 hover:text-white transition-colors">
                Projets
              </a>
              <a href="/about" className="block text-slate-400 hover:text-white transition-colors">
                À propos
              </a>
              <a href="/contact" className="block text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800 rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-700 ${social.color} hover:scale-105`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"
        >
          <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;