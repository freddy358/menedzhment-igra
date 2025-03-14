import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('features');

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = ['features', 'game-process', 'audience', 'instructors', 'benefits', 'faq'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'О программе', id: 'features' },
    { name: 'Обучение', id: 'game-process' },
    { name: 'Для кого', id: 'audience' },
    { name: 'Преподаватели', id: 'instructors' },
    { name: 'Преимущества', id: 'benefits' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1>
            <span className="text-gradient">Менеджмент</span> Игра
          </h1>
        </motion.div>
        
        <div className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="nav-backdrop" onClick={closeMenu}></div>
          <motion.div 
            className="nav-content"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  <a 
                    href={`#${item.id}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span 
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="cta-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.a 
                  href="/#contact" 
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Попробовать бесплатно
                </motion.a>
              </motion.li>
            </ul>
            
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
      </div>
    </motion.header>
  );
};

export default Header; 