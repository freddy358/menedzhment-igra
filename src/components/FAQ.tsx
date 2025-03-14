import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const faqItems: FAQItem[] = [
    {
      question: 'Нужно ли иметь опыт управления?',
      answer: 'Нет, программа подходит как для начинающих, так и для опытных менеджеров. Мы предоставляем все необходимые базовые знания и постепенно усложняем задачи.'
    },
    {
      question: 'Сколько времени занимает обучение?',
      answer: 'Полный курс рассчитан на один полный учебный день. Курс включает обучение теории ведения Agile проектов и практическую часть в формате игры.'
    },
    {
      question: 'Что делать, если я не знаком с Agile?',
      answer: 'Программа включает вводный модуль по основам Agile. Вы познакомитесь с ключевыми принципами и практиками перед погружением в игровые сценарии.'
    },
    {
      question: 'Какие материалы я получу после обучения?',
      answer: 'После обучения вы получите сертификат о прохождении курса, доступ к онлайн-материалам, шаблоны документов для управления проектами и возможность участвовать в ежемесячных онлайн-встречах сообщества.'
    },
    {
      question: 'Можно ли пройти обучение онлайн?',
      answer: 'Да, мы предлагаем как очный, так и онлайн формат обучения. Онлайн-версия включает все те же материалы и практические задания, адаптированные для дистанционного формата.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="faq" className="faq section">
      <div className="bg-pattern"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Часто задаваемые вопросы</h2>
          <p className="section-subtitle">
            Ответы на популярные вопросы о нашей программе обучения
          </p>
        </motion.div>

        <div className="faq-content">
          <motion.div 
            className="faq-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/faq-image.png" 
              alt="Часто задаваемые вопросы" 
              className="img-fluid"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/500x600/3498db/ffffff?text=FAQ";
              }}
            />
          </motion.div>

          <motion.div 
            className="faq-container"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                variants={itemVariants}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="faq-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Остались вопросы?</h3>
          <p>Свяжитесь с нами, и мы с радостью на них ответим</p>
          <motion.a 
            href="#" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться с нами
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 