import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <p className="text-xl text-cyan-400 font-semibold">{t.about.subtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;