import { useRef } from 'react';
import { GraduationCap, Compass, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.about-narrative', {
      scrollTrigger: {
        trigger: '.about-narrative',
        start: 'top 80%',
      },
      opacity: 0,
      x: -30,
      duration: 0.85,
      ease: 'power3.out',
    });

    const cards = gsap.utils.toArray('.bento-feature-card');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.12,
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="about" className="about-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header-wrap about-header">
          <span className="mono-tag">01 // ABOUT ME</span>
          <h2 className="section-title">
            Bridging Logic and Empathy through <span className="gradient-text">Design.</span>
          </h2>
          <p className="section-subtitle">
            Mengenal perjalanan, dedikasi, serta pendekatan saya dalam merancang produk digital.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-content-grid">
          {/* Left: Detailed Story */}
          <div className="about-narrative">
            <p className="lead-paragraph">
              Halo! Saya <strong>Aqilah Salamatuddin</strong>, mahasiswa semester 4 Program Studi D3 Teknik Informatika di{' '}
              <span className="highlight-text">Politeknik Elektronika Negeri Surabaya (PENS)</span>.
            </p>
            <p className="body-paragraph">
              Ketertarikan saya pada dunia UI/UX design berakar dari antusiasme terhadap cara manusia berinteraksi dengan teknologi. 
              Bagi saya, antarmuka bukan sekadar estetika visual di layar, melainkan jembatan komunikasi yang harus efisien, 
              intuitif, dan memberikan nilai nyata bagi penggunanya.
            </p>
            <p className="body-paragraph">
              Dengan latar belakang studi teknik informatika, saya tidak hanya memahami proses riset dan desain wireframe/mockup 
              pada Figma, namun juga memahami batasan teknis serta cara mengimplementasikannya ke dalam kode frontend (React, Flutter, dsb.).
            </p>

            <div className="about-quote-box">
              <Sparkles size={18} className="quote-icon" />
              <p className="quote-text">
                "Good design is not just what looks good and feels good. Good design is what works seamlessly."
              </p>
            </div>
          </div>

          {/* Right: Bento Highlights */}
          <div className="about-bento-grid">
            {/* Education Card */}
            <div className="bento-feature-card bento-edu">
              <div className="bento-card-icon">
                <GraduationCap size={22} />
              </div>
              <div className="bento-card-body">
                <span className="bento-card-badge">Pendidikan</span>
                <h4 className="bento-card-title">PENS Surabaya</h4>
                <p className="bento-card-desc">
                  D3 Teknik Informatika (2023 - Sekarang). Fokus pada Software Engineering & Interaksi Manusia Komputer.
                </p>
              </div>
            </div>

            {/* Focus Card */}
            <div className="bento-feature-card bento-focus">
              <div className="bento-card-icon">
                <Compass size={22} />
              </div>
              <div className="bento-card-body">
                <span className="bento-card-badge">Fokus Utama</span>
                <h4 className="bento-card-title">UI/UX & Product Design</h4>
                <p className="bento-card-desc">
                  User Research, Information Architecture, Interactive Prototyping, Design System, & Usability Testing.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bento-feature-card bento-loc">
              <div className="bento-card-icon">
                <MapPin size={22} />
              </div>
              <div className="bento-card-body">
                <span className="bento-card-badge">Domisili</span>
                <h4 className="bento-card-title">Surabaya, Indonesia</h4>
                <p className="bento-card-desc">
                  Terbuka untuk posisi Remote, Hybrid, maupun On-site (Magang / Internship / Freelance).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
