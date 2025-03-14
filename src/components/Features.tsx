import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';

interface FeaturesProps {
  language: 'ru' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      sectionTag: 'О программе',
      title: 'Что это за программа?',
      subtitle: 'Наша программа разработана для эффективного обучения менеджменту через практический опыт',
      feature1Title: 'Комплексный подход',
      feature1Desc: 'Программа сочетает теорию менеджмента и интерактивное обучение через игру, основанную на реальных сценариях управления IT-командами.',
      feature2Title: 'Погружение в реальность',
      feature2Desc: 'Участники управляют подразделением крупной компании, решая задачи за один год игрового времени.',
      feature3Title: 'Ключевые навыки',
      feature3Desc: 'Освоение принципов Agile, итерационного планирования и управления прибылью, репутацией и моралью команды.',
      learnMore: 'Узнать больше',
      imageAlt: 'Программа обучения'
    },
    en: {
      sectionTag: 'About the program',
      title: 'What is this program?',
      subtitle: 'Our program is designed for effective management training through practical experience',
      feature1Title: 'Comprehensive approach',
      feature1Desc: 'The program combines management theory and interactive learning through a game based on real IT team management scenarios.',
      feature2Title: 'Immersion in reality',
      feature2Desc: 'Participants manage a division of a large company, solving tasks over one year of game time.',
      feature3Title: 'Key skills',
      feature3Desc: 'Mastering Agile principles, iterative planning, and managing profit, reputation, and team morale.',
      learnMore: 'Learn more',
      imageAlt: 'Training program'
    }
  };

  const t = translations[language];

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
      title: language === 'ru' ? t.feature1Title : t.feature1Title,
      description: language === 'ru' ? t.feature1Desc : t.feature1Desc,
      icon: "📊"
    },
    {
      number: 2,
      title: language === 'ru' ? t.feature2Title : t.feature2Title,
      description: language === 'ru' ? t.feature2Desc : t.feature2Desc,
      icon: "🌐"
    },
    {
      number: 3,
      title: language === 'ru' ? t.feature3Title : t.feature3Title,
      description: language === 'ru' ? t.feature3Desc : t.feature3Desc,
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
          <span className="section-tag">{t.sectionTag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt={t.imageAlt} 
              className="features-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/600x500/3498db/ffffff?text=Training+Program";
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
                  <div className="feature-icon">
                    {index === 0 && <i className="fas fa-chart-line"></i>}
                    {index === 1 && <i className="fas fa-globe"></i>}
                    {index === 2 && <i className="fas fa-key"></i>}
                  </div>
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
                href="#contact" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.learnMore}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features; 