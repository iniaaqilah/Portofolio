import { useState, useRef } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, Globe, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('iniaaqilah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(() => {
    gsap.from('.contact-main-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <>
      <section id="contact" className="contact-section" ref={containerRef}>
        <div className="container">
          <div className="contact-main-card">
            {/* Header info */}
            <div className="contact-top-content">
              <span className="mono-tag">GET IN TOUCH</span>
              <h2 className="contact-headline">
                Let's Build Something <span className="gradient-text">Extraordinary.</span>
              </h2>
              <p className="contact-lead">
                Tertarik berdiskusi mengenai proyek UI/UX design, peluang magang, atau sekadar bertukar pikiran? 
                Pintu saya selalu terbuka untuk kolaborasi.
              </p>
            </div>

            {/* Direct action buttons */}
            <div className="contact-actions-deck">
              <a href="mailto:iniaaqilah@gmail.com" className="btn btn-primary">
                Send an Email <Send size={15} />
              </a>
              <button onClick={handleCopy} className="btn btn-secondary contact-copy-btn">
                {copied ? <Check size={16} color="#00e5ff" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy iniaaqilah@gmail.com'}</span>
              </button>
              <a
                href="https://www.linkedin.com/in/aqilah-salamatuddin/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn Profile <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Status & metadata footer */}
            <div className="contact-meta-deck">
              <div className="meta-card">
                <span className="meta-card-label">CURRENT STATUS</span>
                <span className="meta-card-value text-green">
                  <span className="mini-pulse" />
                  Open for Internships & Projects
                </span>
              </div>
              <div className="meta-card">
                <span className="meta-card-label">BASE LOCATION</span>
                <span className="meta-card-value">Surabaya, ID (WIB / UTC+7)</span>
              </div>
              <div className="meta-card">
                <span className="meta-card-label">PREFERRED ROLE</span>
                <span className="meta-card-value">UI/UX Designer · Product Designer</span>
              </div>
            </div>

            {/* Ambient corner light */}
            <div className="contact-glow-orb" />
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="site-footer">
        <div className="container footer-content-row">
          <div className="footer-left">
            <span className="footer-brand">Aqilah<span className="brand-dot">.</span></span>
            <p className="footer-copy">
              Designed & Developed with purpose. Built with React & GSAP.
            </p>
          </div>

          <div className="footer-right">
            <a
              href="https://www.linkedin.com/in/aqilah-salamatuddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <a
              href="mailto:iniaaqilah@gmail.com"
              className="footer-link"
            >
              Email <ArrowUpRight size={13} />
            </a>
            <button onClick={scrollToTop} className="footer-link back-to-top-btn">
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
