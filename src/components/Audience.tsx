import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Audience.css';

interface AudienceProps {
  language: 'ru' | 'en';
}

const Audience: React.FC<AudienceProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      sectionTag: 'Целевая аудитория',
      title: 'Для кого эта программа?',
      subtitle: 'Наша программа разработана для различных специалистов, стремящихся развивать навыки управления',
      group1Title: 'Начинающие менеджеры',
      group1Desc: 'Получите необходимые навыки управления проектами и командой с нуля.',
      group2Title: 'Руководители',
      group2Desc: 'Освойте принципы Agile и современные подходы к управлению IT-проектами.',
      group3Title: 'Команды',
      group3Desc: 'Улучшите процессы взаимодействия и повысьте эффективность работы.',
      group4Title: 'Будущие лидеры',
      group4Desc: 'Подготовьтесь к управленческой роли, развивая необходимые компетенции.',
      ctaTitle: 'Готовы начать свой путь к успешному управлению проектами?',
      ctaDesc: 'Присоединяйтесь к нашей программе и получите все необходимые навыки для успешной карьеры в управлении IT-проектами',
      ctaButton: 'Записаться на программу'
    },
    en: {
      sectionTag: 'Target audience',
      title: 'Who is this program for?',
      subtitle: 'Our program is designed for various professionals seeking to develop management skills',
      group1Title: 'Beginning managers',
      group1Desc: 'Get the necessary project and team management skills from scratch.',
      group2Title: 'Leaders',
      group2Desc: 'Master Agile principles and modern approaches to IT project management.',
      group3Title: 'Teams',
      group3Desc: 'Improve interaction processes and increase work efficiency.',
      group4Title: 'Future leaders',
      group4Desc: 'Prepare for a management role by developing the necessary competencies.',
      ctaTitle: 'Ready to start your journey to successful project management?',
      ctaDesc: 'Join our program and get all the skills you need for a successful career in IT project management',
      ctaButton: 'Register for the program'
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

  const audienceGroups = [
    {
      icon: <i className="fas fa-user-tie"></i>,
      title: t.group1Title,
      description: t.group1Desc,
      color: "var(--primary-color)"
    },
    {
      icon: <i className="fas fa-users-cog"></i>,
      title: t.group2Title,
      description: t.group2Desc,
      color: "#e74c3c"
    },
    {
      icon: <i className="fas fa-users"></i>,
      title: t.group3Title,
      description: t.group3Desc,
      color: "#2ecc71"
    },
    {
      icon: <i className="fas fa-user-graduate"></i>,
      title: t.group4Title,
      description: t.group4Desc,
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
          <span className="section-tag">{t.sectionTag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
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
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaDesc}</p>
          <motion.a 
            href="#contact" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience; 