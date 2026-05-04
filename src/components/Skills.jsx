import { motion } from 'framer-motion';
import './Skills.css';

const skillsList = [
  'UI/UX & Interaction Design',
  'Design Systems & Prototyping',
  'User & Usability Testing',
  'Figma & Framer',
  'Frontend & Mobile Dev (React, Flutter)',
  'Backend & DB (Laravel, SQL)',
  'Team Leadership & Project Management',
  'Analytical Thinking & Problem Solving'
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills & Expertise</h2>
          <p style={{ marginBottom: '2rem' }}>The tools and disciplines I use to bring ideas to life.</p>
          
          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
