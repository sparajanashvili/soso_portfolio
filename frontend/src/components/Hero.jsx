import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { profileData } from '../data/mock';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Data Visualization Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#06b6d4" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-cyan-600 font-semibold text-lg">{t.hero.greeting}</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <span className="bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t.hero.title}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {t.hero.viewProjects}
            </Button>
            
            <Button
              onClick={() => window.open(profileData.resumeUrl, '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 px-8 py-6 text-lg font-semibold transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.hero.downloadCV}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-cyan-600 transition-colors" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-cyan-600 transition-colors" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all group"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-cyan-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-cyan-600" />
      </button>
    </section>
  );
};

export default Hero;