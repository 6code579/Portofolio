import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';

/**
 * Deux grandes lignes qui glissent en sens opposés pendant le scroll (style landonorris.com).
 * Les textes sont ceux de l'accroche du hero.
 */
export default function ScrollBand() {
  const root = useRef<HTMLElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const trigger = { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 };
      gsap.fromTo(top.current, { xPercent: 22 }, { xPercent: -38, ease: 'none', scrollTrigger: trigger });
      gsap.fromTo(bottom.current, { xPercent: -48 }, { xPercent: 12, ease: 'none', scrollTrigger: trigger });
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section ref={root} aria-hidden className="relative overflow-hidden border-y hairline bg-deep py-14 md:py-24">
      <div ref={top} className="w-max whitespace-nowrap text-[clamp(3rem,13vw,13rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-secondary">
        Passionné par la création de solutions web
      </div>
      <div ref={bottom} className="mt-2 w-max whitespace-nowrap font-serif text-[clamp(3rem,13vw,13rem)] italic leading-[0.95] text-primary md:mt-4">
        performantes et modernes
      </div>
    </section>
  );
}
