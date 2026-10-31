import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Preloader.css';

gsap.registerPlugin(useGSAP);

const statusSteps = [
  { threshold: 0, text: 'INITIALIZING CREATIVE SYSTEM...' },
  { threshold: 25, text: 'PARSING UI/UX DESIGN TOKENS...' },
  { threshold: 55, text: 'ASSEMBLING INTERACTION PROTOCOLS...' },
  { threshold: 85, text: 'FINALIZING PORTFOLIO EXPERIENCE...' },
  { threshold: 100, text: 'SYSTEM READY. WELCOME.' }
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(statusSteps[0].text);
  const containerRef = useRef(null);
  const counterObj = useRef({ value: 0 });

  useGSAP(() => {
    const tl = gsap.timeline();

    // Entrance: Fade in HUD elements
    tl.fromTo('.hud-frame', 
      { opacity: 0, scale: 0.94 }, 
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
    );

    // Number counter animation from 0 to 100
    gsap.to(counterObj.current, {
      value: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const val = Math.round(counterObj.current.value);
        setProgress(val);

        // Update status text based on progress
        const currentStep = [...statusSteps].reverse().find(s => val >= s.threshold);
        if (currentStep) {
          setStatusText(currentStep.text);
        }
      },
      onComplete: () => {
        // Exit sequence
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });

        exitTl.to('.hud-content-box', {
          opacity: 0,
          y: -30,
          scale: 0.95,
          filter: 'blur(8px)',
          duration: 0.5,
          ease: 'power3.in'
        })
        .to('.preloader-curtain-top', {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut'
        }, '-=0.1')
        .to('.preloader-curtain-bottom', {
          yPercent: 100,
          duration: 0.85,
          ease: 'power4.inOut'
        }, '<')
        .to(containerRef.current, {
          opacity: 0,
          display: 'none',
          duration: 0.1
        });
      }
    });

  }, { scope: containerRef, dependencies: [] });

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  return (
    <div className="preloader-overlay" ref={containerRef}>
      {/* Cinematic Split Shutter Curtains */}
      <div className="preloader-curtain preloader-curtain-top"></div>
      <div className="preloader-curtain preloader-curtain-bottom"></div>

      {/* Cyber Grid Background */}
      <div className="preloader-grid"></div>

      {/* HUD Frame Container */}
      <div className="hud-frame">
        {/* Corner Brackets */}
        <span className="corner-cross corner-tl">+</span>
        <span className="corner-cross corner-tr">+</span>
        <span className="corner-cross corner-bl">+</span>
        <span className="corner-cross corner-br">+</span>

        <div className="hud-content-box">
          {/* Top Identifier */}
          <div className="hud-top-meta">
            <div className="hud-beacon">
              <span className="beacon-ping"></span>
              <span className="beacon-dot"></span>
            </div>
            <span className="hud-label">AQILAH SALAMATUDDIN // V2.0</span>
            <span className="hud-badge">PORTFOLIO BOOT</span>
          </div>

          {/* Big Bold Cyber Counter */}
          <div className="hud-counter-wrap">
            <span className="hud-counter-number">
              {progress < 10 ? `0${progress}` : progress}
            </span>
            <span className="hud-counter-percent">%</span>
          </div>

          {/* Glowing Track Progress Bar */}
          <div className="hud-track-container">
            <div 
              className="hud-track-fill" 
              style={{ width: `${progress}%` }}
            >
              <div className="hud-track-glow"></div>
            </div>
          </div>

          {/* Dynamic Console Status Text */}
          <div className="hud-status-row">
            <span className="hud-status-caret">&gt;</span>
            <span className="hud-status-message">{statusText}</span>
          </div>
        </div>

        {/* Skip button for quick browsing */}
        <button className="hud-skip-btn" onClick={handleSkip}>
          Skip Intro [ESC]
        </button>
      </div>
    </div>
  );
};

export default Preloader;
