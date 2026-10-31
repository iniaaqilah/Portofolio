import { useState, useRef } from 'react';
import { Palette, Code, Layers, Sparkles, Terminal, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories = ['All', 'UI/UX Design', 'Development', 'Tools & Workflow'];

const skillsData = [
  // UI/UX Design
  { name: 'UI/UX Design', category: 'UI/UX Design', level: 'Expert', desc: 'Design Systems, User Flow, Wireframes & Hi-Fi Mockups', icon: Palette },
  { name: 'Prototyping & Interaction', category: 'UI/UX Design', level: 'Advanced', desc: 'Micro-interactions, smart animations, user journeys', icon: Layers },
  { name: 'User & Usability Testing', category: 'UI/UX Design', level: 'Proficient', desc: 'Task analysis, heuristic evaluation, user interviews', icon: Sparkles },
  { name: 'Design Systems', category: 'UI/UX Design', level: 'Advanced', desc: 'Atomic design, tokenization, reusable component libraries', icon: Layers },

  // Development
  { name: 'React.js', category: 'Development', level: 'Intermediate', desc: 'Component architecture, Hooks, State management', icon: Code },
  { name: 'Flutter', category: 'Development', level: 'Intermediate', desc: 'Cross-platform mobile apps, widget trees, Material/Cupertino', icon: Cpu },
  { name: 'Tailwind CSS', category: 'Development', level: 'Advanced', desc: 'Utility-first modern styling, responsive layouts', icon: Code },
  { name: 'Laravel & PHP', category: 'Development', level: 'Working Knowledge', desc: 'REST API, MVC structure, routing, backend integration', icon: Terminal },
  { name: 'HTML5 & CSS3 / JS', category: 'Development', level: 'Advanced', desc: 'Semantic markup, modern ES6+, CSS animations', icon: Code },
  { name: 'SQL & Database', category: 'Development', level: 'Proficient', desc: 'Database normalization, relational queries (MySQL)', icon: Terminal },

  // Tools & Workflow
  { name: 'Figma', category: 'Tools & Workflow', level: 'Expert', desc: 'Auto-layout, Components, Variants, FigJam research', icon: Palette },
  { name: 'Framer', category: 'Tools & Workflow', level: 'Proficient', desc: 'Interactive websites, scroll animations, responsive designs', icon: Layers },
  { name: 'Git & GitHub', category: 'Tools & Workflow', level: 'Proficient', desc: 'Version control, branch workflows, collaborative projects', icon: Terminal },
  { name: 'Notion & Miro', category: 'Tools & Workflow', level: 'Advanced', desc: 'Documentation, sprint tracking, ideation mapping', icon: Sparkles },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  useGSAP(() => {
    gsap.from('.skills-header-box', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Re-run per card every time filteredSkills changes
    const cards = gsap.utils.toArray('.skill-card-item');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: i * 0.05,
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });
  }, { scope: containerRef, dependencies: [filteredSkills] });

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header-wrap skills-header-box">
          <span className="mono-tag">02 // SKILLS & TECH</span>
          <h2 className="section-title">
            What I Work With & <span className="gradient-text">Master.</span>
          </h2>
          <p className="section-subtitle">
            Kombinasi kemampuan riset visual, arsitektur desain antarmuka, serta pemahaman teknis pemrograman.
          </p>

          {/* Category Tabs */}
          <div className="skills-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-deck-grid">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-card-item">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <Icon size={18} />
                  </div>
                  <span className={`level-pill level-${skill.level.toLowerCase().replace(/\s+/g, '-')}`}>
                    {skill.level}
                  </span>
                </div>
                <h3 className="skill-card-name">{skill.name}</h3>
                <p className="skill-card-desc">{skill.desc}</p>
                <div className="skill-glow-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
