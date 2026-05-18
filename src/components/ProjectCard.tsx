import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Play, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

function getVideoEmbed(url: string): { type: 'iframe' | 'video'; src: string } {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch) return { type: 'iframe', src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1` };
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1` };
  return { type: 'video', src: url };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const hasLiveUrl = !!project.liveUrl && project.liveUrl !== '#';
  const hasGithub = !!project.githubUrl && project.githubUrl !== '#';
  const hasVideo = !!project.videoUrl;
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group h-full flex flex-col"
    >
      {/* Preview zone */}
      <div className="relative overflow-hidden h-44 bg-slate-100 dark:bg-slate-700 flex-shrink-0">
        {hasLiveUrl ? (
          <>
            {iframeLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-100 dark:bg-slate-700 transition-opacity duration-300">
                <div className="w-7 h-7 border-2 border-slate-300 dark:border-slate-500 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                src={project.liveUrl}
                scrolling="no"
                title={`Preview – ${project.title}`}
                className="border-0 pointer-events-none select-none"
                style={{
                  width: '400%',
                  height: '400%',
                  transform: 'scale(0.25)',
                  transformOrigin: 'top left',
                }}
                onLoad={() => setIframeLoading(false)}
              />
            </div>
            <div className="absolute inset-0 z-10" />
          </>
        ) : hasVideo ? (
          <button
            onClick={() => { setIsVideoModalOpen(true); setVideoLoading(true); }}
            className="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-900 dark:bg-slate-950 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors duration-150 cursor-pointer group/play"
          >
            <div className="w-12 h-12 rounded-md bg-blue-600/50 group-hover/play:bg-blue-700 flex items-center justify-center transition-colors duration-150">
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </div>
            <span className="text-slate-300 text-xs font-medium">Voir la démo</span>
          </button>
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${project.bgColor || 'bg-slate-100 dark:bg-slate-700'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 object-contain opacity-70"
            />
          </div>
        )}

        {project.featured && (
          <div className="absolute top-2 left-2 z-20">
            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-300 mb-3 text-sm line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-sm">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors duration-150"
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold rounded-md transition-colors duration-150 ${!hasLiveUrl ? 'flex-1' : ''}`}
            >
              <Github className="w-3 h-3" />
              Dépôt GitHub
            </a>
          )}
          {!hasLiveUrl && !hasGithub && (
            <span className="text-slate-400 dark:text-slate-500 text-xs py-2">
              Pas de démo disponible
            </span>
          )}
        </div>

        {project.date && (
          <div className="flex items-center text-slate-400 dark:text-slate-500 text-xs mt-3">
            <Calendar className="w-3 h-3 mr-1" />
            {project.date}
          </div>
        )}
      </div>
      {isVideoModalOpen && hasVideo && (() => {
        const embed = getVideoEmbed(project.videoUrl!);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setIsVideoModalOpen(false)}
            />
            <div className="relative w-full max-w-3xl z-10">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-9 right-0 flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                <X className="w-5 h-5" />
                Fermer
              </button>
              <div className="relative bg-black rounded-md overflow-hidden w-full aspect-video">
                {videoLoading && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                    <div className="w-9 h-9 border-2 border-slate-600 border-t-blue-500 rounded-full animate-spin" />
                  </div>
                )}
                {embed.type === 'video' ? (
                  <video
                    src={embed.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                    onCanPlay={() => setVideoLoading(false)}
                  />
                ) : (
                  <iframe
                    src={embed.src}
                    title={`Démo – ${project.title}`}
                    allow="autoplay; fullscreen"
                    className="w-full h-full border-0"
                    onLoad={() => setVideoLoading(false)}
                  />
                )}
              </div>
              <p className="mt-2 text-center text-white/60 text-sm font-medium">
                {project.title}
              </p>
            </div>
          </div>
        );
      })()}
    </motion.div>
  );
};

export default ProjectCard;
