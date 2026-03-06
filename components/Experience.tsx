import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Award, Zap, Code, Users, Trophy, GraduationCap, BadgeCheck } from 'lucide-react';
import Modal from './Modal';

const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null);
  const getIcon = (type: string) => {
    switch (type) {
      case 'Job': return <Briefcase className="text-slate-500" size={24} />;
      case 'Award': return <Award className="text-amber-500" size={24} />;
      case 'Competition': return <Trophy className="text-amber-500" size={24} />;
      case 'Activity': return <Users className="text-emerald-500" size={24} />;
      case 'Internship': return <Zap className="text-sky-500" size={24} />;
      case 'Project': return <Code className="text-indigo-500" size={24} />;
      default: return <Briefcase className="text-slate-500" size={24} />;
    }
  };

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Experience</h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-800">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              {getIcon(exp.type)}
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-indigo-500/30 relative group">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white text-xl flex items-center gap-2">
                  {exp.role}
                  {/* {exp.certificate && (
                    <BadgeCheck className="text-blue-500" size={20} />
                  )} */}
                </div>
              </div>
              <div className="text-slate-500 dark:text-slate-400 font-bold mt-4 mb-4 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] uppercase tracking-wider">{exp.type}</span>
                <time className="font-medium text-indigo-600 dark:text-indigo-400 text-sm whitespace-nowrap">{exp.period}</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-2">
                <span>{exp.company}</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-500 text-sm space-y-2 mb-4">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Certificate logic (Matches Education) */}
              {exp.certificate && (
                <button
                  onClick={() => setSelectedCert({ url: exp.certificate, title: `${exp.role} - Document` })}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 font-bold rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors text-sm"
                >
                  <BadgeCheck size={16} />
                  <span>View Certificate</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* PDF Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
      >
        {selectedCert && (
          <iframe
            src={`${selectedCert.url}#view=FitH`}
            className="w-full h-full rounded-xl"
            title="Document View"
          />
        )}
      </Modal>
    </section>
  );
};

export default Experience;
