import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            SP
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </nav>

          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-cyan-50 hover:border-cyan-600 hover:text-cyan-600 transition-all"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'DE' : 'EN'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;