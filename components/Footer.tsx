
import React from 'react';
import { CONTACT } from '../constants';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">AHMED FARAHAT</span>
            </div>
            <p className="text-slate-500 dark:text-slate-500 font-medium max-w-m">
              Mechatronics Engineer focused on Robotics, Embedded Systems, Software Engineering, and AI Integration.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a 
                href={`https://${CONTACT.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all"
              >
                <Github size={22} />
              </a>
              <a 
                href={`https://${CONTACT.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href={`mailto:${CONTACT.email}`}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all"
              >
                <Mail size={22} />
              </a>
            </div>
            {/* <a 
              href={`https://${CONTACT.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-indigo-600 flex items-center gap-1 group"
            >
              See more on GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a> */}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t justify-center border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs items-center justify-center font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Ahmed Farahat. Built with ❤️ in Egypt.
          </p>
          {/* <div className="flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
