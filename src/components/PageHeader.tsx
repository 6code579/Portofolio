import { LightText, Reveal, Shrink, SplitReveal } from './Reveal';

/** En-tête commun : titre (un mot en italique primaire) + sous-titre. */
export default function PageHeader({ lead, accent, subtitle }: { lead: string; accent: string; subtitle: string }) {
  return (
    <header className="container-x pb-14 pt-36 md:pb-24 md:pt-48">
      <Shrink>
      <h1 className="text-[clamp(3.2rem,11vw,10rem)] font-medium leading-[0.92] tracking-[-0.04em]">
        <SplitReveal as="span" text={lead} className="block" />
        <SplitReveal as="span" text={accent} className="block font-serif font-normal italic text-primary" delay={0.12} />
      </h1>
      </Shrink>
      <Reveal className="mt-8 max-w-2xl" delay={0.3}>
        <LightText text={subtitle} className="text-xl leading-snug text-light md:text-2xl" />
      </Reveal>
    </header>
  );
}
