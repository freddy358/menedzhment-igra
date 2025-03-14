import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      avatar: "👨‍💻",
      quote: "Игровой формат помог мне лучше понять принципы Agile и научиться применять их на практике.",
      author: "Алексей",
      position: "Project Manager",
      company: "Tech Solutions"
    },
    {
      avatar: "👩‍💼",
      quote: "Благодаря программе я научилась эффективно управлять командой и ресурсами в условиях неопределенности.",
      author: "Мария",
      position: "Team Lead",
      company: "Digital Agency"
    },
    {
      avatar: "👨‍🚀",
      quote: "Отличный баланс теории и практики. Рекомендую всем, кто хочет развиваться в управлении IT-проектами.",
      author: "Дмитрий",
      position: "Product Owner",
      company: "Startup Hub"
    },
    {
      avatar: "👩‍🔬",
      quote: "Программа дала мне практические инструменты для эффективного управления проектами и командой.",
      author: "Елена",
      position: "Scrum Master",
      company: "Innovation Lab"
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
          <h2 className="section-title">Что говорят участники?</h2>
          <p className="section-subtitle">
            Отзывы наших выпускников о программе обучения и полученных результатах
          </p>
        </motion.div>

        <div className="testimonials-content" ref={ref}>
          <motion.div 
            className="testimonial-text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Наши выпускники отмечают значительное улучшение навыков управления проектами и командой 
              после прохождения программы. Многие успешно внедрили принципы Agile в своих компаниях 
              и добились повышения эффективности работы.
            </p>
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
                <button className="control-btn prev" onClick={handlePrev}>
                  &#8592;
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
                    />
                  ))}
                </div>
                <button className="control-btn next" onClick={handleNext}>
                  &#8594;
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