import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Менеджмент Игра</h2>
            <p>Учись управлять IT-проектами через игру</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Навигация</h3>
              <ul>
                <li><a href="#features">О программе</a></li>
                <li><a href="#game-process">Обучение</a></li>
                <li><a href="#audience">Для кого</a></li>
                <li><a href="#instructors">Преподаватели</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Информация</h3>
              <ul>
                <li><a href="#benefits">Преимущества</a></li>
                <li><a href="#testimonials">Отзывы</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Связаться с нами</h3>
              <ul className="contact-info">
                <li>Email: info@menedzhment-igra.ru</li>
                <li>Телефон: +7 (999) 123-45-67</li>
              </ul>
              <div className="social-links">
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">💬</a>
                <a href="#" className="social-link">📧</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Менеджмент Игра. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 