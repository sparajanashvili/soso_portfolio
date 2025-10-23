import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { profileData } from '../data/mock';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: `${profileData.yearsExperience}+`,
      label: t.about.experience
    },
    {
      icon: Target,
      value: `${profileData.projectsCompleted}+`,
      label: t.about.projects
    },
    {
      icon: Users,
      value: `${profileData.clientSatisfaction}%`,
      label: t.about.satisfaction
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">{t.about.subtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;