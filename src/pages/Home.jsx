import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      {/* Animated gradient background blobs */}
      <div className="bg-gradient"></div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default Home;
