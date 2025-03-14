import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Benefits.css';

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    {
      icon: "🎮",
      title: "Уникальная игровая механика",
      description: "Погружение в реалистичные сценарии управления проектами через увлекательный игровой процесс."
    },
    {
      icon: "🛡️",
      title: "Безопасная среда",
      description: "Возможность ошибаться и учиться на ошибках без риска для реальных проектов."
    },
    {
      icon: "⚖️",
      title: "Баланс теории и практики",
      description: "Эффективное сочетание теоретических знаний и практического применения в игровых сценариях."
    },
    {
      icon: "🔄",
      title: "Адаптация под реальные задачи",
      description: "Программа разработана с учетом актуальных вызовов, с которыми сталкиваются IT-менеджеры."
    }
  ];

  return (
    <section id="benefits" className="benefits section">
      <div className="bg-pattern"></div>
      <div className="container">
        <div className="benefits-content">
          <motion.div
            className="benefits-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Почему выбирают нас?</h2>
            <p className="benefits-description">
              Наша программа предлагает уникальный подход к обучению менеджменту, сочетая теорию с практикой в игровой форме.
            </p>
            <div className="benefits-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Успешных выпускников</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Средняя оценка</span>
              </div>
            </div>
            <motion.a 
              href="#" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="benefit-card"
                variants={itemVariants}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="benefits-image"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="/images/benefits.png" 
            alt="Преимущества программы" 
            className="img-fluid"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/1200x400/3498db/ffffff?text=Преимущества+программы";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 