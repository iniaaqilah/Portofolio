import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Public Relations",
    company: "IAMBSH",
    location: "Sidoarjo, Indonesia",
    duration: "Dec 2025 - Present",
    description: "Managing internal and external communications, building relationships with stakeholders, and overseeing public image."
  },
  {
    id: 2,
    role: "Public Relations",
    company: "SUKSESI HIMIT PENS",
    location: "Surabaya, Indonesia",
    duration: "Dec 2025 - Feb 2026",
    description: "Managed public communications for the Student Chair Election (PPU), acting as a liaison between the committee and students to ensure transparency and effective information flow."
  },
  {
    id: 3,
    role: "Public Relations",
    company: "ITDS INSIGHT X WELCOME PARTY",
    location: "Surabaya, Indonesia",
    duration: "Aug 2025",
    description: "Managed public communications and event publications, while building relationships with internal and external stakeholders to ensure a successful event."
  },
  {
    id: 4,
    role: "Secretary",
    company: "PKM-CENTER PENS",
    location: "Surabaya, Indonesia",
    duration: "Jan - Dec 2025",
    description: "Handled administrative tasks, documentation, and coordination of student creativity programs (PKM) activities."
  },
  {
    id: 5,
    role: "Treasurer",
    company: "UKM TAEKWONDO PENS",
    location: "Surabaya, Indonesia",
    duration: "Jan - Dec 2025",
    description: "Managed the organization's financial records, budgeting for events, and ensuring transparent financial operations."
  },
  {
    id: 6,
    role: "Liaison Officer",
    company: "PKKMB X Technogear PENS 2025",
    location: "Surabaya, Indonesia",
    duration: "Jul - Aug 2025",
    description: "Acted as the main point of contact for external parties and participants during the orientation and tech events."
  },
  {
    id: 7,
    role: "Director Strategic Resources Management",
    company: "Society of Renewable Energy PENS",
    location: "Surabaya, Indonesia",
    duration: "Dec 2024 - Sep 2025",
    description: "Led strategic planning and resource allocation to support renewable energy initiatives within the campus."
  },
  {
    id: 8,
    role: "Participant UI/UX Design",
    company: "Multimedia in Action 2025",
    location: "Surabaya, Indonesia",
    duration: "Sep - Nov 2025",
    description: "Competed in the UI/UX design competition, showcasing problem-solving and prototyping skills."
  },
  {
    id: 9,
    role: "Participant",
    company: "Mini Class X E-CODE HIMIT PENS",
    location: "Surabaya, Indonesia",
    duration: "March 2025",
    description: "Participated in coding and design workshops to enhance technical and design capabilities."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience.</h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="exp-left">
                <h4 className="exp-company">{exp.company}</h4>
                {exp.location && <span className="exp-location">{exp.location}</span>}
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <div className="exp-right">
                <h3>{exp.role}</h3>
                {Array.isArray(exp.description) ? (
                  <ul className="exp-bullets">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
