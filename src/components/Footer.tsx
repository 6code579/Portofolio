import React from 'react';
import { Github, Linkedin, Youtube, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github,
      color: 'hover:text-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'hover:text-red-600'
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: Mail,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xl font-semibold">Portfolio</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Développeur full-stack passionné par la création de solutions web modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
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
          </div>

          {/* Social Links */}
          <div className="space-y-4">
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
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;