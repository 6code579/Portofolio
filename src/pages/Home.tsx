import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
    </div>
  );
};

export default Home;