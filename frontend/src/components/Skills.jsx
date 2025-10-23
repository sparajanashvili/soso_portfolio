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
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Database,
      title: t.skills.categories.engineering,
      skills: skillsData.engineering,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Wrench,
      title: t.skills.categories.tools,
      skills: skillsData.tools,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {t.skills.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">{t.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
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