import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';

export interface StageItem {
  key: string;
  node: ReactNode;
  /** Classes de position (absolute) dans la scène. */
  pos: string;
  /** Profondeur : plus elle est grande, plus l'élément bouge avec le curseur. */
  depth: number;
  /** Inclinaison de départ en degrés. */
  tilt?: number;
}

/**
 * Scène d'éléments flottants pour les bannières de page, dans l'esprit du hero :
 * entrée échelonnée, flottement continu (aussi sur mobile), parallaxe de profondeur au curseur,
 * dérive au scroll.
 */
export default function FloatingStage({ items, className = '' }: { items: StageItem[]; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !root.current) return;
    const el = root.current;
    const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-layer]'));
    if (prefersReducedMotion()) {
      gsap.set(layers, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(layers, { opacity: 0, scale: 0.7, y: 70, duration: 1.5, ease: 'expo.out', stagger: 0.14, delay: 0.35 });
      el.querySelectorAll<HTMLElement>('[data-float]').forEach((f, i) => {
        gsap.to(f, { y: i % 2 ? 14 : -14, rotation: `+=${i % 2 ? 1.4 : -1.4}`, duration: 2.8 + i * 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
      gsap.to(el, {
        yPercent: -12,
        scale: 0.85,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 30%', end: 'bottom top', scrub: true },
      });
    }, el);

    let cleanup = () => {};
    if (hasFinePointer()) {
      const movers = layers.map((l) => ({
        depth: Number(l.dataset.depth ?? 0.5),
        x: gsap.quickTo(l, 'x', { duration: 0.9, ease: 'power3' }),
        y: gsap.quickTo(l, 'y', { duration: 0.9, ease: 'power3' }),
      }));
      const onMove = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        movers.forEach((m) => {
          m.x(-nx * m.depth * 70);
          m.y(-ny * m.depth * 50);
        });
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      cleanup = () => window.removeEventListener('pointermove', onMove);
    }

    return () => {
      cleanup();
      ctx.revert();
    };
  }, [ready]);

  return (
    <div ref={root} aria-hidden className={`relative ${className}`}>
      {items.map((it) => (
        <div key={it.key} data-layer data-depth={it.depth} className={`absolute ${it.pos}`}>
          <div data-float style={{ transform: `rotate(${it.tilt ?? 0}deg)` }}>
            {it.node}
          </div>
        </div>
      ))}
    </div>
  );
}
