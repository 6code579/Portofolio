import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    {
      id: 1,
      title: 'Edusco',
      description: 'Plateforme éducative moderne développée avec Django, offrant une expérience d\'apprentissage interactive et intuitive avec gestion des cours, évaluations et suivi des progrès.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      category: 'Web App',
      date: 'Décembre 2024'
    },
    {
      id: 2,
      title: 'E-commerce Laravel',
      description: 'Solution e-commerce complète avec gestion des commandes, paiements sécurisés, interface d\'administration et tableau de bord analytique.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      category: 'E-commerce',
      date: 'Novembre 2024'
    },
    {
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      category: 'API',
      date: 'Octobre 2024'
    },
    {
      id: 4,
      title: 'Portfolio React',
      description: 'Site portfolio moderne et responsive développé avec React et Tailwind CSS, intégrant animations fluides et optimisation SEO.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Frontend',
      date: 'Septembre 2024'
    },
    {
      id: 5,
      title: 'Système de Blog',
      description: 'CMS personnalisé avec éditeur rich-text, gestion des médias, commentaires modérés et optimisation pour les moteurs de recherche.',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'CMS',
      date: 'Août 2024'
    },
    {
      id: 6,
      title: 'App Mobile Finances',
      description: 'Application de gestion financière personnelle avec synchronisation cloud, graphiques interactifs et notifications intelligentes.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      category: 'Mobile',
      date: 'Juillet 2024'
    }
  ];

  const categories = ['Tous', 'Web App', 'E-commerce', 'API', 'Frontend', 'CMS', 'Mobile'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Mes <span className="text-blue-800">Projets</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'ensemble de mes réalisations, des applications web complexes 
            aux APIs robustes, chaque projet reflétant ma passion pour l'excellence technique.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-slate-500 mr-2" />
            <span className="text-slate-600 font-medium">Filtrer par catégorie</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-800 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate-500">
              Aucun projet trouvé pour cette catégorie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;