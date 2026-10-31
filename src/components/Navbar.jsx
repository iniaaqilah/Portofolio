import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Top scroll progress bar
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? winScroll / height : 0;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrolledRatio})`;
      }

      // Active section observer
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="scroll-progress" className="scroll-progress-bar" />
      
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          {/* Logo brand */}
          <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
            Aqilah<span className="brand-dot">.</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                    {isActive && <span className="nav-active-glow" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Available & Connect */}
          <div className="nav-actions">
            <a
              href="https://www.linkedin.com/in/aqilah-salamatuddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-pill"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="nav-hire-btn"
            >
              <span className="pulse-dot" />
              <span>Hire Me</span>
            </a>

            <button
              className="nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`mobile-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  <span>{item.name}</span>
                  <Sparkles size={14} className="mobile-spark" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
