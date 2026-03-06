
import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onCardClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-600/50 dark:hover:border-indigo-600/50 hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-slate-900 dark:text-white font-medium flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
