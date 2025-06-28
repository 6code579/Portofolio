import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Edusco',
      description: 'Plateforme éducative moderne développée avec Django, offrant une expérience d\'apprentissage interactive et intuitive.',
      image: 'images/student.png',
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Laravel',
      description: 'Solution e-commerce complète avec gestion des commandes, paiements sécurisés et interface d\'administration.',
      image: 'images/student.png',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger et tests automatisés.',
      image: 'images/student.png',
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Projets <span className="text-blue-800">Récents</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes derniers projets, alliant innovation technique 
            et design moderne pour créer des expériences utilisateur exceptionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/projects" 
            className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <span>Voir tous les projets</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;