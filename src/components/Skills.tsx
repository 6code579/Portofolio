import { skillCategories, otherSkills, expertise } from '../data/content';
import { Counter, LightText, Reveal, Slide, SplitReveal } from './Reveal';
import SkillMarquee from './SkillMarquee';

const all = skillCategories.flatMap((c) => c.skills);
const half = Math.ceil(all.length / 2);

export default function Skills() {
  return (
    <section className="relative border-t hairline bg-deep py-24 md:py-40">
      <div className="container-x">
        <div className="mb-14 grid gap-8 max-md:text-center md:mb-24 md:grid-cols-12 md:items-end">
          <Slide from="left" scaleFrom={1.2} className="md:col-span-7">
          <h2 className="text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.04em]">
            <SplitReveal as="span" text="Compétences" className="block" />
            <SplitReveal as="span" text="Techniques" className="block font-serif font-normal italic text-primary" delay={0.1} />
          </h2>
          </Slide>
          <Slide from="right" className="md:col-span-5">
          <LightText
            className="text-lg leading-snug text-light md:text-xl"
            text="Une expertise technique complète pour développer des solutions web de bout en bout, de la conception à la mise en production."
          />
          </Slide>
        </div>

        <SkillMarquee rows={[{ items: all.slice(0, half), outline: true }, { items: all.slice(half), reverse: true }]} />

        <ul>
          {skillCategories.map((cat) => (
            <li key={cat.title}>
              <Reveal as="div" y={30}>
                <div className="grid gap-6 border-t hairline py-9 md:grid-cols-12 md:gap-10 md:py-12">
                  <div className="max-md:text-center md:col-span-4">
                    <h3 className="text-[clamp(2rem,4vw,3.4rem)] leading-none">{cat.title}</h3>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-light/60">
                      {cat.skills.length} technologies
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2.5 max-md:justify-center md:col-span-8">
                    {cat.skills.map((s) => (
                      <li
                        key={s}
                        className="chip !px-4 !py-2 !text-sm hover:border-primary hover:bg-primary hover:text-bg md:!text-base"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="border-t hairline" />

        <div className="mt-24 md:mt-36">
          <Slide from="left" scaleFrom={1.15}>
            <Reveal>
              <h3 className="text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight max-md:text-center">Autres Compétences</h3>
            </Reveal>
          </Slide>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-md border hairline bg-secondary/10 sm:grid-cols-2 lg:grid-cols-4">
            {otherSkills.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="bg-deep">
                <Reveal delay={i * 0.08} className="group h-full p-7 transition-colors duration-500 hover:bg-primary-deep/20 max-md:text-center md:p-9">
                  <Icon className="h-7 w-7 text-primary max-md:mx-auto" />
                  <h4 className="mt-8 text-xl">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-light/70">{desc}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 md:mt-36">
          <Slide from="right" scaleFrom={1.15}>
            <Reveal>
              <h3 className="text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight max-md:text-center">Niveau d'Expertise</h3>
            </Reveal>
          </Slide>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {expertise.map((item, i) => (
              <li key={item.skill}>
                <Reveal delay={i * 0.08} className="border-t hairline pt-6 max-md:text-center">
                  <Counter end={item.level} suffix="%" className="block text-[clamp(3rem,8vw,7rem)] font-light leading-none tracking-tighter text-primary" />
                  <span className="mt-4 block text-lg text-light">{item.skill}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
