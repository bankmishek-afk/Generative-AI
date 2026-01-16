
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Chat from './components/Chat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
        <Chat />
        
        {/* Newsletter Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto glass p-10 md:p-16 rounded-[40px] relative overflow-hidden text-center border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы к инновациям?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">Подпишитесь на нашу рассылку, чтобы получать последние новости из мира ИИ и дизайна.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-sm"
              />
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all active:scale-95">
                Подписаться
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
