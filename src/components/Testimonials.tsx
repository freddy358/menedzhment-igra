import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

interface TestimonialsProps {
  language: 'ru' | 'en';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const translations = {
    ru: {
      title: 'Что говорят участники?',
      subtitle: 'Отзывы наших выпускников о программе обучения и полученных результатах',
      description: 'Наши выпускники отмечают значительное улучшение навыков управления проектами и командой после прохождения программы. Многие успешно внедрили принципы Agile в своих компаниях и добились повышения эффективности работы.',
      testimonial1: {
        quote: 'Игровой формат помог мне лучше понять принципы Agile и научиться применять их на практике.',
        author: 'Алексей',
        position: 'Project Manager',
        company: 'Tech Solutions'
      },
      testimonial2: {
        quote: 'Благодаря программе я научилась эффективно управлять командой и ресурсами в условиях неопределенности.',
        author: 'Мария',
        position: 'Team Lead',
        company: 'Digital Agency'
      },
      testimonial3: {
        quote: 'Отличный баланс теории и практики. Рекомендую всем, кто хочет развиваться в управлении IT-проектами.',
        author: 'Дмитрий',
        position: 'Product Owner',
        company: 'Startup Hub'
      },
      testimonial4: {
        quote: 'Программа дала мне практические инструменты для эффективного управления проектами и командой.',
        author: 'Елена',
        position: 'Scrum Master',
        company: 'Innovation Lab'
      }
    },
    en: {
      title: 'What do participants say?',
      subtitle: 'Feedback from our graduates about the training program and the results obtained',
      description: 'Our graduates note a significant improvement in project and team management skills after completing the program. Many have successfully implemented Agile principles in their companies and achieved increased work efficiency.',
      testimonial1: {
        quote: 'The game format helped me better understand Agile principles and learn to apply them in practice.',
        author: 'Alex',
        position: 'Project Manager',
        company: 'Tech Solutions'
      },
      testimonial2: {
        quote: 'Thanks to the program, I learned to effectively manage a team and resources in conditions of uncertainty.',
        author: 'Maria',
        position: 'Team Lead',
        company: 'Digital Agency'
      },
      testimonial3: {
        quote: 'Great balance of theory and practice. I recommend it to everyone who wants to develop in IT project management.',
        author: 'Dmitry',
        position: 'Product Owner',
        company: 'Startup Hub'
      },
      testimonial4: {
        quote: 'The program gave me practical tools for effective project and team management.',
        author: 'Elena',
        position: 'Scrum Master',
        company: 'Innovation Lab'
      }
    }
  };

  const t = translations[language];

  const testimonials = [
    {
      avatar: <i className="fas fa-user-tie"></i>,
      quote: t.testimonial1.quote,
      author: t.testimonial1.author,
      position: t.testimonial1.position,
      company: t.testimonial1.company
    },
    {
      avatar: <i className="fas fa-user-alt"></i>,
      quote: t.testimonial2.quote,
      author: t.testimonial2.author,
      position: t.testimonial2.position,
      company: t.testimonial2.company
    },
    {
      avatar: <i className="fas fa-user-astronaut"></i>,
      quote: t.testimonial3.quote,
      author: t.testimonial3.author,
      position: t.testimonial3.position,
      company: t.testimonial3.company
    },
    {
      avatar: <i className="fas fa-user-graduate"></i>,
      quote: t.testimonial4.quote,
      author: t.testimonial4.author,
      position: t.testimonial4.position,
      company: t.testimonial4.company
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextTestimonial();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevTestimonial();
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="bg-pattern"></div>
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

        <div className="testimonials-content" ref={ref}>
          <motion.div 
            className="testimonial-text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{t.description}</p>
          </motion.div>
          
          <div className="testimonial-slider">
            <div className="slider-container">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div 
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="testimonial-card"
                >
                  <div className="testimonial-avatar">{testimonials[currentIndex].avatar}</div>
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="testimonial-author-info">
                    <p className="testimonial-author">{testimonials[currentIndex].author}</p>
                    <p className="testimonial-position">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="slider-controls">
                <button className="control-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="slider-dots">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index} 
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="control-btn next" onClick={handleNext} aria-label="Next testimonial">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 