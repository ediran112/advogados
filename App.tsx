import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Steps } from './components/Steps';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Bio } from './components/Bio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Global Intersection Observer for Scroll Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of element is visible
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Select all elements with reveal classes
    const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans antialiased text-gray-100 bg-brand-dark selection:bg-brand-gold selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Steps />
        <Services />
        <Testimonials />
        <Bio />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;