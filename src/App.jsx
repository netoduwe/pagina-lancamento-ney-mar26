import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Masterclass from './components/Masterclass';
import SocialProof from './components/SocialProof';
import Solution from './components/Solution';
import Bio from './components/Bio';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import ConsumerWeek from './components/ConsumerWeek';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App bg-spotlight" style={{ minHeight: '100vh', width: '100%' }}>
      <Header />
      <Hero />
      <PainPoints />
      <Masterclass />
      <ConsumerWeek />
      <Solution />
      <CourseDetails />
      <Bio />
      <SocialProof />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
