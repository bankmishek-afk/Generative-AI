
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 glass rounded-3xl group hover:border-blue-500/30 transition-all duration-500">
    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Наши Преимущества</h2>
          <p className="text-slate-400 text-lg">
            Мы используем самые современные инструменты для достижения максимального результата.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="⚡"
            title="Быстрая Разработка"
            desc="Наш ИИ ускоряет процесс проектирования и написания кода в 5 раз, сохраняя при этом высочайшее качество."
          />
          <FeatureCard 
            icon="🎨"
            title="Генеративный Дизайн"
            desc="Уникальные визуальные концепции, созданные нейросетями специально под ваши задачи и предпочтения."
          />
          <FeatureCard 
            icon="🛡️"
            title="Безопасность и Масштаб"
            desc="Облачные решения корпоративного уровня, гарантирующие стабильную работу вашего проекта 24/7."
          />
          <FeatureCard 
            icon="📈"
            title="Аналитика Данных"
            desc="Глубокое понимание аудитории благодаря встроенным инструментам машинного обучения."
          />
          <FeatureCard 
            icon="☁️"
            title="Cloud Native"
            desc="Полная интеграция с ведущими облачными провайдерами для бесшовного развертывания."
          />
          <FeatureCard 
            icon="💎"
            title="Премиум Качество"
            desc="Внимание к мельчайшим деталям в каждом пикселе и каждой строчке программного кода."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
