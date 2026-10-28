import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import Home from './pages/Home';

const loadProjects = () => import('./pages/Projects');
const loadAbout = () => import('./pages/About');
const loadContact = () => import('./pages/Contact');
const Projects = lazy(loadProjects);
const About = lazy(loadAbout);
const Contact = lazy(loadContact);

export default function App() {
  // Les autres pages se chargent en tâche de fond une fois l'accueil affiché.
  useEffect(() => {
    const prefetch = () => {
      void loadProjects();
      void loadAbout();
      void loadContact();
    };
    const id = window.setTimeout(prefetch, 2500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <Shell>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Shell>
  );
}
