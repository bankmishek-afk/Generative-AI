
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Будущее уже здесь</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Создавайте шедевры с <br />
          <span className="gradient-text">Интеллектом Нового Поколения</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Nexus Studio объединяет современный дизайн и мощь Gemini AI, чтобы превратить ваши идеи в цифровую реальность. Попробуйте наш ИИ-чат прямо сейчас.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#chat" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
            Начать чат
          </a>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-2xl font-bold transition-all hover:bg-white/5 active:scale-95">
            Узнать больше
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">APPLE</div>
          <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">GOOGLE</div>
          <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">META</div>
          <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">OPENAI</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
