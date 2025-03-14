import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Benefits.css';

interface BenefitsProps {
  language: 'ru' | 'en';
}

const Benefits: React.FC<BenefitsProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      title: 'Почему выбирают нас?',
      description: 'Наша программа предлагает уникальный подход к обучению менеджменту, сочетая теорию с практикой в игровой форме.',
      benefit1Title: 'Уникальная игровая механика',
      benefit1Desc: 'Погружение в реалистичные сценарии управления проектами через увлекательный игровой процесс.',
      benefit2Title: 'Безопасная среда',
      benefit2Desc: 'Возможность ошибаться и учиться на ошибках без риска для реальных проектов.',
      benefit3Title: 'Баланс теории и практики',
      benefit3Desc: 'Эффективное сочетание теоретических знаний и практического применения в игровых сценариях.',
      benefit4Title: 'Адаптация под реальные задачи',
      benefit4Desc: 'Программа разработана с учетом актуальных вызовов, с которыми сталкиваются IT-менеджеры.',
      statLabel1: 'Успешных выпускников',
      statLabel2: 'Средняя оценка',
      learnMore: 'Узнать больше',
      imageAlt: 'Преимущества программы'
    },
    en: {
      title: 'Why choose us?',
      description: 'Our program offers a unique approach to management training, combining theory with practice in a game format.',
      benefit1Title: 'Unique game mechanics',
      benefit1Desc: 'Immersion in realistic project management scenarios through engaging gameplay.',
      benefit2Title: 'Safe environment',
      benefit2Desc: 'The ability to make mistakes and learn from them without risk to real projects.',
      benefit3Title: 'Balance of theory and practice',
      benefit3Desc: 'Effective combination of theoretical knowledge and practical application in game scenarios.',
      benefit4Title: 'Adaptation to real tasks',
      benefit4Desc: 'The program is designed with current challenges faced by IT managers in mind.',
      statLabel1: 'Successful graduates',
      statLabel2: 'Average rating',
      learnMore: 'Learn more',
      imageAlt: 'Program benefits'
    }
  };

  const t = translations[language];

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
      icon: <i className="fas fa-gamepad"></i>,
      title: t.benefit1Title,
      description: t.benefit1Desc
    },
    {
      icon: <i className="fas fa-shield-alt"></i>,
      title: t.benefit2Title,
      description: t.benefit2Desc
    },
    {
      icon: <i className="fas fa-balance-scale"></i>,
      title: t.benefit3Title,
      description: t.benefit3Desc
    },
    {
      icon: <i className="fas fa-sync-alt"></i>,
      title: t.benefit4Title,
      description: t.benefit4Desc
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
            <h2 className="section-title">{t.title}</h2>
            <p className="benefits-description">{t.description}</p>
            <div className="benefits-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">{t.statLabel1}</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">{t.statLabel2}</span>
              </div>
            </div>
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.learnMore}
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt={t.imageAlt} 
            className="img-fluid"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/1200x400/3498db/ffffff?text=Program+Benefits";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 