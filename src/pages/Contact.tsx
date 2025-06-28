import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

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
      // Configuration EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'profrancisco579@gmail.com'
      };

      await emailjs.send(
        'service_portfolio', // Remplacez par votre Service ID
        'template_contact', // Remplacez par votre Template ID
        templateParams,
        'your_public_key' // Remplacez par votre Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Contacter</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Vous avez un projet en tête ? Une question technique ? 
            N'hésitez pas à me contacter, je serais ravi de discuter avec vous !
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "profrancisco579@gmail.com", href: "mailto:profrancisco579@gmail.com", color: "blue" },
                  { icon: Phone, title: "Téléphone", value: "+33 1 23 45 67 89", href: "tel:+33123456789", color: "green" },
                  { icon: MapPin, title: "Localisation", value: "Paris, France", href: null, color: "purple" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`p-3 bg-${contact.color}-50 dark:bg-${contact.color}-900/30 rounded-xl`}>
                      <contact.icon className={`w-5 h-5 text-${contact.color}-600 dark:text-${contact.color}-400`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-1">{contact.title}</h4>
                      {contact.href ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={contact.href}
                          className={`text-slate-600 dark:text-slate-300 hover:text-${contact.color}-600 dark:hover:text-${contact.color}-400 transition-colors`}
                        >
                          {contact.value}
                        </motion.a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-300">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Réseaux Sociaux
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Github, name: "GitHub", href: "https://github.com", color: "slate" },
                  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com", color: "blue" },
                  { icon: Youtube, name: "Chaîne YouTube", href: "https://youtube.com", color: "red" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-${social.color}-50 dark:bg-${social.color}-900/20 rounded-xl hover:bg-${social.color}-100 dark:hover:bg-${social.color}-900/30 transition-all duration-300 group`}
                  >
                    <social.icon className={`w-5 h-5 text-${social.color}-600 dark:text-${social.color}-400 group-hover:scale-110 transition-transform`} />
                    <span className={`font-medium text-${social.color}-600 dark:text-${social.color}-400`}>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex items-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-3"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
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
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300">Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-700 dark:text-red-300">Erreur lors de l'envoi. Veuillez réessayer.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
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
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
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
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
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
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Objet de votre message"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Décrivez votre projet ou votre demande en quelques mots..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-slate-500 dark:text-slate-400">
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