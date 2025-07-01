import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  // Fonction pour tronquer la description
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
    >
      {/* Image */}
      <div className={`relative overflow-hidden h-40 sm:h-44 ${project.bgColor || 'bg-white'}`}>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain"
        />
        
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        />
        
        {/* Action buttons overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 flex space-x-2"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black transition-all duration-200"
          >
            <Github className="w-3 h-3" />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black transition-all duration-200"
            >
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          )}
        </motion.div>

        {/* View Project Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute bottom-3 left-3 right-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-1.5 bg-white/90 backdrop-blur-sm text-slate-800 font-medium rounded-lg hover:bg-white transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
          >
            <Eye className="w-3 h-3" />
            <span>Voir le projet</span>
          </motion.button>
        </motion.div>

        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-3 left-3"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full shadow-lg">
              Featured
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <motion.h3
          whileHover={{ x: 3 }}
          className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
        >
          {project.title}
        </motion.h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed text-sm line-clamp-3 flex-1">
          {truncateDescription(project.description, 100)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Date if available */}
        {project.date && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center text-slate-500 dark:text-slate-400 text-xs mt-auto"
          >
            <Calendar className="w-3 h-3 mr-1.5" />
            <span>{project.date}</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;