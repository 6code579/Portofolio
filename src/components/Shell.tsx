import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap, ScrollTrigger, initSmoothScroll, prefersReducedMotion, scrollToTop } from '../lib/motion';
import { navItems } from '../data/content';
import { ShellContext } from '../contexts/ShellContext';
import Header from './Header';
import Footer from './Footer';
import Cursor from './Cursor';
import Preloader from './Preloader';

/** Orchestre préloader, transitions de page, smooth scroll et gabarit commun. */
export default function Shell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);
  const [booted, setBooted] = useState(false);
  const busy = useRef(false);
  const overlay = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    initSmoothScroll();
    if (prefersReducedMotion()) {
      setReady(true);
      setBooted(true);
    }
    // Garde-fou : le contenu ne reste jamais masqué si une animation échoue.
    const failsafe = window.setTimeout(() => setReady(true), 8000);
    return () => window.clearTimeout(failsafe);
  }, []);

  useLayoutEffect(() => {
    if (overlay.current) gsap.set(overlay.current, { yPercent: 100 });
  }, []);

  // Les positions de ScrollTrigger sont recalculées à chaque nouvelle page.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname, ready]);

  const go = useCallback(
    (to: string) => {
      if (busy.current) return;
      if (prefersReducedMotion()) {
        navigate(to);
        scrollToTop();
        return;
      }
      busy.current = true;
      setReady(false);
      if (label.current) label.current.textContent = navItems.find((n) => n.path === to)?.label ?? '';
      gsap
        .timeline()
        .set(overlay.current, { visibility: 'visible' })
        .fromTo(overlay.current, { yPercent: 100 }, { yPercent: 0, duration: 0.7, ease: 'expo.inOut' })
        .fromTo(label.current, { yPercent: 115 }, { yPercent: 0, duration: 0.6, ease: 'expo.out' }, '-=0.3')
        .add(() => {
          navigate(to);
          scrollToTop();
        })
        .add(() => setReady(true), '+=0.25')
        .to(label.current, { yPercent: -115, duration: 0.45, ease: 'expo.in' }, '<')
        .to(overlay.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, '<0.1')
        .set(overlay.current, { visibility: 'hidden' })
        .add(() => {
          busy.current = false;
        });
    },
    [navigate],
  );

  const reveal = useCallback(() => setReady(true), []);
  const done = useCallback(() => setBooted(true), []);
  const value = useMemo(() => ({ ready, go }), [ready, go]);

  return (
    <ShellContext.Provider value={value}>
      <div className="grain">
        {!booted && <Preloader onReveal={reveal} onDone={done} />}
        <Cursor />
        <Header />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer />
        <div
          ref={overlay}
          aria-hidden
          className="invisible fixed inset-0 z-[90] flex items-center justify-center bg-deep"
        >
          <div className="overflow-hidden px-4 pb-4">
            <span ref={label} className="block font-serif text-[clamp(3.5rem,12vw,10rem)] italic leading-none text-primary" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-primary" />
        </div>
      </div>
    </ShellContext.Provider>
  );
}
