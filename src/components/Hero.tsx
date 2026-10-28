import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Github, Instagram, Linkedin } from 'lucide-react';
import portrait from '../images/francisco.webp';
import { gsap, hasFinePointer, prefersReducedMotion, scrollToTarget } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';
import Shader from './Shader';
import Magnetic from './Magnetic';
import TLink from './TLink';
import { CvModal } from './Modals';
import LivePreview from './LivePreview';
import { projects } from '../data/content';

const socials = [
  { icon: Github, href: 'https://github.com/LucaneTech', name: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/franciscomouanda579', name: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/lucane.tech/', name: 'Instagram' },
];

/** Écrans de projets qui flottent autour du portrait, à des profondeurs différentes. */
const screens = [
  { slug: 'lucane', pos: 'left-[-10%] top-[12%] w-[46%] z-0', depth: 0.55, tilt: -7, bob: 3.4 },
  { slug: 'agrobusiness', pos: 'right-[-6%] top-[-2%] w-[36%] z-0', depth: 0.85, tilt: 6, bob: 4.2 },
  { slug: 'hermon', pos: 'right-[-8%] bottom-[8%] w-[44%] z-20', depth: 1.3, tilt: 5, bob: 3.8 },
];

export function MiniScreen({ slug, enabled }: { slug: string; enabled: boolean }) {
  const project = projects.find((p) => p.slug === slug)!;
  return (
    <div className="overflow-hidden rounded-md border border-secondary/25 bg-deep shadow-[0_24px_60px_-20px_rgb(0_0_0/0.85)]">
      <div className="flex items-center gap-1.5 border-b border-secondary/15 bg-bg px-2.5 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-secondary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
      </div>
      <div className="aspect-[16/10] w-full">
        <LivePreview project={project} enabled={enabled} />
      </div>
    </div>
  );
}

/** Une couche de titre : deux lignes masquées. `lit` est la version pleine, révélée par le curseur. */
function TitleLayer({ lit }: { lit?: boolean }) {
  const first = lit ? 'text-secondary' : 'title-outline';
  const second = lit ? 'text-primary' : 'title-outline';
  return (
    <span
      aria-hidden
      className={`block ${lit ? 'title-lit absolute inset-0' : 'title-outline-layer'} text-[clamp(3.2rem,12.4vw,12.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]`}
    >
      <span className="block overflow-hidden pb-[0.06em]">
        <span data-line className={`block ${first}`}>
          Développeur
        </span>
      </span>
      <span className="block overflow-hidden pb-[0.1em]">
        <span data-line className={`block font-serif font-normal italic tracking-[-0.03em] ${second}`}>
          Fullstack
        </span>
      </span>
    </span>
  );
}

export default function Hero() {
  const { ready } = useShell();
  const root = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const [cvOpen, setCvOpen] = useState(false);
  const fine = hasFinePointer();
  // Les sites en direct sont chargés un peu après l'affichage du hero, pour ne pas gêner le démarrage.
  const [screensOn, setScreensOn] = useState(false);
  useEffect(() => {
    if (!ready) return;
    const id = window.setTimeout(() => setScreensOn(true), 3000);
    return () => window.clearTimeout(id);
  }, [ready]);

  useEffect(() => {
    if (!ready || !root.current || !title.current || !stage.current) return;
    const reduce = prefersReducedMotion();
    const lines = title.current.querySelectorAll('[data-line]');
    const details = root.current.querySelectorAll('[data-hero]');
    const layers = Array.from(stage.current.querySelectorAll<HTMLElement>('[data-layer]'));

    if (reduce) {
      gsap.set([lines, details, photo.current, layers], { clearProps: 'all', opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(details, { opacity: 0, y: 24 });
      gsap
        .timeline()
        .from(photo.current, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2, duration: 1.6, ease: 'expo.inOut' })
        .from(lines, { yPercent: 115, duration: 1.5, ease: 'expo.out', stagger: 0.12 }, '-=1')
        .from(layers, { opacity: 0, scale: 0.7, y: 70, duration: 1.5, ease: 'expo.out', stagger: 0.14 }, '-=1.1')
        .to(details, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09 }, '-=1.2');

      // Les écrans flottent en continu, chacun à son rythme.
      stage.current!.querySelectorAll<HTMLElement>('[data-float]').forEach((el, i) => {
        gsap.to(el, { y: i % 2 ? 14 : -14, rotation: i % 2 ? 1.2 : -1.2, duration: 3 + i * 0.7, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });

      // Style « le grand devient petit » : titre et scène rapetissent pendant qu'on quitte le hero.
      const shrink = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to(title.current, { scale: 0.55, transformOrigin: 'left top', ease: 'none', scrollTrigger: shrink });
      gsap.to(stage.current, { scale: 0.7, transformOrigin: 'center top', ease: 'none', scrollTrigger: shrink });

      gsap.to(stage.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);

    const el = title.current;
    let sweep: gsap.core.Tween | null = null;
    const setLight = (x: number, y: number) => {
      el.style.setProperty('--hx', `${x}px`);
      el.style.setProperty('--hy', `${y}px`);
    };

    // Parallaxe de profondeur + inclinaison 3D du portrait.
    const movers = layers.map((l) => ({
      depth: Number(l.dataset.depth ?? 0.5),
      x: gsap.quickTo(l, 'x', { duration: 0.9, ease: 'power3' }),
      y: gsap.quickTo(l, 'y', { duration: 0.9, ease: 'power3' }),
    }));
    gsap.set(photo.current, { transformPerspective: 900 });
    const tiltX = gsap.quickTo(photo.current, 'rotationX', { duration: 0.8, ease: 'power3' });
    const tiltY = gsap.quickTo(photo.current, 'rotationY', { duration: 0.8, ease: 'power3' });

    const onMove = (e: PointerEvent) => {
      sweep?.kill();
      sweep = null;
      const r = el.getBoundingClientRect();
      setLight(e.clientX - r.left, e.clientY - r.top);
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      movers.forEach((m) => {
        m.x(-nx * m.depth * 70);
        m.y(-ny * m.depth * 50);
      });
      tiltY(nx * 16);
      tiltX(-ny * 12);
    };

    if (fine) {
      const r = el.getBoundingClientRect();
      const pos = { x: -300 };
      sweep = gsap.to(pos, {
        x: r.width + 300,
        duration: 2.8,
        delay: 0.9,
        ease: 'power2.inOut',
        onUpdate: () => setLight(pos.x, r.height * 0.55),
      });
      window.addEventListener('pointermove', onMove, { passive: true });
    } else {
      // Tactile : pas de curseur, la lumière fait des allers-retours sur le titre et le portrait respire.
      const r = el.getBoundingClientRect();
      const pos = { x: -200 };
      sweep = gsap.to(pos, {
        x: r.width + 200,
        duration: 3.4,
        delay: 0.9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        onUpdate: () => setLight(pos.x, r.height * 0.55),
      });
      gsap.to(photo.current, { rotationY: 9, rotationX: -5, duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }

    return () => {
      sweep?.kill();
      window.removeEventListener('pointermove', onMove);
      ctx.revert();
    };
  }, [ready]);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden pb-10 pt-28 md:pt-32">
      <Shader />
      <div className="container-x relative z-10 flex min-h-[calc(100svh-9rem)] flex-col justify-between">
        <div className="relative">
          <div
            ref={stage}
            className="relative mx-auto mt-4 aspect-[5/5] w-[78%] max-w-[420px] md:absolute md:right-[1%] md:top-[-2vh] md:mx-0 md:mt-0 md:w-[42vw] md:max-w-[620px]"
          >
            {(fine ? screens : screens.slice(0, 2)).map((s) => (
              <div key={s.slug} data-layer data-depth={s.depth} className={`absolute ${s.pos}`}>
                <div data-float style={{ transform: `rotate(${s.tilt}deg)` }}>
                  <MiniScreen slug={s.slug} enabled={screensOn} />
                </div>
              </div>
            ))}

            <div data-layer data-depth="0.25" className="absolute inset-x-[20%] bottom-[2%] top-[4%] z-10">
              <div
                ref={photo}
                className="h-full w-full overflow-hidden rounded-md border border-secondary/25 bg-deep shadow-[0_40px_90px_-30px_rgb(0_0_0/0.9)]"
              >
                <img
                  src={portrait}
                  alt="Portrait professionnel"
                  width={1086}
                  height={1448}
                  {...{ fetchpriority: 'high' }}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-primary-deep/20" />
              </div>
            </div>
          </div>

          <h1 ref={title} className="relative z-10 -mt-[16vw] md:mt-[clamp(6rem,19vh,11rem)]">
            <span className="sr-only">Développeur Fullstack</span>
            <span className="relative block">
              <TitleLayer />
              <TitleLayer lit />
            </span>
          </h1>
        </div>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p data-hero className="text-xl leading-snug text-light md:text-3xl">
              Passionné par la création de solutions web
              <br />
              <span className="font-serif italic text-primary">performantes et modernes</span>
            </p>
            <p data-hero className="body-copy mt-5 max-w-xl">
              Spécialisé en Django, React, Python et JavaScript. Je transforme vos idées en applications web robustes et élégantes.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:col-span-6 md:items-end">
            <div data-hero className="flex flex-wrap gap-4">
              <Magnetic>
                <button type="button" onClick={() => setCvOpen(true)} className="btn-primary">
                  <Download className="h-4 w-4" />
                  Télécharger mon CV
                </button>
              </Magnetic>
              <Magnetic>
                <TLink to="/contact" className="btn-ghost">
                  Me contacter
                </TLink>
              </Magnetic>
            </div>
            <ul data-hero className="flex gap-3">
              {socials.map(({ icon: Icon, href, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-secondary/25 text-light transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-bg"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          data-hero
          onClick={() => scrollToTarget('#featured-projects')}
          aria-label="Descendre"
          className="mx-auto mt-10 flex h-12 w-12 items-center justify-center rounded-md border border-secondary/25 text-light/70 transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
