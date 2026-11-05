import { useState, useRef, useMemo } from 'react';
import { 
  Palette, 
  Code2, 
  Layers, 
  Sparkles, 
  Terminal, 
  Smartphone, 
  Database, 
  Server, 
  GitBranch, 
  FlaskConical, 
  Search, 
  X 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories = [
  'All', 
  'Mobile & Apps', 
  'Frontend & Web', 
  'Backend & DB', 
  'UI/UX Design', 
  'Testing & Tools'
];

const skillsData = [
  // Mobile & Apps
  { 
    name: 'Flutter & Dart', 
    category: 'Mobile & Apps', 
    level: 'Advanced', 
    desc: 'Cross-platform mobile apps, widget trees, Material & Cupertino, declarative routing', 
    icon: Smartphone 
  },
  { 
    name: 'React Native & Expo', 
    category: 'Mobile & Apps', 
    level: 'Intermediate', 
    desc: 'Expo Router, Native UI styling, cross-platform performance, EAS workflows', 
    icon: Layers 
  },
  { 
    name: 'Mobile QA & Architecture', 
    category: 'Mobile & Apps', 
    level: 'Proficient', 
    desc: 'Widget testing, integration testing, Mockito mocks, HTTP JSON serialization', 
    icon: FlaskConical 
  },

  // Frontend & Web
  { 
    name: 'React.js & Vite', 
    category: 'Frontend & Web', 
    level: 'Advanced', 
    desc: 'Component architecture, Hooks, custom state management, SPA optimization', 
    icon: Code2 
  },
  { 
    name: 'Tailwind CSS', 
    category: 'Frontend & Web', 
    level: 'Expert', 
    desc: 'Design token implementation, responsive fluid layouts, utility-first styling', 
    icon: Layers 
  },
  { 
    name: 'Modern JS & HTML5/CSS3', 
    category: 'Frontend & Web', 
    level: 'Advanced', 
    desc: 'Semantic markup, ES6+ asynchronous features, DOM APIs, CSS variables', 
    icon: Code2 
  },
  { 
    name: 'Motion & Interactions', 
    category: 'Frontend & Web', 
    level: 'Advanced', 
    desc: 'GSAP ScrollTrigger, Framer Motion, transition choreography, micro-interactions', 
    icon: Sparkles 
  },

  // Backend & DB
  { 
    name: 'Supabase & BaaS', 
    category: 'Backend & DB', 
    level: 'Intermediate', 
    desc: 'PostgreSQL backend, Auth, Edge Functions, real-time sync, Row-Level Security', 
    icon: Database 
  },
  { 
    name: 'Prisma ORM & PostgreSQL', 
    category: 'Backend & DB', 
    level: 'Intermediate', 
    desc: 'Type-safe schema modeling, migrations, relational queries, DB performance', 
    icon: Database 
  },
  { 
    name: 'Laravel & PHP', 
    category: 'Backend & DB', 
    level: 'Proficient', 
    desc: 'REST APIs, MVC architecture, Eloquent ORM, middleware, DB transactions', 
    icon: Server 
  },
  { 
    name: 'SQL & Database Design', 
    category: 'Backend & DB', 
    level: 'Proficient', 
    desc: 'Schema normalization, relational modeling, indexes, query tuning (MySQL/Postgres)', 
    icon: Database 
  },

  // UI/UX Design
  { 
    name: 'Figma & Design Systems', 
    category: 'UI/UX Design', 
    level: 'Expert', 
    desc: 'Design tokens, auto-layout, atomic design, variant libraries, FigJam workflows', 
    icon: Palette 
  },
  { 
    name: 'Prototyping & Interaction', 
    category: 'UI/UX Design', 
    level: 'Advanced', 
    desc: 'High-fidelity clickable prototypes, user journey mapping, micro-animation specs', 
    icon: Layers 
  },
  { 
    name: 'Usability Testing & Research', 
    category: 'UI/UX Design', 
    level: 'Proficient', 
    desc: 'Heuristic evaluation, task-based user testing, persona creation, user interviews', 
    icon: Sparkles 
  },

  // Testing & Tools
  { 
    name: 'Automated Testing & QA', 
    category: 'Testing & Tools', 
    level: 'Proficient', 
    desc: 'Unit testing, widget tests, regression prevention, TDD methodology', 
    icon: FlaskConical 
  },
  { 
    name: 'Git & GitHub Collaboration', 
    category: 'Testing & Tools', 
    level: 'Advanced', 
    desc: 'Branch workflows, PR reviews, merge conflict resolution, CI automation', 
    icon: GitBranch 
  },
  { 
    name: 'Code Quality & Docs', 
    category: 'Testing & Tools', 
    level: 'Advanced', 
    desc: 'Static analysis, linter configs, clear technical docstrings, clean architecture', 
    icon: Terminal 
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // ponytail: in-memory filter sufficient for <100 items, add debounced web worker if dataset >1000
  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchCat = activeCategory === 'All' || skill.category === activeCategory;
      const matchQuery = !searchQuery.trim() || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  // Header entrance runs only once on mount
  useGSAP(() => {
    gsap.fromTo(
      '.skills-header-box',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  // Animate cards on category change only; search typing updates instantly without layout thrash
  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card-item');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header-wrap skills-header-box">
          <span className="mono-tag">CAPABILITIES & TOOLKIT</span>
          <h2 className="section-title">
            Technical Stack & <span className="gradient-text">Craftsmanship.</span>
          </h2>
          <p className="section-subtitle">
            Integrasi riset desain antarmuka, rekayasa mobile & web, arsitektur database, dan penjaminan kualitas kode.
          </p>

          {/* Controls: Search + Category Pills */}
          <div className="skills-controls-bar">
            <div className="skills-search-wrap">
              <Search size={16} className="skills-search-icon" />
              <input
                type="text"
                placeholder="Cari keahlian (contoh: Flutter, Supabase, React, Figma)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="skills-search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="skills-search-clear"
                  aria-label="Bersihkan pencarian"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="skills-filter-pills">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? skillsData.length 
                  : skillsData.filter((s) => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  >
                    <span>{cat}</span>
                    <span className="filter-pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="skills-empty-state">
            <p>Tidak ada keahlian yang cocok dengan kata kunci "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filter
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Skills;
