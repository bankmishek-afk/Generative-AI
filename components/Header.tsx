
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Nexus <span className="text-blue-400">Studio</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Главная</a>
          <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Возможности</a>
          <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">О нас</a>
          <button className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-blue-50 transition-all active:scale-95">
            Связаться
          </button>
        </nav>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
