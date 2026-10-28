import { useState } from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { stats } from '../data/content';
import { Counter, LightText, Reveal, Slide, SplitReveal } from './Reveal';
import Magnetic from './Magnetic';
import TLink from './TLink';
import { CvModal } from './Modals';

export default function CallToAction() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-t hairline py-28 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(0 121 121 / 0.32) 0%, rgb(36 177 177 / 0.08) 40%, transparent 70%)' }}
      />
      <div className="container-x relative text-center">
        <Slide from="none" scaleFrom={1.45}>
        <h2 className="text-[clamp(2.8rem,8.4vw,8rem)] leading-[0.94] tracking-[-0.04em]">
          <SplitReveal as="span" text="Prêt à donner vie à votre" className="block" />
          <SplitReveal as="span" text="projet web ?" className="block font-serif font-normal italic text-primary" delay={0.12} />
        </h2>
        </Slide>

        <LightText
          className="mx-auto mt-10 max-w-2xl text-lg leading-snug text-light md:text-2xl"
          text="Collaborons ensemble pour créer une solution sur mesure qui répond parfaitement à vos besoins et dépasse vos attentes."
        />

        <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
          <Magnetic>
            <TLink to="/contact" className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              Discutons de votre projet
              <ArrowRight className="h-4 w-4" />
            </TLink>
          </Magnetic>
          <Magnetic>
            <button type="button" onClick={() => setCvOpen(true)} className="btn-ghost">
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </button>
          </Magnetic>
        </Reveal>

        <ul className="mx-auto mt-24 grid max-w-4xl gap-10 md:grid-cols-3">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 0.1} className="border-t hairline pt-6">
                <Counter end={s.end} decimals={s.decimals} suffix={s.suffix} className="block text-[clamp(3rem,7vw,5.5rem)] font-light leading-none tracking-tighter text-secondary" />
                <span className="mt-3 block text-sm text-light/70">{s.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
