import { useEffect, useRef } from 'react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';

const SCALE: Record<string, number> = { default: 1, link: 2.6, hide: 0, text: 0.6 };

/** Curseur avec inertie + lueur douce qui suit le pointeur (la « lampe »). */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion() || !ring.current || !dot.current || !light.current) return;
    const r = ring.current;
    const d = dot.current;
    const l = light.current;
    document.documentElement.classList.add('has-cursor');
    gsap.set([r, d], { xPercent: -50, yPercent: -50, opacity: 0 });

    const rx = gsap.quickTo(r, 'x', { duration: 0.45, ease: 'power3' });
    const ry = gsap.quickTo(r, 'y', { duration: 0.45, ease: 'power3' });
    const dx = gsap.quickTo(d, 'x', { duration: 0.08, ease: 'none' });
    const dy = gsap.quickTo(d, 'y', { duration: 0.08, ease: 'none' });

    let shown = false;
    let raf = 0;
    let lx = 0;
    let ly = 0;

    const paintLight = () => {
      raf = 0;
      l.style.background = `radial-gradient(420px circle at ${lx}px ${ly}px, rgb(36 177 177 / 0.09), transparent 70%)`;
    };

    const move = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([r, d], { opacity: 1, duration: 0.4 });
      }
      rx(e.clientX);
      ry(e.clientY);
      dx(e.clientX);
      dy(e.clientY);
      lx = e.clientX;
      ly = e.clientY;
      if (!raf) raf = requestAnimationFrame(paintLight);
    };

    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor], a, button, label, input, textarea, select');
      let state = 'default';
      if (t) {
        const tag = t.tagName;
        state = t.dataset.cursor ?? (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' ? 'text' : 'link');
      }
      gsap.to(r, { scale: SCALE[state] ?? 1, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
      gsap.to(d, { scale: state === 'hide' ? 0 : state === 'link' ? 0.5 : 1, duration: 0.3, overwrite: 'auto' });
    };

    const leave = () => {
      shown = false;
      gsap.to([r, d], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', leave);
      document.documentElement.classList.remove('has-cursor');
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={light} aria-hidden className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen" />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] h-9 w-9 rounded-full opacity-0 border border-secondary/60 mix-blend-difference"
      />
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[95] h-1.5 w-1.5 rounded-full opacity-0 bg-primary" />
    </>
  );
}
