import { motion } from 'framer-motion';
import './Projects.css';
import tbc1 from '../assets/Tbc Tracker.png';
import tbc2 from '../assets/Tbc - tracker 2.png';
import invest1 from '../assets/home.png';
import invest2 from '../assets/invest page.png';
import wudi1 from '../assets/Home-wudi.png';
import wudi2 from '../assets/Awal-wudi.png';
import roompens from '../assets/Roompens.png';

const projects = [
  {
    id: 1,
    title: 'Wudi.',
    desc: 'Task & Project Management App available on Google Play. Designed a comprehensive task management application to boost productivity for individuals and teams through seamless organization.',
    features: ['UI/UX Design', 'Task Management', 'Mobile App'],
    link: 'https://play.google.com/store/apps/details?id=com.pdbl.wudi&hl=id',
    images: [wudi1, wudi2]
  },
  {
    id: 2,
    title: 'Invest.aja',
    desc: 'An investment and financial platform concept. Led the design team to create an intuitive and accessible interface for novice and experienced investors alike.',
    features: ['UI/UX Design', 'Team Leadership', 'Fintech'],
    link: 'https://docs.google.com/document/d/13ocGjWGZeo9jRGq6-WmgdaUqnpsLxVPA/edit?usp=sharing&ouid=105684600472687024898&rtpof=true&sd=true',
    images: [invest1, invest2]
  },
  {
    id: 3,
    title: 'TBC Tracker',
    desc: 'A health companion app to assist patients in their recovery journey, focusing on consistency, medication tracking, and daily motivational support.',
    features: ['UI/UX Design', 'Health Tech', 'Symptom Tracking'],
    link: 'https://drive.google.com/file/d/1yr7ojFozn1gHR2E8d3YfG6VS2-lvoeZz/view?usp=drive_link',
    images: [tbc1, tbc2]
  },
  {
    id: 4,
    title: 'RoomPens Website',
    desc: 'A streamlined web application for booking classes and managing room schedules within the campus environment. Designed to simplify the reservation process for students and lecturers.',
    features: ['UI/UX Design', 'Web Application', 'Booking System'],
    link: 'https://drive.google.com/file/d/1--LiNPMlvLJf43L7VU-YSuKtWISsHY8C/view?usp=drive_link',
    images: [roompens]
  },
  {
    id: 5,
    title: 'MOTTO-audit',
    desc: 'Sistem manajemen audit genba paperless untuk PT Jatim Autocomp Indonesia, mendigitalisasi proses audit dari pencatatan manual berbasis kertas. Mencakup 3 pilar: 5S Standard, Change Point Management, dan License System.',
    features: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'UI/UX Design'],
    link: '',
    images: []
  },
  {
    id: 6,
    title: 'Monitoring Defect',
    desc: 'Sistem pelaporan dan monitoring defect real-time untuk area Final Assy dan Pre Assy di PT Jatim Autocomp Indonesia, menggantikan proses manual berbasis Excel.',
    features: ['Laravel', 'PostgreSQL', 'Alpine.js', 'Tailwind CSS'],
    link: '',
    images: []
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Selected Projects.</h2>
        </motion.div>
        
        <div className="projects-grid" style={{ perspective: '2000px' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -300 : 300, 
                y: 150,
                rotateY: index % 2 === 0 ? -30 : 30,
                rotateZ: index % 2 === 0 ? -5 : 5,
                scale: 0.7
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1.2,
                delay: 0.1
              }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {project.link ? (
                  <a 
                    href={project.link} 
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case Study ↗
                  </a>
                ) : null}
              </div>
              <div className="project-visual">
                {project.images && project.images.length > 0 ? (
                  <div className="project-images-container">
                    {project.images.map((img, i) => (
                      <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} className={`project-img img-${i}`} />
                    ))}
                  </div>
                ) : (
                  <div className="mockup-shape">
                    <div className="mockup-fallback">
                      <span className="mockup-fallback-badge">Internal System</span>
                      <h4 className="mockup-fallback-title">{project.title}</h4>
                      <span className="mockup-fallback-sub">PT Jatim Autocomp Indonesia</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
