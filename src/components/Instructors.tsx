import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Instructors.css';

interface InstructorsProps {
  language: 'ru' | 'en';
}

const Instructors: React.FC<InstructorsProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      title: 'Кто ведёт программу?',
      subtitle: 'Наши преподаватели — эксперты с богатым опытом в управлении IT-проектами и внедрении Agile',
      experiencedManagers: 'Опытные менеджеры',
      managersDesc: 'Наши преподаватели имеют многолетний опыт управления IT-проектами в ведущих компаниях.',
      agileMethodologists: 'Методологи Agile',
      agileDesc: 'Эксперты по гибким методологиям с сертификациями и практическим опытом внедрения.',
      gameDevelopers: 'Разработчики игры',
      developersDesc: 'Специалисты с реальным опытом управления IT-командами, создавшие уникальную обучающую платформу.',
      yearsExperience: 'Лет опыта',
      coursesHeld: 'Проведенных курсов',
      practicalExperience: 'Практический опыт'
    },
    en: {
      title: 'Who leads the program?',
      subtitle: 'Our instructors are experts with extensive experience in IT project management and Agile implementation',
      experiencedManagers: 'Experienced Managers',
      managersDesc: 'Our instructors have many years of experience managing IT projects in leading companies.',
      agileMethodologists: 'Agile Methodologists',
      agileDesc: 'Experts in agile methodologies with certifications and practical implementation experience.',
      gameDevelopers: 'Game Developers',
      developersDesc: 'Specialists with real experience in managing IT teams who created a unique training platform.',
      yearsExperience: 'Years of experience',
      coursesHeld: 'Courses held',
      practicalExperience: 'Practical experience'
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

  const instructors = [
    {
      avatar: "👨‍💼",
      title: language === 'ru' ? t.experiencedManagers : t.experiencedManagers,
      description: language === 'ru' ? t.managersDesc : t.managersDesc,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      avatar: "👩‍🏫",
      title: language === 'ru' ? t.agileMethodologists : t.agileMethodologists,
      description: language === 'ru' ? t.agileDesc : t.agileDesc,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      avatar: "👨‍💻",
      title: language === 'ru' ? t.gameDevelopers : t.gameDevelopers,
      description: language === 'ru' ? t.developersDesc : t.developersDesc,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="instructors" className="instructors section">
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
        
        <motion.div 
          className="instructors-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {instructors.map((instructor, index) => (
            <motion.div 
              key={index} 
              className="instructor-card"
              variants={itemVariants}
            >
              <div className="instructor-image">
                <img 
                  src={instructor.image} 
                  alt={instructor.title} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('fallback');
                      parent.innerHTML = `<div class="instructor-avatar">${instructor.avatar}</div>`;
                    }
                  }}
                />
              </div>
              <div className="instructor-info">
                <h3>{instructor.title}</h3>
                <p>{instructor.description}</p>
                <div className="instructor-social">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="card-decoration"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="instructors-badges"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="badge">
            <span className="badge-number">10+</span>
            <span className="badge-text">{t.yearsExperience}</span>
          </div>
          <div className="badge">
            <span className="badge-number">50+</span>
            <span className="badge-text">{t.coursesHeld}</span>
          </div>
          <div className="badge">
            <span className="badge-number">100%</span>
            <span className="badge-text">{t.practicalExperience}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors; 