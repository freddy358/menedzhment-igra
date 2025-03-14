import React from 'react';
import './Footer.css';

interface FooterProps {
  language: 'ru' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const translations = {
    ru: {
      title: 'Менеджмент Игра',
      subtitle: 'Учись управлять IT-проектами через игру',
      navigation: 'Навигация',
      about: 'О программе',
      training: 'Обучение',
      forWhom: 'Для кого',
      instructors: 'Преподаватели',
      information: 'Информация',
      benefits: 'Преимущества',
      testimonials: 'Отзывы',
      faq: 'FAQ',
      contacts: 'Контакты',
      contactUs: 'Связаться с нами',
      email: 'Email: info@menedzhment-igra.ru',
      phone: 'Телефон: +7 (999) 123-45-67',
      rights: 'Все права защищены.'
    },
    en: {
      title: 'Management Game',
      subtitle: 'Learn to manage IT projects through a game',
      navigation: 'Navigation',
      about: 'About',
      training: 'Training',
      forWhom: 'For whom',
      instructors: 'Instructors',
      information: 'Information',
      benefits: 'Benefits',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contacts: 'Contacts',
      contactUs: 'Contact us',
      email: 'Email: info@management-game.com',
      phone: 'Phone: +7 (999) 123-45-67',
      rights: 'All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>{t.navigation}</h3>
              <ul>
                <li><a href="#features">{t.about}</a></li>
                <li><a href="#game-process">{t.training}</a></li>
                <li><a href="#audience">{t.forWhom}</a></li>
                <li><a href="#instructors">{t.instructors}</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>{t.information}</h3>
              <ul>
                <li><a href="#benefits">{t.benefits}</a></li>
                <li><a href="#testimonials">{t.testimonials}</a></li>
                <li><a href="#faq">{t.faq}</a></li>
                <li><a href="#contact">{t.contacts}</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>{t.contactUs}</h3>
              <ul className="contact-info">
                <li>{t.email}</li>
                <li>{t.phone}</li>
              </ul>
              <div className="social-links">
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-vk"></i>
                </a>
                <a href="mailto:info@menedzhment-igra.ru" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {t.title}. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 