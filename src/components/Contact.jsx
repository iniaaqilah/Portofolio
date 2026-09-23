import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import './Contact.css';

const contactContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <motion.div 
            className="contact-content"
            variants={contactContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={contactItemVariants}>Let's create together.</motion.h2>
            <motion.p variants={contactItemVariants}>
              Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
            </motion.p>
            
            <motion.div className="contact-links" variants={contactItemVariants}>
              <a href="mailto:iniaaqilah@gmail.com" className="btn btn-primary">
                Email Me
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aqilah-salamatuddin/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aqilah Salamatuddin. Crafted with intention.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
