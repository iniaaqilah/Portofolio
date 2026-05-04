import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's create together.</h2>
            <p>Feel free to reach out if you're looking for a designer, have a question, or just want to connect.</p>
            
            <div className="contact-links">
              <a href="mailto:iniaaqilah@gmail.com" className="btn btn-primary">
                Email Me
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aqilah-salamatuddin/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn Profile
              </a>
            </div>
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
