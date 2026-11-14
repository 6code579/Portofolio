import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import type { Project } from '../data/content';
import ProjectArt from './ProjectArt';

const VIEW_W = 1440;
const VIEW_H = 900;
const GIVE_UP_MS = 20000;

interface LivePreviewProps {
  project: Project;
  className?: string;
  enabled?: boolean;
}

/**
 * Aperçu en direct du site, à la manière des previews Netlify : le vrai site dans une iframe
 * rendue en 1440 px puis réduite à la largeur de la carte. Un loader tourne tant que la page
 * n'est pas prête ; l'iframe n'est chargée qu'à l'approche de l'écran.
 */
export default function LivePreview({ project, className = '', enabled = true }: LivePreviewProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const live = !!project.liveUrl && !project.noEmbed;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / VIEW_W);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!live || !enabled || near || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [live, enabled, near]);

  // Si le site ne répond pas, on abandonne proprement au lieu de tourner indéfiniment.
  useEffect(() => {
    if (!near || loaded) return;
    const id = window.setTimeout(() => setFailed(true), GIVE_UP_MS);
    return () => window.clearTimeout(id);
  }, [near, loaded]);

  const showFrame = live && near && !failed;
  const showLoader = live && !loaded && !failed;
  const showCard = !live || failed;

  return (
    <div ref={wrap} className={`relative h-full w-full overflow-hidden bg-deep ${className}`}>
      {showFrame && (
        <iframe
          src={project.liveUrl}
          title={`Aperçu en direct – ${project.title}`}
          tabIndex={-1}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          className={`absolute left-0 top-0 border-0 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: VIEW_W, height: VIEW_H, transform: `scale(${scale})`, transformOrigin: '0 0', pointerEvents: 'none' }}
        />
      )}

      {showLoader && (
        <div role="status" className="absolute inset-0 flex items-center justify-center bg-deep">
          <span className="sr-only">Chargement de l'aperçu</span>
          <span aria-hidden className="h-8 w-8 animate-spin rounded-full border-2 border-secondary/15 border-t-primary" />
        </div>
      )}

      {showCard && (
        <div className="absolute inset-0">
          <ProjectArt project={project} />
          {project.videoUrl && (
            <span aria-hidden className="absolute right-[4%] top-[6%] flex h-[13%] min-h-6 aspect-square items-center justify-center rounded-full bg-secondary text-bg shadow-[0_10px_30px_-8px_rgb(0_0_0/0.8)]">
              <Play className="h-[42%] w-[42%] translate-x-[6%]" fill="currentColor" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
