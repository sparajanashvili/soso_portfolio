import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">SP</span>
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">Soso Parajanashvili</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'DE' : 'EN'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-cyan-500/20 pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-left"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-left"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-left"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-left"
            >
              {t.nav.contact}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;