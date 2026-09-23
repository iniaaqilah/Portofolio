import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/profile.JPG';

const MagneticButton = ({ children, className, href, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25
    }
  }
};

const maskLineVariants = {
  hidden: { y: '115%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="hero" className="hero-centered">
      <div className="container">
        <motion.div 
          className="hero-content relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating UI Elements */}
          <div className="floating-badge top-badge">✨ UI Design</div>
          <div className="floating-badge bottom-badge">🎯 UX Research</div>
          
          <div className="hero-profile">
            <div className={`profile-img-placeholder ${!imgLoaded ? 'shimmer' : ''}`}>
              {heroImg ? (
                <img 
                  src={heroImg} 
                  alt="Aqilah Salamatuddin" 
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setImgLoaded(true)}
                  className={imgLoaded ? 'loaded' : 'loading'}
                />
              ) : (
                <User size={40} color="var(--accent)" />
              )}
            </div>
            <div className="hero-badge">Available for Work</div>
          </div>
          
          <motion.h1
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="mask-wrapper">
              <motion.span variants={maskLineVariants} className="text-gradient mask-inner">
                UI/UX Designer
              </motion.span>
            </span>
            <br/>
            <span className="mask-wrapper">
              <motion.span variants={maskLineVariants} className="mask-inner">
                & Informatics Student.
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            id="about" 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            I am a 4th semester Informatics student focused on UI/UX design, passionate about creating user-centered digital products through research, design, and collaboration.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={20} />
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-secondary">
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
