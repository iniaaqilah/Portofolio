import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* High-end Creative Cyber Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Ambient Cyber Grid & Glow Layers */}
      <div className="bg-grid-pattern" aria-hidden="true" />
      <div className="bg-radial-glow" aria-hidden="true" />
      <div className="bg-glow-bottom" aria-hidden="true" />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default Home;
