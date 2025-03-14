import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

interface ContactProps {
  language: 'ru' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    ru: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы начать свой путь к успешному управлению проектами?',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      submit: 'Отправить заявку',
      address: 'Адрес',
      addressValue: 'Москва, ул. Примерная, 123',
      emailContact: 'Email',
      phoneContact: 'Телефон',
      success: 'Спасибо! Ваша заявка отправлена.',
      placeholderName: 'Введите ваше имя',
      placeholderEmail: 'Введите ваш email',
      placeholderPhone: 'Введите ваш телефон',
      placeholderMessage: 'Ваше сообщение...'
    },
    en: {
      title: 'Contact us',
      subtitle: 'Ready to start your journey to successful project management?',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Submit request',
      address: 'Address',
      addressValue: 'Moscow, Example St., 123',
      emailContact: 'Email',
      phoneContact: 'Phone',
      success: 'Thank you! Your request has been sent.',
      placeholderName: 'Enter your name',
      placeholderEmail: 'Enter your email',
      placeholderPhone: 'Enter your phone',
      placeholderMessage: 'Your message...'
    }
  };

  const t = translations[language];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <div className="contact-container">
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-check-circle"></i> {t.success}
                </motion.div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.placeholderName}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.placeholderEmail}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{t.phone}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.placeholderPhone}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.placeholderMessage}
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.submit}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>{t.address}</h3>
                  <p>{t.addressValue}</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>{t.emailContact}</h3>
                  <p>info@menedzhment-igra.ru</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>{t.phoneContact}</h3>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="social-links-contact">
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-vk"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 