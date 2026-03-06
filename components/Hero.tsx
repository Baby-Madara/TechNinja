
import React from 'react';
import { CONTACT } from '../constants';
import { FileText } from 'lucide-react';
import profilePic from '../images/profile-pic.png';
import coverPic from '../images/cover-photo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16">
      {/* Cover Photo */}
      <div className="h-64 sm:h-80 md:h-[450px] w-full relative overflow-hidden">
        <img
          // src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" 
          src={coverPic}
          alt="Engineering Banner"
          className="w-full h-full object-cover opacity-60 dark:opacity-40 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950"></div>
      </div>

      {/* Profile Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 sm:-mt-40">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl bg-white">
              <img
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" // Placeholder for your provided profile image
                src={profilePic}
                alt="Ahmed Farahat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left pb-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
              Ahmed Farahat
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6 flex items-center justify-center md:justify-start gap-2">
              Mechatronics Engineer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={CONTACT.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all font-bold group"
              >
                <FileText size={18} className="group-hover:rotate-12 transition-transform" />
                <span>View CV</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-sm">
                📍 Cairo, Egypt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
