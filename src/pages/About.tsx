import React from 'react';
import { Award, BookOpen, Code, Users, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      period: '2022 - Présent',
      title: 'Développeur Full-Stack Freelance',
      company: 'Indépendant',
      description: 'Développement d\'applications web sur mesure pour divers clients, de la conception à la mise en production.'
    },
    {
      period: '2021 - 2022',
      title: 'Développeur Web Junior',
      company: 'TechStart',
      description: 'Développement de fonctionnalités frontend et backend, participation aux revues de code et amélioration des performances.'
    },
    {
      period: '2020 - 2021',
      title: 'Stage Développeur',
      company: 'WebSolutions',
      description: 'Premier contact professionnel avec le développement web, apprentissage des bonnes pratiques et des méthodologies agiles.'
    }
  ];

  const education = [
    {
      period: '2019 - 2021',
      title: 'Formation Développeur Web',
      school: 'EEMCI',
      description: 'Formation complète en développement web full-stack, spécialisation en technologies modernes.'
    },
    {
      period: '2018 - 2019',
      title: 'Autoformation',
      school: 'En ligne',
      description: 'Apprentissage autodidacte des bases de la programmation et du développement web.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            À <span className="text-blue-800">Propos</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionné de technologie depuis toujours, je transforme les idées en solutions digitales innovantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">John Doe</h2>
              <p className="text-blue-800 font-semibold mb-4">Développeur Full-Stack</p>
              
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>3+ années d'expérience</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>15+ projets réalisés</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Users className="w-6 h-6 text-blue-800 mr-3" />
                Mon Histoire
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Diplômé de l'EEMCI, j'ai découvert ma passion pour le développement web lors de mes études. 
                  Ce qui a commencé comme une curiosité s'est rapidement transformé en vocation.
                </p>
                <p>
                  Spécialisé dans le développement full-stack, j'excelle particulièrement avec Django et Laravel, 
                  créant des applications web robustes et scalables. Mon approche combine expertise technique 
                  et sensibilité design pour livrer des solutions qui dépassent les attentes.
                </p>
                <p>
                  Aujourd'hui, je partage également mes connaissances à travers des tutoriels YouTube, 
                  contribuant à la communauté des développeurs et aidant les nouveaux talents à grandir.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-800 mr-3" />
                Valeurs & Approche
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Excellence Technique</h4>
                  <p className="text-slate-600 text-sm">Code propre, architecture solide et bonnes pratiques.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Innovation Continue</h4>
                  <p className="text-slate-600 text-sm">Veille technologique et adoption des dernières tendances.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Collaboration</h4>
                  <p className="text-slate-600 text-sm">Communication transparente et travail d'équipe efficace.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Résultats</h4>
                  <p className="text-slate-600 text-sm">Focus sur la livraison de solutions qui créent de la valeur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Code className="w-6 h-6 text-blue-800 mr-3" />
              Expérience Professionnelle
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-100 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-800 rounded-full"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-blue-800 bg-blue-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800">{exp.title}</h4>
                    <p className="text-slate-600 font-medium">{exp.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-blue-800 mr-3" />
              Formation
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-100 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800">{edu.title}</h4>
                    <p className="text-slate-600 font-medium">{edu.school}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;