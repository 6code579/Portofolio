import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';

interface RowProps {
  items: string[];
  reverse?: boolean;
  outline?: boolean;
}

function Row({ items, reverse = false, outline = false }: RowProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !wrap.current || !track.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        track.current,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration: 38, ease: 'none', repeat: -1 },
      );
      // Le défilement du site accélère le bandeau, puis il reprend son rythme.
      ScrollTrigger.create({
        trigger: wrap.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 180, 9);
          gsap.to(tween, {
            timeScale: boost,
            duration: 0.3,
            overwrite: true,
            onComplete: () => void gsap.to(tween, { timeScale: 1, duration: 1.4 }),
          });
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [ready, reverse]);

  const list = [...items, ...items];
  return (
    <div ref={wrap} className="overflow-hidden py-3 md:py-4">
      <div ref={track} className="flex w-max items-center will-change-transform motion-reduce:w-auto motion-reduce:flex-wrap">
        {list.map((s, i) => (
          <span key={`${s}-${i}`} className="flex items-center">
            <span
              className={`px-5 text-[clamp(2.4rem,6.2vw,5.6rem)] font-semibold leading-none tracking-tight md:px-8 ${
                outline ? 'text-stroke' : i % 2 ? 'text-primary' : 'text-secondary'
              }`}
            >
              {s}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary/70 md:h-3 md:w-3" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Bandeau de compétences en défilement continu, deux rangées en sens opposés. */
export default function SkillMarquee({ rows }: { rows: RowProps[] }) {
  return (
    <div aria-hidden className="-mx-5 mb-16 select-none border-y hairline py-3 md:-mx-10 md:mb-28">
      {rows.map((r, i) => (
        <Row key={i} {...r} />
      ))}
    </div>
  );
}
