import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      number: 1,
      title: "Комплексный подход",
      description: "Программа сочетает теорию менеджмента и интерактивное обучение через игру, основанную на реальных сценариях управления IT-командами.",
      icon: "📊"
    },
    {
      number: 2,
      title: "Погружение в реальность",
      description: "Участники управляют подразделением крупной компании, решая задачи за один год игрового времени.",
      icon: "🌐"
    },
    {
      number: 3,
      title: "Ключевые навыки",
      description: "Освоение принципов Agile, итерационного планирования и управления прибылью, репутацией и моралью команды.",
      icon: "🔑"
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="bg-pattern"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">О программе</span>
          <h2 className="section-title">Что это за программа?</h2>
          <p className="section-subtitle">
            Наша программа разработана для эффективного обучения менеджменту через практический опыт
          </p>
        </motion.div>
        
        <div className="features-content">
          <motion.div 
            className="features-image-container"
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="image-decoration-circle"></div>
            <div className="image-decoration-dots"></div>
            <img 
              src="/images/features-image.png" 
              alt="Программа обучения" 
              className="features-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/600x500/3498db/ffffff?text=Программа+обучения";
              }}
            />
          </motion.div>
          
          <motion.div 
            className="features-list"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="feature-icon-container">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-number">{feature.number}</div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="feature-card-decoration"></div>
              </motion.div>
            ))}
            
            <motion.div 
              className="features-cta"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Узнать больше
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features; 