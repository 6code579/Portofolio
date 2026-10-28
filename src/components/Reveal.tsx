import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode, RefObject } from 'react';
import SplitType from 'split-type';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';

/** Vrai dès que l'élément approche du viewport : le découpage du texte (coûteux) n'est fait qu'à ce moment. */
function useNearViewport(ref: RefObject<HTMLElement>, enabled: boolean) {
  const [near, setNear] = useState(false);
  useEffect(() => {
    if (!enabled || near || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '120% 0px 120% 0px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [enabled, near, ref]);
  return near;
}

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
}

/** Fondu + montée au passage dans le viewport. */
export function Reveal({ children, as: Tag = 'div', className = '', y = 40, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !ref.current) return;
    const el = ref.current;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'expo.out',
          delay,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        },
      );
    });
    return () => ctx.revert();
  }, [ready, y, delay]);

  return (
    <Tag ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </Tag>
  );
}

interface SplitRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Texte découpé en lignes masquées, mots qui montent avec un stagger. */
export function SplitReveal({ text, as: Tag = 'h2', className = '', delay = 0, stagger = 0.05 }: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { ready } = useShell();
  const near = useNearViewport(ref, ready);

  useEffect(() => {
    if (!ready || !ref.current) return;
    const el = ref.current;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    if (!near) return;

    let cancelled = false;
    let split: SplitType | null = null;
    let ctx: gsap.Context | null = null;
    let width = el.clientWidth;
    let timer: number;

    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (!split || el.clientWidth === width) return;
        width = el.clientWidth;
        split.split({ types: 'lines,words' });
      }, 250);
    };

    document.fonts.ready.then(() => {
      if (cancelled) return;
      split = new SplitType(el, { types: 'lines,words' });
      ctx = gsap.context(() => {
        gsap.set(el, { opacity: 1 });
        gsap.from(split!.words, {
          yPercent: 115,
          duration: 1.25,
          ease: 'expo.out',
          stagger,
          delay,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
      window.addEventListener('resize', onResize);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      ctx?.revert();
      split?.revert();
    };
  }, [ready, near, text, delay, stagger]);

  return (
    <Tag ref={ref} className={`opacity-0 ${className}`}>
      {text}
    </Tag>
  );
}

/** Paragraphe qui « s'allume » mot par mot au fil du scroll. */
export function LightText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { ready } = useShell();
  const near = useNearViewport(ref, ready);

  useEffect(() => {
    if (!ready || !near || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    let cancelled = false;
    let split: SplitType | null = null;
    let ctx: gsap.Context | null = null;

    document.fonts.ready.then(() => {
      if (cancelled) return;
      split = new SplitType(el, { types: 'words' });
      ctx = gsap.context(() => {
        gsap.fromTo(
          split!.words,
          { opacity: 0.55 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 50%', scrub: true },
          },
        );
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
      split?.revert();
    };
  }, [ready, near, text]);

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ end, decimals = 0, suffix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ready } = useShell();
  const final = `${end.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!ready || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    const state = { v: 0 };
    el.textContent = `${(0).toFixed(decimals)}${suffix}`;
    const ctx = gsap.context(() => {
      gsap.to(state, {
        v: end,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        onUpdate: () => {
          el.textContent = `${state.v.toFixed(decimals)}${suffix}`;
        },
      });
    });
    return () => {
      ctx.revert();
      el.textContent = final;
    };
  }, [ready, end, decimals, suffix, final]);

  return (
    <span ref={ref} className={className}>
      {final}
    </span>
  );
}

interface SlideProps {
  children: ReactNode;
  from?: 'left' | 'right' | 'none';
  /** Échelle de départ : > 1 pour qu'un grand élément « rétrécisse » en arrivant. */
  scaleFrom?: number;
  className?: string;
}

/**
 * Entrée liée au scroll : l'élément arrive depuis la gauche ou la droite pendant qu'on défile,
 * et peut rétrécir jusqu'à sa taille normale. S'ajoute aux révélations existantes sans les modifier.
 */
export function Slide({ children, from = 'left', scaleFrom = 1, className = '' }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    const coarse = !hasFinePointer();
    const dir = from === 'left' ? -1 : from === 'right' ? 1 : 0;
    const dist = dir * window.innerWidth * (coarse ? 0.32 : 0.16);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x: dist, scale: scaleFrom, opacity: 0, transformOrigin: window.innerWidth < 768 || from === 'none' ? 'center center' : from === 'right' ? 'right center' : 'left center' },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 58%', scrub: 0.6 },
        },
      );
    });
    return () => ctx.revert();
  }, [ready, from, scaleFrom]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Un grand élément qui rapetisse au fil du scroll tant qu'il quitte l'écran (titres d'en-tête de page). */
export function Shrink({ children, to = 0.6, className = '' }: { children: ReactNode; to?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        scale: to,
        xPercent: -4,
        opacity: 0.35,
        transformOrigin: window.innerWidth < 768 ? 'center top' : 'left top',
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 12%', end: 'bottom -20%', scrub: true },
      });
    });
    return () => ctx.revert();
  }, [ready, to]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
