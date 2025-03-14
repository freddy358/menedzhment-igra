import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  language: 'ru' | 'en';
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    ru: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Ответы на популярные вопросы о нашей программе обучения',
      question1: 'Нужно ли иметь опыт управления?',
      answer1: 'Нет, программа подходит как для начинающих, так и для опытных менеджеров. Мы предоставляем все необходимые базовые знания и постепенно усложняем задачи.',
      question2: 'Сколько времени занимает обучение?',
      answer2: 'Полный курс рассчитан на один полный учебный день. Курс включает обучение теории ведения Agile проектов и практическую часть в формате игры.',
      question3: 'Что делать, если я не знаком с Agile?',
      answer3: 'Программа включает вводный модуль по основам Agile. Вы познакомитесь с ключевыми принципами и практиками перед погружением в игровые сценарии.',
      question4: 'Какие материалы я получу после обучения?',
      answer4: 'После обучения вы получите сертификат о прохождении курса, доступ к онлайн-материалам, шаблоны документов для управления проектами и возможность участвовать в ежемесячных онлайн-встречах сообщества.',
      question5: 'Можно ли пройти обучение онлайн?',
      answer5: 'Да, мы предлагаем как очный, так и онлайн формат обучения. Онлайн-версия включает все те же материалы и практические задания, адаптированные для дистанционного формата.',
      ctaTitle: 'Остались вопросы?',
      ctaDesc: 'Свяжитесь с нами, и мы с радостью на них ответим',
      ctaButton: 'Связаться с нами',
      imageAlt: 'Часто задаваемые вопросы'
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to popular questions about our training program',
      question1: 'Do I need management experience?',
      answer1: 'No, the program is suitable for both beginners and experienced managers. We provide all the necessary basic knowledge and gradually increase the complexity of tasks.',
      question2: 'How long does the training take?',
      answer2: 'The full course is designed for one full training day. The course includes training in Agile project management theory and a practical part in a game format.',
      question3: 'What if I\'m not familiar with Agile?',
      answer3: 'The program includes an introductory module on Agile basics. You will learn about key principles and practices before diving into game scenarios.',
      question4: 'What materials will I receive after training?',
      answer4: 'After training, you will receive a course completion certificate, access to online materials, project management document templates, and the opportunity to participate in monthly online community meetings.',
      question5: 'Can I take the training online?',
      answer5: 'Yes, we offer both in-person and online training formats. The online version includes all the same materials and practical tasks, adapted for remote format.',
      ctaTitle: 'Still have questions?',
      ctaDesc: 'Contact us and we will be happy to answer them',
      ctaButton: 'Contact us',
      imageAlt: 'Frequently Asked Questions'
    }
  };

  const t = translations[language];

  const faqItems: FAQItem[] = [
    {
      question: t.question1,
      answer: t.answer1
    },
    {
      question: t.question2,
      answer: t.answer2
    },
    {
      question: t.question3,
      answer: t.answer3
    },
    {
      question: t.question4,
      answer: t.answer4
    },
    {
      question: t.question5,
      answer: t.answer5
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <div className="faq-content">
          <motion.div 
            className="faq-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
              alt={t.imageAlt} 
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
                    <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
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

export default FAQ; 