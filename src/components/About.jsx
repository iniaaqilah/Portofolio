import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about-text">
            I am a D3 Informatics Engineering student at PENS (Politeknik Elektronika Negeri Surabaya). I have a strong passion for <span className="highlight">UI/UX, problem solving, and digital product design</span>. I enjoy turning complex problems into simple, beautiful, and intuitive interface designs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
