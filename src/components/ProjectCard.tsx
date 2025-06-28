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
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
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
          className="absolute top-4 right-4 flex space-x-2"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </motion.div>

        {/* View Project Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-white/90 backdrop-blur-sm text-slate-800 font-medium rounded-lg hover:bg-white transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Voir le projet</span>
          </motion.button>
        </motion.div>

        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full shadow-lg">
              Featured
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          whileHover={{ x: 5 }}
          className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
        >
          {project.title}
        </motion.h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Date if available */}
        {project.date && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center text-slate-500 dark:text-slate-400 text-sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.date}</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;