import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { getLenis } from '../lib/motion';
import type { Project } from '../data/content';

function useModal(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    getLenis()?.stop();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      getLenis()?.start();
    };
  }, [open, onClose]);
}

export function CvModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useModal(open, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Mon CV">
      <div className="absolute inset-0 bg-deep/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-md border hairline bg-deep p-7 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 rounded-md p-1 text-light/60 transition-colors hover:text-primary"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-bg">
            <Download className="h-4 w-4" />
          </span>
          <h3 className="text-xl">Mon CV</h3>
        </div>
        <p className="mb-7 text-sm leading-relaxed text-light/70">
          La version simple de mon CV est disponible en téléchargement. Pour la version détaillée, veuillez me contacter directement.
        </p>
        <a href="/cv.pdf" download onClick={onClose} className="btn-primary w-full">
          <Download className="h-4 w-4" />
          Version Simple
        </a>
      </div>
    </div>
  );
}

function getVideoEmbed(url: string): { type: 'iframe' | 'video'; src: string } {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (yt) return { type: 'iframe', src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1` };
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  return { type: 'video', src: url };
}

export function VideoModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [loading, setLoading] = useState(true);
  useModal(!!project, onClose);
  useEffect(() => setLoading(true), [project]);
  if (!project?.videoUrl) return null;
  const embed = getVideoEmbed(project.videoUrl);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`Démo – ${project.title}`}>
      <div className="absolute inset-0 bg-deep/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-2 text-sm text-light/80 transition-colors hover:text-primary"
        >
          <X className="h-5 w-5" />
          Fermer
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-md border hairline bg-black">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
              <div className="h-9 w-9 animate-spin rounded-full border-2 border-secondary/20 border-t-primary" />
            </div>
          )}
          {embed.type === 'video' ? (
            <video src={embed.src} controls autoPlay className="h-full w-full" onCanPlay={() => setLoading(false)} />
          ) : (
            <iframe
              src={embed.src}
              title={`Démo – ${project.title}`}
              allow="autoplay; fullscreen"
              className="h-full w-full border-0"
              onLoad={() => setLoading(false)}
            />
          )}
        </div>
        <p className="mt-3 text-center text-sm text-light/60">{project.title}</p>
      </div>
    </div>
  );
}
