import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
   
      // Envoi via fetch pour une meilleure UX
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // La redirection a été supprimée pour améliorer l'expérience utilisateur.
        // Le message de succès est déjà affiché dans le composant.
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000); // Cache le message de succès après 5 secondes
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Contacter</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Vous avez un projet en tête ? Une question technique ? 
            N'hésitez pas à me contacter, je serais ravi de discuter avec vous !
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { 
                    icon: Mail, 
                    title: "Email", 
                    value: "profrancisco579@gmail.com", 
                    href: "mailto:profrancisco579@gmail.com", 
                    color: "blue",
                    description: "Réponse rapide garantie"
                  },
                  { 
                    icon: Phone, 
                    title: "Téléphone", 
                    value: "+212 0781343642", 
                    href: "tel:+2120781343642", 
                    color: "green",
                    description: "Appel ou WhatsApp"
                  },
                  { 
                    icon: MapPin, 
                    title: "Localisation", 
                    value: "Meknès, Maroc", 
                    href: null, 
                    color: "purple",
                    description: "Disponible en remote"
                  },
                  { 
                    icon: Clock, 
                    title: "Disponibilité", 
                    value: "Lun-Ven, 9h-18h", 
                    href: null, 
                    color: "orange",
                    description: "GMT+1"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className={`p-2 sm:p-3 bg-${contact.color}-50 dark:bg-${contact.color}-900/30 rounded-xl flex-shrink-0`}>
                      <contact.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${contact.color}-600 dark:text-${contact.color}-400`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-1 text-sm sm:text-base">{contact.title}</h4>
                      {contact.href ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={contact.href}
                          className={`text-slate-600 dark:text-slate-300 hover:text-${contact.color}-600 dark:hover:text-${contact.color}-400 transition-colors text-sm sm:text-base break-all`}
                        >
                          {contact.value}
                        </motion.a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">{contact.value}</p>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-6">
                Réseaux Sociaux
              </h3>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {[
                  { 
                    icon: Github, 
                    name: "GitHub", 
                    href: "https://github.com/6code579", 
                    color: "slate",
                    description: "Mes projets open source"
                  },
                  { 
                    icon: Linkedin, 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/in/franciscomouanda579", 
                    color: "blue",
                    description: "Profil professionnel"
                  },
                  { 
                    icon: Facebook, 
                    name: "Facebook", 
                    href: "https://web.facebook.com/profile.php?id=61574184786834", 
                    color: "green",
                    description: "Contact personnel"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 sm:p-4 bg-${social.color}-50 dark:bg-${social.color}-900/20 rounded-xl hover:bg-${social.color}-100 dark:hover:bg-${social.color}-900/30 transition-all duration-300 group`}
                  >
                    <social.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${social.color}-600 dark:text-${social.color}-400 group-hover:scale-110 transition-transform flex-shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <span className={`font-medium text-${social.color}-600 dark:text-${social.color}-400 text-sm sm:text-base`}>{social.name}</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                  Disponibilité
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Projets freelance :</span> Disponible
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Collaboration :</span> Ouvert aux opportunités
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Réponse :</span> Sous 24h
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-3"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  Envoyez-moi un message
                </h3>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-green-700 dark:text-green-300 text-sm sm:text-base">
                    Message envoyé avec succès ! Redirection en cours...
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300 text-sm sm:text-base">Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.</span>
                </motion.div>
              )}

              <form 
                action="https://formspree.io/f/xjkrldwl"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm sm:text-base"
                      placeholder="Votre nom"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm sm:text-base"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm sm:text-base"
                    placeholder="Objet de votre message"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm sm:text-base"
                    placeholder="Décrivez votre projet ou votre demande en quelques mots..."
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  * Champs obligatoires. Je m'engage à répondre dans les 24h.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;