
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              About <span className="text-indigo-600">Me</span>
            </h2>
            <div className="space-y-4">
              <div className="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Bridging Robotics, Embedded Systems, Software Engineering, AI-Integrated Systems.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            I am a <span className="font-bold text-slate-900 dark:text-white">Mechatronics Engineer</span> focusing on advanced robotics and intelligent automation. With deep experience in Embedded Systems, ROS/ROS2, and MATLAB, I thrive on turning complex engineering challenges into creative, efficient solutions.
          </p>
          {/* <div className="grid sm:grid-cols-2 gap-6">
            <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h4 className="text-lg font-bold mb-2">Mechanical Design</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">SolidWorks (Motion Analysis), Fusion 360, CNC & 3D Printing.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-950 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h4 className="text-lg font-bold mb-2">Software & Control</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Embedded C++, Python, RTOS, and Web Development (MERN).</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Driven by a constant curiosity for how things move and think, I am currently exploring Reinforcement Learning applied to locomotion patterns and IoT-enabled embedded systems.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
