import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Instructors.css';

const Instructors: React.FC = () => {
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

  const instructors = [
    {
      avatar: "👨‍💼",
      title: "Опытные менеджеры",
      description: "Наши преподаватели имеют многолетний опыт управления IT-проектами в ведущих компаниях.",
      image: "/images/instructor1.jpg"
    },
    {
      avatar: "👩‍🏫",
      title: "Методологи Agile",
      description: "Эксперты по гибким методологиям с сертификациями и практическим опытом внедрения.",
      image: "/images/instructor2.jpg"
    },
    {
      avatar: "👨‍💻",
      title: "Разработчики игры",
      description: "Специалисты с реальным опытом управления IT-командами, создавшие уникальную обучающую платформу.",
      image: "/images/instructor3.jpg"
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
          <h2 className="section-title">Кто ведёт программу?</h2>
          <p className="section-subtitle">
            Наши преподаватели — эксперты с богатым опытом в управлении IT-проектами и внедрении Agile
          </p>
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
                  <a href="#" className="social-link"><i className="fab fa-linkedin">🔗</i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter">🐦</i></a>
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
            <span className="badge-text">Лет опыта</span>
          </div>
          <div className="badge">
            <span className="badge-number">50+</span>
            <span className="badge-text">Проведенных курсов</span>
          </div>
          <div className="badge">
            <span className="badge-number">100%</span>
            <span className="badge-text">Практический опыт</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors; 