import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '../data/content';
import { LightText, Slide, SplitReveal } from './Reveal';
import ProjectList from './ProjectList';
import Magnetic from './Magnetic';
import TLink from './TLink';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="relative py-24 md:py-40">
      <div className="container-x">
        <div className="mb-14 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
          <Slide from="left" scaleFrom={1.2} className="md:col-span-7">
          <h2 className="text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.04em]">
            <SplitReveal as="span" text="Projets" className="block" />
            <SplitReveal as="span" text="Récents" className="block font-serif font-normal italic text-primary" delay={0.1} />
          </h2>
          </Slide>
          <Slide from="right" className="md:col-span-5">
          <LightText
            className="text-lg leading-snug text-light md:text-xl"
            text="Découvrez une sélection de mes derniers projets, alliant innovation technique et design moderne pour créer des expériences utilisateur exceptionnelles."
          />
          </Slide>
        </div>

        <ProjectList items={featuredProjects} />

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <TLink to="/projects" className="btn-primary">
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </TLink>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
