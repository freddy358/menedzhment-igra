import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="bg-pattern"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>
            <span className="text-gradient">Погрузись в реальность</span> управления: учись, играя!
          </h1>
          <p>
            Стань лидером, способным управлять IT-проектами в условиях неопределённости. 
            Наша программа основывается на реальных принципах Agile, моделируя вызовы и 
            задачи менеджеров IT-компаний.
          </p>
          <div className="hero-buttons">
            <motion.a 
              href="#" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Попробовать бесплатно
            </motion.a>
            <motion.a 
              href="#" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на программу
            </motion.a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Выпускников</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">97%</span>
              <span className="stat-label">Положительных отзывов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Лет опыта</span>
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
            src="/images/hero-image.png" 
            alt="Управление IT-проектами" 
            className="img-fluid hero-img"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/500x350/3498db/ffffff?text=Управление+IT-проектами";
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