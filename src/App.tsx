import React from 'react';
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
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <GameProcess />
      <Audience />
      <Instructors />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
