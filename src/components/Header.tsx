import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { navItems } from '../data/content';
import { useShell } from '../contexts/ShellContext';
import TLink from './TLink';

const social = [
  { name: 'GitHub', href: 'https://github.com/LucaneTech', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/franciscomouanda579', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/lucane.tech/', icon: Instagram },
  { name: 'Email', href: 'mailto:profrancisco579@gmail.com', icon: Mail },
];

export default function Header() {
  const { pathname } = useLocation();
  const { ready } = useShell();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const mounted = useRef(false);

  const index = Math.max(0, navItems.findIndex((n) => n.path === pathname));

  // Apparition de la barre après le préloader / la transition.
  useEffect(() => {
    if (!ready || !bar.current) return;
    if (prefersReducedMotion()) {
      gsap.set(bar.current, { opacity: 1 });
      return;
    }
    const tween = gsap.fromTo(bar.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: 0.2 });
    return () => {
      tween.kill();
    };
  }, [ready]);

  // Le panneau est une timeline unique : ouvrir la joue, fermer la rejoue à l'envers, même en cours de route.
  useEffect(() => {
    const el = panel.current;
    const dim = shade.current;
    if (!el || !dim || prefersReducedMotion()) return;
    const items = el.querySelectorAll('[data-menu-item]');
    const timeline = gsap
      .timeline({ paused: true, onReverseComplete: () => void gsap.set([el, dim], { visibility: 'hidden' }) })
      .set([el, dim], { visibility: 'visible' })
      .fromTo(dim, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      .fromTo(el, { xPercent: 100 }, { xPercent: 0, duration: 0.85, ease: 'expo.out' }, 0)
      .fromTo(items, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.7, ease: 'expo.out', stagger: 0.06 }, 0.15);
    tl.current = timeline;
    return () => {
      timeline.kill();
      tl.current = null;
    };
  }, []);

  useEffect(() => {
    const el = panel.current;
    const dim = shade.current;
    if (!el || !dim) return;
    if (prefersReducedMotion()) {
      el.style.visibility = dim.style.visibility = open ? 'visible' : 'hidden';
      return;
    }
    if (!tl.current) return;
    if (open) tl.current.timeScale(1).play();
    else if (mounted.current) tl.current.timeScale(1.7).reverse();
    mounted.current = true;
  }, [open]);

  // Fermeture : Échap, clic en dehors, changement de page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus({ preventScroll: true });
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panel.current?.contains(t) || button.current?.contains(t)) return;
      setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[120] -translate-y-24 rounded-md bg-primary px-5 py-3 text-sm font-medium text-bg focus:translate-y-0"
      >
        Aller au contenu
      </a>

      <header ref={bar} className="pointer-events-none fixed inset-x-0 top-0 z-[90] flex items-center justify-between px-5 py-5 opacity-0 md:px-10 md:py-6">
        <TLink to="/" className="pointer-events-auto group flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_4px_rgb(36_177_177/0.55)] transition-transform duration-500 group-hover:scale-150" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-light/70 max-md:sr-only">
            {String(index + 1).padStart(2, '0')} / {navItems[index].label}
          </span>
        </TLink>

        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto group relative flex items-center gap-3 rounded-md border border-secondary/25 bg-bg/50 px-4 py-2 text-sm text-light backdrop-blur-md transition-colors duration-300 hover:border-primary"
        >
          <span>{open ? 'Fermer' : 'Menu'}</span>
          <span className="relative block h-2 w-4">
            <span className={`absolute left-0 top-0 h-px w-full bg-secondary transition-transform duration-500 ease-out ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-px w-full bg-secondary transition-transform duration-500 ease-out ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </header>

      <div ref={shade} aria-hidden className="invisible fixed inset-0 z-[84] bg-black/55 backdrop-blur-[2px]" />

      <nav
        id="menu"
        ref={panel}
        aria-label="Navigation principale"
        className="invisible fixed right-0 top-0 z-[85] flex h-[100dvh] w-[min(21rem,88vw)] flex-col border-l border-secondary/20 bg-deep px-6 pb-8 pt-24 shadow-[-30px_0_80px_-20px_rgb(0_0_0/0.9)]"
      >
        <ul>
          {navItems.map((item, i) => {
            const active = item.path === pathname;
            return (
              <li key={item.path}>
                <div data-menu-item>
                  <TLink
                    to={item.path}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center justify-between rounded-md px-3 py-3 text-base transition-colors duration-300 hover:bg-secondary/10 ${
                      active ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-light/50 transition-colors group-hover:text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </TLink>
                </div>
              </li>
            );
          })}
        </ul>

        <div data-menu-item className="mt-auto space-y-4 border-t hairline px-3 pt-5">
          <a href="mailto:profrancisco579@gmail.com" className="block text-xs text-light/70 transition-colors hover:text-primary">
            profrancisco579@gmail.com
          </a>
          <ul className="flex gap-1.5">
            {social.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-secondary/20 text-light/70 transition-colors duration-300 hover:bg-primary hover:text-bg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
