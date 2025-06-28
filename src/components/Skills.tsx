import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: ['Python', 'Django', 'Laravel', 'PHP', 'FastAPI', 'Node.js', 'RESTful APIs']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Database Design']
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: ['Git', 'Docker', 'VS Code', 'Linux', 'CI/CD', 'AWS', 'Nginx']
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Compétences <span className="text-blue-800">Techniques</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise technique complète pour développer des solutions web 
            de bout en bout, de la conception à la mise en production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 text-center mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-center"
                  >
                    <span className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;