import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { projects } from '../data/content';
import PageHeader from '../components/PageHeader';
import { ProjectsStage } from '../components/PageStages';
import ProjectList from '../components/ProjectList';
import { Reveal } from '../components/Reveal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const categories = useMemo(() => ['all', ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter(
      (p) =>
        (filter === 'all' || p.category === filter) &&
        (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)),
    );
  }, [filter, search]);

  return (
    <>
      <PageHeader lead="Mes" accent="Projets" subtitle="Découvrez une sélection de mes réalisations en développement web" stage={<ProjectsStage />} />

      <section className="container-x pb-24 md:pb-40">
        <Reveal className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <label className="relative block w-full md:max-w-sm">
            <span className="sr-only">Rechercher un projet</span>
            <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un projet..."
              className="w-full border-b border-secondary/30 bg-transparent py-3 pl-7 text-light outline-none transition-colors placeholder:text-light/50 focus:border-primary"
            />
          </label>

          <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-md border px-4 py-2 text-sm transition-colors duration-300 ${
                  filter === c
                    ? 'border-primary bg-primary text-bg'
                    : 'border-secondary/25 text-light hover:border-primary hover:text-primary'
                }`}
              >
                {c === 'all' ? 'Tous les projets' : c}
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <ProjectList key={`${filter}|${search}`} items={filtered} />
        ) : (
          <p className="border-t hairline py-16 text-center text-light/70">Aucun projet trouvé avec ces critères.</p>
        )}
      </section>
    </>
  );
}
