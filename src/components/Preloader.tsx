import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/motion';
import portrait from '../images/francisco.webp';

interface PreloaderProps {
  onReveal: () => void;
  onDone: () => void;
}

const loadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

/**
 * Écran plein de couleur avec un glyphe au centre. Le glyphe est un trou dans l'écran :
 * il s'agrandit jusqu'à tout révéler, et laisse voir la page derrière lui (inspiré du chargement de landonorris.com).
 */
export default function Preloader({ onReveal, onDone }: PreloaderProps) {
  const root = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null);
  const hole = useRef<SVGGElement>(null);
  const fill = useRef<SVGRectElement>(null);
  const meta = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const [size] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  const { w, h } = size;
  const fontSize = Math.min(w, h) * 0.34;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let cancelled = false;
    let assetsDone = false;
    let counted = false;
    let exiting = false;
    const origin = `${w / 2} ${h / 2}`;
    const cover = Math.max(w, h) / (fontSize * 0.12);

    const exit = () => {
      if (exiting || cancelled || !assetsDone || !counted) return;
      exiting = true;
      gsap
        .timeline({
          onComplete: () => {
            document.body.style.overflow = '';
            onDone();
          },
        })
        .to(meta.current, { opacity: 0, y: 12, duration: 0.35, ease: 'power2.in' })
        .to(back.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }, '<0.1')
        .add(onReveal, '<0.25')
        .to(hole.current, { scale: cover, svgOrigin: origin, rotation: 0, duration: 1.5, ease: 'expo.inOut' }, '<')
        .to(fill.current, { opacity: 0, duration: 0.5, ease: 'power1.in' }, '-=0.5');
    };

    const ctx = gsap.context(() => {
      const state = { v: 0 };
      // Le glyphe apparaît en tournant, puis « sursaute » pendant le compte.
      gsap.set(hole.current, { svgOrigin: origin });
      gsap.fromTo(hole.current, { scale: 0.15, rotation: -35 }, { scale: 1, rotation: 0, duration: 1.1, ease: 'expo.out', svgOrigin: origin });
      gsap.to(hole.current, {
        skewX: -9,
        duration: 0.09,
        repeat: 7,
        yoyo: true,
        repeatDelay: 0.16,
        delay: 0.9,
        ease: 'steps(1)',
        svgOrigin: origin,
      });
      gsap.fromTo(meta.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
      gsap.to(state, {
        v: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (num.current) num.current.textContent = String(Math.round(state.v)).padStart(3, '0');
        },
        onComplete: () => {
          counted = true;
          exit();
        },
      });
    }, root);

    Promise.race([
      Promise.all([document.fonts.ready, loadImage(portrait)]),
      new Promise((resolve) => window.setTimeout(resolve, 3500)),
    ]).then(() => {
      assetsDone = true;
      exit();
    });

    return () => {
      cancelled = true;
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, [onReveal, onDone, w, h, fontSize]);

  return (
    <div ref={root} role="status" aria-live="polite" className="fixed inset-0 z-[100]">
      <span className="sr-only">Chargement</span>
      <div ref={back} className="absolute inset-0 bg-bg" />
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="loader-hole" maskUnits="userSpaceOnUse" x="0" y="0" width={w} height={h}>
            <rect width={w} height={h} fill="#fff" />
            <g ref={hole}>
              <text
                x={w / 2}
                y={h / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#000"
                fontSize={fontSize}
                fontWeight={800}
                style={{ fontFamily: '"Sen Variable", system-ui, sans-serif', letterSpacing: '-0.08em' }}
              >
                {'</>'}
              </text>
            </g>
          </mask>
        </defs>
        <rect ref={fill} width={w} height={h} fill="#24b1b1" mask="url(#loader-hole)" />
      </svg>

      <div ref={meta} className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-xs uppercase tracking-[0.18em] text-bg opacity-0 md:p-10">
        <span>Développeur Fullstack</span>
        <span ref={num} aria-hidden>
          000
        </span>
      </div>
    </div>
  );
}
