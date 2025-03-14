import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

interface HeaderProps {
  language: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const element = document.getElementById(targetId || '');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navItems = [
    { name: language === 'ru' ? 'О программе' : 'About', id: 'features' },
    { name: language === 'ru' ? 'Обучение' : 'Training', id: 'game-process' },
    { name: language === 'ru' ? 'Для кого' : 'For whom', id: 'audience' },
    { name: language === 'ru' ? 'Преподаватели' : 'Instructors', id: 'instructors' },
    { name: language === 'ru' ? 'Преимущества' : 'Benefits', id: 'benefits' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Логотип */}
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            <span className="text-gradient">
              {language === 'ru' ? 'Менеджмент' : 'Management'}
            </span>
            {language === 'ru' ? 'Игра' : 'Game'}
          </h1>
        </motion.div>

        {/* Кнопка мобильного меню */}
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигационное меню */}
        <AnimatePresence>
          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <div className="nav-backdrop" onClick={closeMenu} />
            
            <motion.div 
              className="nav-content"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={`#${item.id}`} 
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                
                {/* Кнопка переключения языка */}
                <motion.li
                  className="nav-language-switcher"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button 
                    onClick={() => {
                      onLanguageChange(language === 'ru' ? 'en' : 'ru');
                      closeMenu();
                    }}
                    className="nav-lang-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'ru' ? 'EN' : 'RU'}
                  </motion.button>
                </motion.li>
              </ul>

              {/* Социальные ссылки */}
              <div className="nav-footer">
                <div className="social-links">
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
          </nav>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 