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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
      {/* Animated Data Visualization Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Numbers */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl font-bold animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                background: `linear-gradient(135deg, #06b6d4 ${Math.random() * 100}%, #3b82f6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {Math.floor(Math.random() * 100)}
            </div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="darkGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1.5" fill="#06b6d4" opacity="0.2" />
                <line x1="25" y1="0" x2="25" y2="50" stroke="#06b6d4" strokeWidth="0.5" opacity="0.1" />
                <line x1="0" y1="25" x2="50" y2="25" stroke="#06b6d4" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#darkGrid)" />
          </svg>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>

        {/* Binary Code Rain */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-sm font-mono text-cyan-400 animate-code-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="text-left">
            <div className="mb-4 animate-fade-in">
              <span className="text-cyan-400 font-semibold text-lg">{t.hero.greeting}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <span className="text-white">Soso </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Parajanashvili
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t.hero.title}
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {t.hero.viewProjects}
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                onClick={() => window.open(profileData.resumeUrl, '_blank')}
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.hero.downloadCV}
              </Button>
            </div>

            <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-50 animate-pulse-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="https://customer-assets.emergentagent.com/job_deutsch-ds-profile/artifacts/snhd4zjt_WhatsApp%20Image%202025-09-27%20at%2023.49.36.jpeg"
                  alt="Soso Parajanashvili"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-8 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
};

export default Hero;