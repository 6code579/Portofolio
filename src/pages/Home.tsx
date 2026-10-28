import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';
import ScrollBand from '../components/ScrollBand';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollBand />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
    </>
  );
}
