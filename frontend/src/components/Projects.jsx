import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.projects.title}
              </span>
            </h2>
            <p className="text-xl text-cyan-400 font-semibold">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-500/40 transition-all hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-cyan-500/90 text-white hover:bg-cyan-600">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-slate-700 text-gray-300 border-slate-600">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-700 text-gray-300 border-slate-600">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                    <span>{t.projects.viewDetails}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-cyan-500/30">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    {t.projects.challenge}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    {t.projects.solution}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    {t.projects.results}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    {t.projects.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1.5 bg-slate-800 text-gray-300 border-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => window.open(selectedProject.link, '_blank')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;