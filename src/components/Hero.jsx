import { useState, useEffect, useRef, memo } from 'react';
import { ArrowRight, Copy, Check, Sparkles, MapPin, Terminal, Layers } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import heroImg from '../assets/profile.JPG';

gsap.registerPlugin(useGSAP);

const roles = [
  'UI/UX & Product Designer',
  'Informatics Student @ PENS',
  'Design System Explorer',
  'Mobile & Web Interface Enthusiast'
];

// Isolated Typewriter to prevent re-rendering the parent Hero
const TypewriterText = memo(() => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <div className="hero-typewriter-box">
      <Terminal size={16} className="typewriter-icon" />
      <span className="typewriter-text">{displayed}</span>
      <span className="typewriter-caret">_</span>
    </div>
  );
});

// Isolated Clock to prevent re-rendering the parent Hero
const LiveClock = memo(() => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-live-time">
      <MapPin size={12} />
      <span>Surabaya · {currentTime}</span>
    </div>
  );
});

const Hero = () => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('iniaaqilah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        gsap.set(
          ['.hero-badge-tag', '.hero-headline', '.hero-typewriter-box', '.hero-summary', '.hero-actions-row', '.tech-stack-strip', '.hero-card-frame'], 
          { clearProps: 'opacity,transform,scale' }
        );
      }
    });

    tl.fromTo('.hero-badge-tag', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo('.hero-headline', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.25')
      .fromTo('.hero-typewriter-box', { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-summary', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-actions-row', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo('.tech-stack-strip', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      .fromTo('.hero-card-frame', { opacity: 0, scale: 0.95, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.4');

  }, { scope: containerRef, dependencies: [] });

  return (
    <section id="hero" className="hero-section" ref={containerRef}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro */}
          <div className="hero-intro">
            {/* Status Pill */}
            <div className="hero-badge-tag">
              <span className="live-beacon">
                <span className="beacon-ping"></span>
                <span className="beacon-dot"></span>
              </span>
              <span>Available for Work & Collaboration</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Crafting Digital Products with <span className="gradient-text">Precision & Empathy.</span>
            </h1>

            {/* Interactive Typewriter (Isolated) */}
            <TypewriterText />

            {/* Description */}
            <p className="hero-summary">
              Mahasiswa D3 Teknik Informatika di <strong>Politeknik Elektronika Negeri Surabaya (PENS)</strong>. 
              Berfokus pada UI/UX Design, Human-Centered Interaction, dan Prototype Development 
              untuk menciptakan produk digital yang intuitif dan impactful.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn btn-outline copy-email-btn"
                aria-label="Copy Email"
                title="Copy iniaaqilah@gmail.com"
              >
                {copied ? <Check size={16} color="#00e5ff" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Tech Stack Strip */}
            <div className="tech-stack-strip">
              <span className="tech-strip-label">TECH & TOOLS:</span>
              <div className="tech-pill-list">
                {['Figma', 'Flutter', 'React', 'Expo', 'Tailwind', 'Supabase', 'Laravel'].map((tech) => (
                  <span key={tech} className="tech-pill-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bento Profile Card */}
          <div className="hero-showcase">
            <div className="hero-card-frame">
              {/* Card Header info */}
              <div className="card-top-bar">
                <div className="card-window-controls">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                {/* Live Clock (Isolated) */}
                <LiveClock />
              </div>

              {/* Profile Image & Orbit badges */}
              <div className="card-avatar-wrap">
                <div className="avatar-glow-ring"></div>
                <img 
                  src={heroImg} 
                  alt="Aqilah Salamatuddin" 
                  className="card-avatar-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }} 
                />

                {/* Floating Chips */}
                <div className="orbit-badge badge-top-right">
                  <Sparkles size={13} className="text-secondary" />
                  <span>UI/UX Designer</span>
                </div>
                <div className="orbit-badge badge-bottom-left">
                  <Layers size={13} className="text-primary" />
                  <span>PENS Informatics</span>
                </div>
              </div>

              {/* Profile Info details */}
              <div className="card-meta">
                <h3 className="card-name">Aqilah Salamatuddin</h3>
                <p className="card-title">Digital Product Designer & Developer</p>
                
                <div className="card-quick-stats">
                  <div className="card-stat-box">
                    <span className="stat-val gradient-text">4+</span>
                    <span className="stat-sub">Live Projects</span>
                  </div>
                  <div className="card-stat-box">
                    <span className="stat-val gradient-text">8+</span>
                    <span className="stat-sub">Org Roles</span>
                  </div>
                  <div className="card-stat-box">
                    <span className="stat-val gradient-text">PENS</span>
                    <span className="stat-sub">Surabaya, ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
