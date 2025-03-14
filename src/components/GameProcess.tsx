import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './GameProcess.css';

const GameProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: 1,
      title: "Игра",
      description: "Управляйте подразделением, выполняйте задачи, решайте конфликты в реалистичной симуляции.",
      icon: "🎮"
    },
    {
      number: 2,
      title: "Обратная связь",
      description: "Анализируйте результаты своих решений и корректируйте стратегию.",
      icon: "📊"
    },
    {
      number: 3,
      title: "Обучение",
      description: "Изучайте теоретическую часть по менеджменту и Agile методологиям.",
      icon: "📚"
    },
    {
      number: 4,
      title: "Практика",
      description: "Отрабатывайте реальные сценарии в игре, планируя и выполняя 6 спринтов.",
      icon: "🚀"
    }
  ];

  return (
    <section id="game-process" className="game-process section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Обучение через игру</h2>
          <p className="section-subtitle">
            Наш уникальный подход сочетает теорию и практику в увлекательном игровом формате
          </p>
        </motion.div>

        <div className="game-process-content">
          <motion.div 
            className="game-process-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/game-process.png" 
              alt="Процесс обучения" 
              className="img-fluid"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/500x600/3498db/ffffff?text=Процесс+обучения";
              }}
            />
            <div className="image-decoration">
              <div className="decoration-shape"></div>
            </div>
          </motion.div>

          <div 
            className="process-steps"
            ref={ref}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="process-step"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameProcess; 