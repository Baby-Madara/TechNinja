
import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Skills</h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400 mt-6 font-medium">Tools and technologies I use to build the future</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, idx) => {
          // Dynamic icon resolution
          const IconComponent = (Icons as any)[skill.icon] || Icons.HelpCircle;

          return (
            <div
              key={idx}
              className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6 shadow-sm flex items-center justify-center overflow-hidden relative">
                {skill.image ? (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <IconComponent size={32} />
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 tracking-tight">{skill.name}</h3>
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{skill.category}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
