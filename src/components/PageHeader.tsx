import type { ReactNode } from 'react';
import { LightText, Reveal, Shrink, SplitReveal } from './Reveal';
import Shader from './Shader';

interface PageHeaderProps {
  lead: string;
  accent: string;
  subtitle: string;
  /** Scène d'éléments flottants affichée à côté du titre (bureau) ou dessous (mobile). Sans scène : bannière simple. */
  stage?: ReactNode;
}

/** Bannière commune : titre (un mot en italique primaire) et sous-titre ; avec une scène, fond animé en plus. */
export default function PageHeader({ lead, accent, subtitle, stage }: PageHeaderProps) {
  const copy = (
    <>
      <Shrink>
        <h1 className="text-[clamp(3.2rem,11vw,10rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          <SplitReveal as="span" text={lead} className="block" />
          <SplitReveal as="span" text={accent} className="block font-serif font-normal italic text-primary" delay={0.12} />
        </h1>
      </Shrink>
      <Reveal className="mt-8 max-w-2xl" delay={0.3}>
        <LightText text={subtitle} className="text-xl leading-snug text-light md:text-2xl" />
      </Reveal>
    </>
  );

  if (!stage) {
    return <header className="container-x pb-14 pt-36 md:pb-24 md:pt-48">{copy}</header>;
  }

  return (
    <header className="relative overflow-hidden">
      <Shader />
      <div className="container-x relative pb-14 pt-36 md:grid md:grid-cols-12 md:items-center md:gap-10 md:pb-24 md:pt-48">
        <div className="md:col-span-7">{copy}</div>
        <div className="mt-14 md:col-span-5 md:mt-0">{stage}</div>
      </div>
    </header>
  );
}
