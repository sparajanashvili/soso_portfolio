import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { profileData } from '../data/mock';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Soso Parajanashvili
              </div>
              <p className="text-gray-400">
                Data Scientist | Data Analyst | BI Specialist
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {t.nav.skills}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {t.nav.projects}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Soso Parajanashvili. {t.footer.rights}
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
              {t.footer.builtWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;