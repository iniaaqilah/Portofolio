import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/profile.JPG';

const Hero = () => {
  return (
    <section id="hero" className="hero-centered">
      <div className="container">
        <motion.div 
          className="hero-content relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating UI Elements */}
          <div className="floating-badge top-badge">✨ UI Design</div>
          <div className="floating-badge bottom-badge">🎯 UX Research</div>
          
          <div className="hero-profile">
            <div className="profile-img-placeholder">
              {heroImg ? (
                <img src={heroImg} alt="Aqilah Salamatuddin" />
              ) : (
                <User size={40} color="#ff6b6b" />
              )}
            </div>
            <div className="hero-badge">Available for Work</div>
          </div>
          
          <h1><span className="text-gradient">UI/UX Designer</span><br/>& Informatics Student.</h1>
          
          <p id="about" className="hero-desc">
            I am a 4th semester Informatics student focused on UI/UX design, passionate about creating user-centered digital products through research, design, and collaboration.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
