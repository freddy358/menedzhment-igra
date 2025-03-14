import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GameProcess from './components/GameProcess';
import Audience from './components/Audience';
import Instructors from './components/Instructors';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  // Function to handle language change from Header component
  const handleLanguageChange = (newLanguage: 'ru' | 'en') => {
    console.log('App: Изменение языка на', newLanguage);
    setLanguage(newLanguage);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  // Load saved language preference on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as 'ru' | 'en' | null;
    if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="App">
      <Header language={language} onLanguageChange={handleLanguageChange} key={`header-${language}`} />
      <Hero language={language} key={`hero-${language}`} />
      <Features language={language} key={`features-${language}`} />
      <GameProcess language={language} key={`game-process-${language}`} />
      <Audience language={language} key={`audience-${language}`} />
      <Instructors language={language} key={`instructors-${language}`} />
      <Benefits language={language} key={`benefits-${language}`} />
      <Testimonials language={language} key={`testimonials-${language}`} />
      <FAQ language={language} key={`faq-${language}`} />
      <Contact language={language} key={`contact-${language}`} />
      <Footer language={language} key={`footer-${language}`} />
    </div>
  );
}

export default App;
