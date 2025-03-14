import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Audience.css';

const Audience: React.FC = () => {
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

  const audienceGroups = [
    {
      icon: "👨‍💼",
      title: "Начинающие менеджеры",
      description: "Получите необходимые навыки управления проектами и командой с нуля.",
      color: "var(--primary-color)"
    },
    {
      icon: "👩‍💻",
      title: "Руководители",
      description: "Освойте принципы Agile и современные подходы к управлению IT-проектами.",
      color: "#e74c3c"
    },
    {
      icon: "👥",
      title: "Команды",
      description: "Улучшите процессы взаимодействия и повысьте эффективность работы.",
      color: "#2ecc71"
    },
    {
      icon: "🚀",
      title: "Будущие лидеры",
      description: "Подготовьтесь к управленческой роли, развивая необходимые компетенции.",
      color: "#f39c12"
    }
  ];

  return (
    <section id="audience" className="audience section">
      <div className="bg-pattern"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Целевая аудитория</span>
          <h2 className="section-title">Для кого эта программа?</h2>
          <p className="section-subtitle">
            Наша программа разработана для различных специалистов, стремящихся развивать навыки управления
          </p>
        </motion.div>
        
        <motion.div 
          className="audience-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {audienceGroups.map((group, index) => (
            <motion.div 
              key={index} 
              className="audience-card"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="audience-icon-wrapper"
                style={{ background: `linear-gradient(135deg, ${group.color}20 0%, ${group.color}10 100%)` }}
              >
                <div className="audience-icon">{group.icon}</div>
                <div 
                  className="icon-background"
                  style={{ background: `${group.color}` }}
                ></div>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div 
                className="card-overlay"
                style={{ background: `${group.color}` }}
              ></div>
              <div className="card-decoration"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="audience-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-decoration-circle"></div>
          <div className="cta-decoration-dots"></div>
          <h3>Готовы начать свой путь к успешному управлению проектами?</h3>
          <p>Присоединяйтесь к нашей программе и получите все необходимые навыки для успешной карьеры в управлении IT-проектами</p>
          <motion.a 
            href="#" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Записаться на программу
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience; 