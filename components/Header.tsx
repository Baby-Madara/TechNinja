
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      // Manual calculation to land perfectly
      const headerOffset = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 h-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-2 bg-indigo-600 rounded-xl text-white group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
              <Cpu size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">
                FARAHAT
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest -mt-1">
                Mechatronics Engineer
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-400"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[110] md:hidden w-screen h-screen bg-white dark:bg-slate-950 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 border-b border-slate-200 dark:border-slate-800">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-xl text-white">
                <Cpu size={22} />
              </div>
              <span className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">FARAHAT</span>
           </div>
           <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-600 dark:text-slate-400">
             <X size={24} />
           </button>
        </div>
        <div className="flex flex-col h-[calc(100vh-64px)] justify-center items-center gap-6 overflow-y-auto pb-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-black text-slate-900 dark:text-white hover:text-indigo-600 transition-colors tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 mt-4 border-t border-slate-100 dark:border-slate-800 w-[80%] flex justify-center gap-6">
             <a href="https://github.com/Baby-Madara" target="_blank" className="font-bold text-slate-600 dark:text-slate-400 text-xs tracking-widest">GH</a>
             <a href="mailto:ahmedfarahat1177@gmail.com" className="font-bold text-slate-600 dark:text-slate-400 text-xs tracking-widest">EM</a>
             <a href="https://wa.link/wm2plp" target="_blank" className="font-bold text-slate-600 dark:text-slate-400 text-xs tracking-widest">WA</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
