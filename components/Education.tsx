import React, { useState } from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, BadgeCheck } from 'lucide-react';
import Modal from './Modal';

const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null);
  return (
    <section id="education" className="pt-12 pb-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Education</h2>
          <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 relative">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-indigo-600" size={20} />
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight flex items-center gap-2">
                  {edu.degree}
                  {/* {edu.certificate && (
                    <BadgeCheck className="text-blue-500" size={20} />
                  )} */}
                </h3>
                <p className="text-lg font-bold text-slate-600 dark:text-slate-300 mb-3">{edu.school}</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{edu.details}</p>

                {/* View Certificate Button */}
                {edu.certificate && (
                  <button
                    onClick={() => setSelectedCert({ url: edu.certificate, title: `${edu.degree} - Certificate` })}
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
            title="Certificate View"
          />
        )}
      </Modal>
    </section>
  );
};

export default Education;
