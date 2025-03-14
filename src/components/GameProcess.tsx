import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './GameProcess.css';

interface GameProcessProps {
  language: 'ru' | 'en';
}

const GameProcess: React.FC<GameProcessProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      title: 'Обучение через игру',
      subtitle: 'Наш уникальный подход сочетает теорию и практику в увлекательном игровом формате',
      step1Title: 'Игра',
      step1Desc: 'Управляйте подразделением, выполняйте задачи, решайте конфликты в реалистичной симуляции.',
      step2Title: 'Обратная связь',
      step2Desc: 'Анализируйте результаты своих решений и корректируйте стратегию.',
      step3Title: 'Обучение',
      step3Desc: 'Изучайте теоретическую часть по менеджменту и Agile методологиям.',
      step4Title: 'Практика',
      step4Desc: 'Отрабатывайте реальные сценарии в игре, планируя и выполняя 6 спринтов.',
      imageAlt: 'Процесс обучения'
    },
    en: {
      title: 'Learning through play',
      subtitle: 'Our unique approach combines theory and practice in an engaging game format',
      step1Title: 'Game',
      step1Desc: 'Manage a division, complete tasks, resolve conflicts in a realistic simulation.',
      step2Title: 'Feedback',
      step2Desc: 'Analyze the results of your decisions and adjust your strategy.',
      step3Title: 'Learning',
      step3Desc: 'Study the theoretical part on management and Agile methodologies.',
      step4Title: 'Practice',
      step4Desc: 'Work through real scenarios in the game, planning and executing 6 sprints.',
      imageAlt: 'Learning process'
    }
  };

  const t = translations[language];

  const steps = [
    {
      number: 1,
      title: t.step1Title,
      description: t.step1Desc,
      icon: <i className="fas fa-gamepad"></i>
    },
    {
      number: 2,
      title: t.step2Title,
      description: t.step2Desc,
      icon: <i className="fas fa-chart-bar"></i>
    },
    {
      number: 3,
      title: t.step3Title,
      description: t.step3Desc,
      icon: <i className="fas fa-book"></i>
    },
    {
      number: 4,
      title: t.step4Title,
      description: t.step4Desc,
      icon: <i className="fas fa-rocket"></i>
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <div className="game-process-content">
          <motion.div 
            className="game-process-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt={t.imageAlt} 
              className="img-fluid"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/500x600/3498db/ffffff?text=Learning+Process";
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