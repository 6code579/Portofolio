import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { approach, education, experiences, mission, story, values } from '../data/content';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { useShell } from '../contexts/ShellContext';
import photo from '../images/portrait2.webp';
import PageHeader from '../components/PageHeader';
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
      if (!hasFinePointer()) return;
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
    <div ref={frame} className="mt-10 hidden aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-md border border-secondary/25 bg-deep md:block">
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
            <LightText key={p} text={p} className="text-2xl leading-[1.25] text-light md:text-4xl" />
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

  // La ligne se « remplit » au fil du scroll, comme un fil que l'on allume.
  useEffect(() => {
    if (!ready || !list.current || !line.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: list.current, start: 'top 70%', end: 'bottom 70%', scrub: true },
        },
      );
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
        <ol ref={list} className="relative md:pl-12">
          <span aria-hidden className="absolute bottom-0 left-0 top-2 hidden w-px bg-secondary/15 md:block" />
          <span ref={line} aria-hidden className="absolute bottom-0 left-0 top-2 hidden w-px origin-top bg-primary md:block" />
          {items.map((e) => (
            <li key={`${e.period}-${e.title}`} className="relative pb-14 last:pb-0">
              <Reveal>
                <span aria-hidden className="absolute -left-[3.2rem] top-2 hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_3px_rgb(36_177_177/0.6)] md:block" />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{e.period}</span>
                <h3 className="mt-3 text-2xl leading-tight md:text-4xl">{e.title}</h3>
                <p className="mt-2 font-serif text-xl italic text-light/80">{e.company}</p>
                <p className="body-copy mt-4 max-w-2xl">{e.description}</p>
              </Reveal>
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
