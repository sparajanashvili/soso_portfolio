import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { profileData } from '../data/mock';
import { Button } from './ui/button';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.location,
      value: profileData.location,
      link: null
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: profileData.email,
      link: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: profileData.phone,
      link: `tel:${profileData.phone}`
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'LinkedIn Profile',
      link: profileData.linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-xl text-cyan-400 font-semibold">{t.contact.subtitle}</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 font-medium mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-cyan-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => window.open(`mailto:${profileData.email}`, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>

                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all group"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;