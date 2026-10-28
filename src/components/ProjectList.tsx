import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight, Github, Play } from 'lucide-react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';
import type { Project } from '../data/content';
import { Reveal, Slide } from './Reveal';
import LivePreview from './LivePreview';
import { VideoModal } from './Modals';

const pad = (n: number) => String(n).padStart(2, '0');

/** Fenêtre de navigateur : s'ouvre en rideau, s'incline vers le curseur. */
function BrowserFrame({ project, children }: { project: Project; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { clipPath: 'inset(12% 8% 12% 8%)', opacity: 0 }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    let cleanup = () => {};
    if (hasFinePointer()) {
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3' });
      gsap.set(el, { transformPerspective: 1100 });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 9);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 7);
      };
      const leave = () => {
        rx(0);
        ry(0);
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      cleanup = () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    }
    return () => {
      cleanup();
      ctx.revert();
    };
  }, [ready, project.slug]);

  return (
    <div ref={ref} className="group/frame overflow-hidden rounded-md border border-secondary/20 bg-deep shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-2 border-b border-secondary/15 bg-bg px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 truncate font-mono text-[11px] text-light/55">
          {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : project.title}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {children}
        <div className="pointer-events-none absolute inset-0 bg-primary-deep/0 transition-colors duration-500 group-hover/frame:bg-primary-deep/15" />
      </div>
    </div>
  );
}

export default function ProjectList({ items }: { items: Project[] }) {
  const [video, setVideo] = useState<Project | null>(null);

  return (
    <div>
      <ul>
        {items.map((p, i) => {
          const flip = i % 2 === 1;
          const frame = (
            <BrowserFrame project={p}>
              <LivePreview project={p} />
            </BrowserFrame>
          );
          const meta = [p.category, p.date].filter(Boolean).join(' · ');
          return (
            <li key={p.slug}>
              <Reveal as="article" y={30}>
                <div className="grid items-center gap-8 border-t hairline py-12 md:grid-cols-12 md:gap-14 md:py-20">
                  <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                    <Slide from={flip ? 'right' : 'left'}>
                      {p.liveUrl ? (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${p.title}`} className="block" data-cursor="link">
                          {frame}
                        </a>
                      ) : p.videoUrl ? (
                        <button type="button" onClick={() => setVideo(p)} aria-label={`Voir la démo de ${p.title}`} className="block w-full text-left" data-cursor="link">
                          {frame}
                        </button>
                      ) : (
                        frame
                      )}
                    </Slide>
                  </div>

                  <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
                    <Slide from={flip ? 'left' : 'right'}>
                      <span className="eyebrow">{pad(i + 1)}</span>
                      <h3 className="mt-3 text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1] tracking-tight">{p.title}</h3>
                      {meta && <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-light/60">{meta}</p>}
                      <p className="body-copy mt-6">{p.description}</p>
                      {p.technologies.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {p.technologies.map((t) => (
                            <li key={t} className="chip">
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-3">
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                        {!p.liveUrl && p.videoUrl && (
                          <button type="button" onClick={() => setVideo(p)} className="btn-primary !px-5 !py-3">
                            <Play className="h-4 w-4" fill="currentColor" />
                            Voir la démo
                          </button>
                        )}
                        {p.githubUrl && (
                          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-3">
                            <Github className="h-4 w-4" />
                            Dépôt GitHub
                          </a>
                        )}
                        {!p.liveUrl && !p.videoUrl && !p.githubUrl && (
                          <span className="text-sm text-light/60">Pas de démo disponible</span>
                        )}
                      </div>
                    </Slide>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <div className="border-t hairline" />
      <VideoModal project={video} onClose={() => setVideo(null)} />
    </div>
  );
}
