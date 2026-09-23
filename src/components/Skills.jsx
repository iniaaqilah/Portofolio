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

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Skills.</h2>
          <p style={{ marginBottom: '2rem' }}>The tools and disciplines I use to bring ideas to life.</p>
          
          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-tag"
                variants={tagVariants}
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
