import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { approach, education, experiences, mission, story, values } from '../data/content';
import { gsap, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';
import photo from '../images/portrait2.webp';
import PageHeader from '../components/PageHeader';
import { AboutStage } from '../components/PageStages';
import { LightText, Reveal, Slide, SplitReveal } from '../components/Reveal';

/** Photo en arche : révélée par un rideau, qui glisse doucement au scroll. */
function ArchPhoto() {
  const frame = useRef<HTMLDivElement>(null);
  const { ready } = useShell();

  useEffect(() => {
    if (!ready || !frame.current || prefersReducedMotion()) return;
    const el = frame.current;
    const img = el.querySelector('img');
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.6,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
      gsap.fromTo(img, { yPercent: -6, scale: 1.15 }, {
        yPercent: 6,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
    return () => ctx.revert();
  }, [ready]);

  return (
    <div ref={frame} className="mt-10 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-md border border-secondary/25 bg-deep">
      <img src={photo} alt="Portrait" width={359} height={436} loading="lazy" decoding="async" className="h-full w-full object-cover" />
    </div>
  );
}

function Block({ index, title, paragraphs, withPhoto = false }: { index: string; title: string; paragraphs: string[]; withPhoto?: boolean }) {
  return (
    <section className="border-t hairline py-16 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Slide from="left" scaleFrom={1.2}>
            <span className="eyebrow">{index}</span>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.4rem)] leading-none tracking-[-0.03em]">
              <SplitReveal as="span" text={title} className="block" />
            </h2>
            </Slide>
            {withPhoto && <ArchPhoto />}
          </div>
        </div>
        <Slide from="right" className="space-y-8 md:col-span-8">
          {paragraphs.map((p) => (
            <LightText key={p} text={p} className="text-lg leading-[1.5] text-light md:text-2xl md:leading-[1.4]" />
          ))}
        </Slide>
      </div>
    </section>
  );
}

function FeatureList({ index, title, items }: { index: string; title: string; items: { icon: LucideIcon; title: string; desc: string }[] }) {
  return (
    <section className="border-t hairline bg-deep py-16 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Slide from="left" scaleFrom={1.2}>
          <span className="eyebrow">{index}</span>
          <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.4rem)] leading-none tracking-[-0.03em]">
            <SplitReveal as="span" text={title} className="block" />
          </h2>
          </Slide>
        </div>
        <Slide from="right" className="md:col-span-8">
        <ul>
          {items.map(({ icon: Icon, title: t, desc }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.06}>
                <div className="group flex items-center gap-6 border-t hairline py-7 transition-colors duration-500 hover:bg-primary-deep/10 md:gap-8 md:px-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-secondary/25 text-primary transition-colors duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-bg">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl">{t}</h3>
                    <p className="mt-1 text-light/70">{desc}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
          <li className="border-t hairline" />
        </ul>
        </Slide>
      </div>
    </section>
  );
}

type Entry = { period: string; title: string; company: string; description: string };

function Timeline({ index, title, items }: { index: string; title: string; items: Entry[] }) {
  const list = useRef<HTMLOListElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const { ready } = useShell();

  // Le tronc se « remplit » au fil du scroll, comme un fil que l'on allume.
  // Sur mobile, chaque entrée pousse en plus sa propre branche : la courbe se dessine, puis le nœud s'allume.
  useEffect(() => {
    if (!ready || !list.current || !line.current || prefersReducedMotion()) return;
    const root = list.current;
    const trunk = line.current;
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(trunk, { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top 70%', end: 'bottom 70%', scrub: mobile ? 0.4 : true },
      });
      if (!mobile) return;

      root.querySelectorAll<HTMLElement>('[data-branch]').forEach((item) => {
        const path = item.querySelector('[data-branch-path]');
        const node = item.querySelector('[data-branch-node]');
        const card = item.querySelector('[data-branch-card]');
        const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 82%', once: true } });
        tl.fromTo(path, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' })
          .fromTo(node, { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, '-=0.15')
          .fromTo(card, { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'expo.out' }, '-=0.45');
      });
    });
    return () => ctx.revert();
  }, [ready]);

  return (
    <section className="border-t hairline py-16 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Slide from="left" scaleFrom={1.2}>
            <span className="eyebrow">{index}</span>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.4rem)] leading-none tracking-[-0.03em]">
              <SplitReveal as="span" text={title} className="block" />
            </h2>
            </Slide>
          </div>
        </div>
        <Slide from="right" className="md:col-span-8">
        <ol ref={list} className="relative max-md:pl-10 md:pl-12">
          <span aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-secondary/15 md:left-0" />
          <span ref={line} aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-primary md:left-0" />
          {items.map((e) => (
            <li key={`${e.period}-${e.title}`} data-branch className="relative pb-12 last:pb-0 md:pb-14">
              {/* Branche mobile : une courbe part du tronc vers la carte, un nœud marque la jonction. */}
              <svg aria-hidden viewBox="0 0 32 16" className="absolute -left-[32px] top-1 h-4 w-8 overflow-visible md:hidden">
                <path data-branch-path d="M0 1 C 12 1, 10 13, 25 13" pathLength={1} fill="none" stroke="rgb(36 177 177)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span aria-hidden data-branch-node className="absolute -left-[37px] top-[0.1rem] h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_12px_3px_rgb(36_177_177/0.6)] md:hidden" />
              <span aria-hidden className="absolute -left-[3.2rem] top-2 hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_3px_rgb(36_177_177/0.6)] md:block" />
              <div data-branch-card>
                <Reveal>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{e.period}</span>
                  <h3 className="mt-3 text-2xl leading-tight md:text-4xl">{e.title}</h3>
                  <p className="mt-2 font-serif text-xl italic text-light/80">{e.company}</p>
                  <p className="body-copy mt-4 max-w-2xl">{e.description}</p>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
        </Slide>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        lead="À"
        accent="Propos"
        subtitle="Découvrez mon parcours, mes compétences et ma passion pour le développement web"
        stage={<AboutStage />}
      />
      <Block index="01" title="Mon Histoire" paragraphs={story} withPhoto />
      <Block index="02" title="Ma Mission" paragraphs={mission} />
      <FeatureList index="03" title="Mes Valeurs" items={values} />
      <FeatureList index="04" title="Mon Approche" items={approach} />
      <Timeline index="05" title="Expérience Professionnelle" items={experiences} />
      <Timeline index="06" title="Formation" items={education} />
    </>
  );
}
