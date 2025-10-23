import React from 'react';
import { Code, BarChart3, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { skillsData } from '../data/mock';
import { Badge } from './ui/badge';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t.skills.categories.programming,
      skills: skillsData.programming,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: t.skills.categories.visualization,
      skills: skillsData.visualization,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Database,
      title: t.skills.categories.engineering,
      skills: skillsData.engineering,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wrench,
      title: t.skills.categories.tools,
      skills: skillsData.tools,
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.skills.title}
              </span>
            </h2>
            <p className="text-xl text-cyan-400 font-semibold">{t.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;