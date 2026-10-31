import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Smartphone, Monitor, Eye, X, CheckCircle2, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Projects.css';

import tbc1 from '../assets/Tbc Tracker.png';
import tbc2 from '../assets/Tbc - tracker 2.png';
import invest1 from '../assets/home.png';
import invest2 from '../assets/invest page.png';
import investInfo from '../assets/Info Invest.png';
import wudi1 from '../assets/Home-wudi.png';
import wudi2 from '../assets/Awal-wudi.png';
import roompens from '../assets/Roompens.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectCategories = ['All', 'Mobile App', 'UI/UX Design', 'Web Platform', 'Internship'];

const projectsData = [
  {
    id: 1,
    index: '01',
    title: 'Wudi.',
    subtitle: 'Task & Project Management Application',
    category: 'Mobile App',
    badge: '🚀 Production Live · Google Play',
    desc: 'Aplikasi manajemen tugas dan proyek yang dipublikasikan di Google Play Store. Dirancang untuk meningkatkan efisiensi dan produktivitas tim maupun individu melalui antarmuka pengguna yang terstruktur dan responsif.',
    problem: 'Pengguna sering kesulitan melacak progres tugas dan berkolaborasi dalam tim kecil akibat antarmuka aplikasi manajemen proyek yang terlalu rumit dan kaku.',
    solution: 'Membangun desain antarmuka berbasis Kanban & checklist dinamis dengan hierarki visual yang jelas, waktu respons instan, dan onboarding ramah pemula.',
    deliverables: ['Mobile UI/UX Design System', 'Component Atomic Library', 'Play Store Release'],
    tags: ['UI/UX Design', 'Task Management', 'Google Play', 'Mobile'],
    link: 'https://play.google.com/store/apps/details?id=com.pdbl.wudi&hl=id',
    linkType: 'Google Play Store',
    images: [wudi1, wudi2],
    accentColor: '#6c63ff',
    icon: Smartphone,
  },
  {
    id: 2,
    index: '02',
    title: 'Invest.aja',
    subtitle: 'Investment & Financial Literacy Platform',
    category: 'UI/UX Design',
    badge: '📊 Fintech Research & System',
    desc: 'Konsep platform investasi digital modern dengan pendekatan inklusif bagi investor pemula hingga berpengalaman. Memimpin tim perancangan antarmuka, user persona, serta visual flow transaksi.',
    problem: 'Tingginya angka kegagalan investasi pemula akibat minimnya edukasi terintegrasi dan grafik portofolio yang membingungkan.',
    solution: 'Menghadirkan antarmuka modular dengan visualisasi grafik interaktif, simulasi risiko terpandu, dan ringkasan portofolio real-time.',
    deliverables: ['User Research & Personas', 'High-Fidelity Mockups', 'Interactive Flow Prototype'],
    tags: ['UI/UX Design', 'Team Leadership', 'Fintech', 'Design System'],
    link: 'https://docs.google.com/document/d/13ocGjWGZeo9jRGq6-WmgdaUqnpsLxVPA/edit?usp=sharing&ouid=105684600472687024898&rtpof=true&sd=true',
    linkType: 'Case Study Document',
    images: [invest1, invest2, investInfo],
    accentColor: '#00e5ff',
    icon: Eye,
  },
  {
    id: 3,
    index: '03',
    title: 'TBC Tracker',
    subtitle: 'Tuberculosis Treatment & Medication Companion',
    category: 'Mobile App',
    badge: '🩺 Health Tech Companion',
    desc: 'Aplikasi pendamping kesehatan pasien tuberkulosis untuk memantau konsistensi konsumsi obat, pencatatan gejala harian, serta pengingat jadwal minum obat guna mempercepat proses pemulihan.',
    problem: 'Pengobatan TB membutuhkan kepatuhan minum obat harian selama minimal 6 bulan berturut-turut tanpa boleh terputus.',
    solution: 'Fitur reminder minum obat cerdas dengan verifikasi harian, pencatatan efek samping, dan tombol darurat kontak fasilitas kesehatan terdekat.',
    deliverables: ['User Journey Mapping', 'Mobile App Mockup', 'High-Contrast Accessibility'],
    tags: ['UI/UX Design', 'Health Tech', 'Symptom Tracking', 'Mobile App'],
    link: 'https://drive.google.com/file/d/1yr7ojFozn1gHR2E8d3YfG6VS2-lvoeZz/view?usp=drive_link',
    linkType: 'Prototype & Case Study',
    images: [tbc1, tbc2],
    accentColor: '#ff4d9d',
    icon: Smartphone,
  },
  {
    id: 4,
    index: '04',
    title: 'RoomPens',
    subtitle: 'Campus Room & Class Reservation System',
    category: 'Web Platform',
    badge: '🏛️ Campus Infrastructure',
    desc: 'Platform web manajemen peminjaman ruang kelas dan laboratorium di lingkungan Politeknik Elektronika Negeri Surabaya. Mempermudah dosen dan mahasiswa dalam mengecek ketersediaan ruangan secara real-time.',
    problem: 'Jadwal penggunaan laboratorium kampus sering kali bentrok dan proses peminjaman manual via form kertas memakan waktu berhari-hari.',
    solution: 'Dashboard terpusat berbasis web dengan visualisasi kalender live, status ketersediaan ruangan, dan notifikasi persetujuan instan.',
    deliverables: ['Web Dashboard IA', 'Design Token System', 'Booking Management Flow'],
    tags: ['UI/UX Design', 'Web Application', 'Booking System', 'Academic'],
    link: 'https://drive.google.com/file/d/1--LiNPMlvLJf43L7VU-YSuKtWISsHY8C/view?usp=drive_link',
    linkType: 'Case Study & Design',
    images: [roompens],
    accentColor: '#00ff88',
    icon: Monitor,
  },
  {
    id: 5,
    index: '05',
    title: 'MOTTO-audit',
    subtitle: 'Paperless Genba Audit System — 5S, Change Point & License',
    category: 'Internship',
    badge: '🔒 Internal System · PT JAI',
    isConfidential: true,
    desc: 'Sistem manajemen audit genba paperless yang mendigitalisasi pencatatan manual di lantai produksi. Mencakup tiga pilar: 5S Standard, Change Point Management (perubahan parameter 4M), dan License System (sertifikasi kompetensi operator). Auditor mengakses dari iPad di lantai produksi; admin dari komputer kantor.',
    problem: 'Proses audit genba dilakukan dengan formulir kertas — data tidak real-time dan sulit dianalisis secara terpusat.',
    solution: 'Platform web dengan penjadwalan audit, kontrol akses per proses, upload foto bukti, referensi SOP terintegrasi, riwayat audit, dan ekspor Excel. Diakses auditor via iPad, admin via komputer kantor.',
    deliverables: ['UI/UX Design & Prototyping (Figma)', 'Frontend (Tailwind CSS)', 'Backend (Laravel + PostgreSQL)', 'Audit Modules: 5S Standard, Change Point, License System'],
    tags: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'UI/UX Design'],
    link: 'https://www.linkedin.com/in/aqilah-salamatuddin/',
    linkType: 'LinkedIn Profile',
    images: [],
    accentColor: '#6c63ff',
    icon: Building2,
    internalLabel: 'MOTTO-audit',
  },
  {
    id: 6,
    index: '06',
    title: 'Defect & Rework Monitor',
    subtitle: 'Unified QA Monitoring — Internal Defect (Final & Pre Assy) + Rework (Final Assy)',
    category: 'Internship',
    badge: '🔒 Internal System · PT JAI',
    isConfidential: true,
    desc: 'Platform monitoring QA terpadu yang menggabungkan pelaporan internal defect dan rework dalam satu sistem. Internal defect mencakup Final Assy dan Pre Assy; rework hanya di Final Assy. Operator menginput dari ponsel; dashboard admin real-time menampilkan DPM, Pareto, dan drill-down per konveyor/carline.',
    problem: 'Internal defect direkap manual di Excel, sementara rework dikelola di sistem tersendiri yang terpisah — sehingga tidak ada visibilitas terpadu antar keduanya di area produksi.',
    solution: 'Satu platform dengan role-based access (operator, rework, admin), dashboard DPM real-time dengan 3 mode analisis (gabungan, defect, rework), Pareto drill-down per konveyor/carline, dan target DPM yang dapat dikonfigurasi admin.',
    deliverables: ['UI/UX Design & Frontend (Alpine.js + Tailwind CSS)', 'Backend (Laravel + PostgreSQL)', 'Real-Time Dashboard & Charts (Chart.js)', 'Role-Based Access: Operator, Rework, Admin'],
    tags: ['Laravel', 'PostgreSQL', 'Alpine.js', 'Tailwind CSS', 'Chart.js'],
    link: 'https://www.linkedin.com/in/aqilah-salamatuddin/',
    linkType: 'LinkedIn Profile',
    images: [],
    accentColor: '#00e5ff',
    icon: Building2,
    internalLabel: 'Defect & Rework Monitor',
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalActiveImg, setModalActiveImg] = useState(0);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setModalActiveImg(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  useGSAP(() => {
    gsap.from('.projects-header-box', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power3.out',
    });

    const cards = gsap.utils.toArray('.project-showcase-card');
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, { scope: containerRef });

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header-wrap projects-header-box">
          <span className="mono-tag">03 // SELECTED WORK</span>
          <h2 className="section-title">
            Featured Case Studies & <span className="gradient-text">Projects.</span>
          </h2>
          <p className="section-subtitle">
            Karya terpilih yang menggabungkan riset mendalam, sistem desain terstruktur, dan implementasi digital nyata.
          </p>

          {/* Filter Tabs */}
          <div className="projects-filter-pills">
            {projectCategories.map((cat) => (
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

        {/* Projects Cards List */}
        <div className="projects-stack-list">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className={`project-showcase-card${project.isConfidential ? ' project-card-confidential' : ''}`}
                style={{ '--proj-color': project.accentColor }}
              >
                {/* Visual Preview Side */}
                <div
                  className="project-gallery-box"
                  onClick={() => setSelectedProject(project)}
                  title="Klik untuk melihat Case Study"
                  style={{ cursor: 'pointer' }}
                >
                  {project.isConfidential ? (
                    /* Confidential placeholder */
                    <div className="project-confidential-placeholder">
                      <div className="conf-inner-card">
                        <span className="conf-internal-badge">INTERNAL SYSTEM</span>
                        <h4 className="conf-system-title">{project.internalLabel || project.title}</h4>
                        <p className="conf-company-label">PT Jatim Autocomp Indonesia</p>
                        <p className="conf-no-visual-note">Tampilan sistem tidak dipublikasikan · sistem internal perusahaan</p>
                      </div>
                    </div>
                  ) : (
                    <div className="project-stage-showcase">
                      {project.images.slice(0, 2).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} Preview ${i + 1}`}
                          className={`project-stage-img stage-img-${i} ${project.images.length === 1 ? 'single-img' : ''}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Quick View Hover Tag — semua project */}
                  <div className="quick-view-hover-pill">
                    <Eye size={14} />
                    <span>Case Study Preview</span>
                  </div>

                  <div className="stage-glow-backdrop" />
                </div>

                {/* Details Side */}
                <div className="project-detail-box">
                  <div className="project-badge-row">
                    <span className="project-index-num">{project.index}</span>
                    <span className="project-cat-tag">
                      <Icon size={13} />
                      {project.category}
                    </span>
                    <span className="project-status-chip">{project.badge}</span>
                  </div>

                  <h3 className="project-heading">{project.title}</h3>
                  <p className="project-subheading">{project.subtitle}</p>
                  
                  <p className="project-description-text">{project.desc}</p>

                  <div className="project-chips-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary project-preview-btn"
                    >
                      <Eye size={15} />
                      <span>Case Study Preview</span>
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-visit-btn"
                    >
                      <span>{project.linkType}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Study Modal Quick View */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="project-modal-card" 
            onClick={(e) => e.stopPropagation()}
            style={{ '--modal-accent': selectedProject.accentColor }}
          >
            {/* Modal Header */}
            <div className="modal-header-bar">
              <div className="modal-header-meta">
                <span className="modal-index">{selectedProject.index} // CASE STUDY</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-sub">{selectedProject.subtitle}</span>
              </div>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Two Columns */}
            <div className="modal-body-layout">
              {/* Left: Gallery or Confidential Placeholder */}
              <div className="modal-gallery-column">
                {selectedProject.isConfidential ? (
                  <div className="modal-conf-placeholder">
                    <div className="conf-inner-card modal-conf-card">
                      <span className="conf-internal-badge">INTERNAL SYSTEM</span>
                      <h4 className="conf-system-title">{selectedProject.internalLabel || selectedProject.title}</h4>
                      <p className="conf-company-label">PT Jatim Autocomp Indonesia</p>
                      <p className="conf-no-visual-note">Tampilan sistem tidak dipublikasikan · sistem internal perusahaan</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="modal-featured-image-box">
                      <img
                        src={selectedProject.images[modalActiveImg] || selectedProject.images[0]}
                        alt={`${selectedProject.title} Screenshot ${modalActiveImg + 1}`}
                        className="modal-featured-img"
                      />
                    </div>

                    {selectedProject.images.length > 1 && (
                      <div className="modal-thumb-row">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            className={`modal-thumb-btn ${modalActiveImg === idx ? 'active' : ''}`}
                            onClick={() => setModalActiveImg(idx)}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Right: Problem & Solution Breakdown */}
              <div className="modal-content-column">
                <div className="modal-section-block">
                  <h4 className="modal-sec-title">The Challenge</h4>
                  <p className="modal-sec-desc">{selectedProject.problem}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-sec-title">The Solution & Impact</h4>
                  <p className="modal-sec-desc">{selectedProject.solution}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-sec-title">Key Deliverables</h4>
                  <ul className="modal-deliverables-list">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="modal-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer-cta">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary modal-action-btn"
                  >
                    <span>{selectedProject.isConfidential ? 'View LinkedIn Profile' : `Launch ${selectedProject.linkType}`}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
