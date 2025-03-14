import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  language: 'ru' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  useEffect(() => {
    console.log('Hero: Текущий язык', language);
  }, [language]);

  const translations = {
    ru: {
      title: 'Погрузись в реальность',
      subtitle: 'управления: учись, играя!',
      description: 'Стань лидером, способным управлять IT-проектами в условиях неопределённости. Наша программа основывается на реальных принципах Agile, моделируя вызовы и задачи менеджеров IT-компаний.',
      tryFree: 'Попробовать бесплатно',
      register: 'Записаться на программу',
      graduates: 'Выпускников',
      positiveReviews: 'Положительных отзывов',
      yearsExperience: 'Лет опыта',
      imageAlt: 'Управление IT-проектами'
    },
    en: {
      title: 'Dive into the reality',
      subtitle: 'of management: learn by playing!',
      description: 'Become a leader capable of managing IT projects in conditions of uncertainty. Our program is based on real Agile principles, modeling the challenges and tasks of IT company managers.',
      tryFree: 'Try for free',
      register: 'Register for the program',
      graduates: 'Graduates',
      positiveReviews: 'Positive reviews',
      yearsExperience: 'Years of experience',
      imageAlt: 'IT Project Management'
    }
  };

  const t = translations[language];

  return (
    <section className="hero" id="hero">
      <div className="bg-pattern"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>
            <span className="text-gradient">{t.title}</span> {t.subtitle}
          </h1>
          <p>{t.description}</p>
          <div className="hero-buttons">
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.tryFree}
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.register}
            </motion.a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">{t.graduates}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">97%</span>
              <span className="stat-label">{t.positiveReviews}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">{t.yearsExperience}</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt={t.imageAlt} 
            className="img-fluid hero-img"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/500x350/3498db/ffffff?text=IT+Project+Management";
            }}
          />
          <div className="hero-image-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-dots"></div>
          </div>
        </motion.div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 