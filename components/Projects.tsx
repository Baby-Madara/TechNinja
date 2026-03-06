
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { ExternalLink, X, AlertCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleProjectClick = (link: string | undefined, name: string) => {
    if (!link) {
      setPopupContent(name);
      setShowPopup(true);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] mb-3 block">Engineering</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter uppercase">Projects</h2>
            <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-slate-500 w-full dark:text-slate-400  font-medium leading-relaxed">
            Hands-on work spanning from Autonomous Robotics to Embedded System Engineering and Full-Stack Engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onCardClick={() => handleProjectClick(project.link, project.name)} 
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl max-w-sm w-full relative border border-slate-200 dark:border-slate-800 animate-in zoom-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110"
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-600 rotate-3">
                <AlertCircle size={40} />
              </div>
              <h3 className="text-2xl font-black mb-3 dark:text-white">Coming Soon!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Documentation for <span className="font-bold text-indigo-600 dark:text-indigo-400">"{popupContent}"</span> is currently being finalized. <br/>Check back later for the code!
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/30"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
