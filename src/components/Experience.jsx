import { useState, useRef } from 'react';
import { Calendar, MapPin, Briefcase, Award, Users, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const journeyCategories = ['All', 'Internship', 'Leadership', 'Organization', 'Activities & Competition'];

const journeyList = [
  {
    id: 0,
    role: 'Intern – QA Digitalization (Design & Frontend Development)',
    organization: 'PT Jatim Autocomp Indonesia (JAI)',
    category: 'Internship',
    period: 'Jun 2026 – Present',
    location: 'Pasuruan, Indonesia',
    icon: Code2,
    isHighlight: true,
    desc: 'Berkolaborasi dalam tim (2 orang) mengembangkan 2 sistem digitalisasi Quality Assurance berbasis web menggunakan Laravel, PostgreSQL, Tailwind CSS, dan Alpine.js. Berperan utama di UI/UX design dan frontend development, serta cross-functional membantu pengembangan backend.',
    bullets: [
      'MOTTO-audit: mendigitalisasi proses audit genba dari pencatatan manual berbasis kertas menjadi sepenuhnya paperless — mencakup 5S Standard, Change Point Management, dan License System.',
      'Monitoring Defect: sistem pelaporan & monitoring defect real-time untuk area Final Assy dan Pre Assy, menggantikan proses manual berbasis Excel.',
    ],
  },
  {
    id: 1,
    role: 'Public Relations',
    organization: 'IAMBSH',
    category: 'Organization',
    period: 'Dec 2025 – Present',
    location: 'Sidoarjo, Indonesia',
    icon: Users,
    desc: 'Mengelola komunikasi internal dan eksternal organisasi, membangun hubungan dengan para pemangku kepentingan, serta mengawasi citra publik IAMBSH.',
  },
  {
    id: 2,
    role: 'Public Relations',
    organization: 'SUKSESI HIMIT PENS',
    category: 'Activities & Competition',
    period: 'Dec 2025 – Feb 2026',
    location: 'Surabaya, Indonesia',
    icon: Users,
    desc: 'Mengelola komunikasi publik untuk Pemilihan Ketua Himpunan (PPU), bertindak sebagai penghubung antara panitia dan mahasiswa guna memastikan transparansi dan kelancaran alur informasi.',
  },
  {
    id: 3,
    role: 'Public Relations',
    organization: 'ITDS INSIGHT X WELCOME PARTY',
    category: 'Activities & Competition',
    period: 'Aug 2025',
    location: 'Surabaya, Indonesia',
    icon: Users,
    desc: 'Mengelola komunikasi publik dan publikasi acara, serta membangun hubungan dengan pemangku kepentingan internal dan eksternal untuk memastikan kelancaran jalannya acara.',
  },
  {
    id: 4,
    role: 'Sekretaris',
    organization: 'PKM-CENTER PENS',
    category: 'Organization',
    period: 'Jan 2025 – Des 2025',
    location: 'Surabaya, Indonesia',
    icon: Briefcase,
    desc: 'Mengelola administrasi persuratan, sistem dokumentasi internal, serta alur pengajuan proposal Program Kreativitas Mahasiswa (PKM) di tingkat kampus.',
  },
  {
    id: 5,
    role: 'Bendahara',
    organization: 'UKM TAEKWONDO PENS',
    category: 'Organization',
    period: 'Jan 2025 – Des 2025',
    location: 'Surabaya, Indonesia',
    icon: Briefcase,
    desc: 'Mengelola pembukuan keuangan organisasi, menyusun anggaran operasional tahunan, dan mengawasi transparansi alokasi dana kejuaraan taekwondo.',
  },
  {
    id: 6,
    role: 'Liaison Officer (LO)',
    organization: 'PKKMB X Technogear PENS 2025',
    category: 'Activities & Competition',
    period: 'Jul – Agu 2025',
    location: 'Surabaya, Indonesia',
    icon: Users,
    desc: 'Bertindak sebagai narahubung utama untuk pemateri eksternal, tamu kehormatan, dan panitia teknis pada rangkaian orientasi mahasiswa baru dan pameran inovasi teknologi.',
  },
  {
    id: 7,
    role: 'Director Strategic Resources Management',
    organization: 'Society of Renewable Energy (SRE) PENS',
    category: 'Leadership',
    period: 'Des 2024 – Sep 2025',
    location: 'Surabaya, Indonesia',
    icon: Briefcase,
    desc: 'Merancang strategi alokasi sumber daya manusia dan logistik guna mendukung program riset energi terbarukan di lingkungan civitas akademika.',
  },
  {
    id: 8,
    role: 'Participant UI/UX Design Competition',
    organization: 'Multimedia in Action 2025',
    category: 'Activities & Competition',
    period: 'Sep – Nov 2025',
    location: 'Surabaya, Indonesia',
    icon: Award,
    desc: 'Merancang solusi prototipe digital interaktif berbasis pemecahan masalah nyata pengguna melalui proses riset cepat dan validasi antarmuka di Figma.',
  },
  {
    id: 9,
    role: 'Participant',
    organization: 'Mini Class X E-CODE HIMIT PENS',
    category: 'Activities & Competition',
    period: 'Mar 2025',
    location: 'Surabaya, Indonesia',
    icon: Award,
    desc: 'Mengikuti workshop coding dan desain untuk mengembangkan kemampuan teknis dan desain digital dalam lingkungan pembelajaran kolaboratif.',
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredJourney = activeCategory === 'All'
    ? journeyList
    : journeyList.filter((j) => j.category === activeCategory);

  useGSAP(() => {
    gsap.from('.experience-header-box', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power3.out',
    });

    const items = gsap.utils.toArray('.timeline-node-item');
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out',
      });
    });
  }, { scope: containerRef });

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header-wrap experience-header-box">
          <span className="mono-tag">04 // JOURNEY TIMELINE</span>
          <h2 className="section-title">
            Experience, Leadership &amp; <span className="gradient-text">Milestones.</span>
          </h2>
          <p className="section-subtitle">
            Dari pengalaman magang industri hingga kepemimpinan organisasi, kepanitiaan, dan ajang kompetisi.
          </p>

          {/* Filter Pills */}
          <div className="experience-filter-pills">
            {journeyCategories.map((cat) => (
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

        {/* Vertical Timeline Track */}
        <div className="timeline-track-wrap">
          <div className="timeline-spine-line" />

          <div className="timeline-list">
            {filteredJourney.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={`timeline-node-item${item.isHighlight ? ' timeline-node-highlight' : ''}`}>
                  {/* Glowing Node Marker */}
                  <div className={`timeline-node-marker${item.isHighlight ? ' marker-highlight' : ''}`}>
                    <span className="marker-halo" />
                    <span className="marker-core" />
                  </div>

                  {/* Content Card */}
                  <div className={`timeline-card${item.isHighlight ? ' timeline-card-featured' : ''}`}>
                    {item.isHighlight && (
                      <div className="timeline-featured-badge">
                        <Code2 size={13} />
                        <span>Industry Internship · 2026</span>
                      </div>
                    )}
                    <div className="timeline-card-header">
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                      <span className="timeline-category-tag">{item.category}</span>
                    </div>

                    <div className="timeline-role-title-row">
                      <h3 className="timeline-role-text">{item.role}</h3>
                      <div className="timeline-org-row">
                        <span className="org-name-text">{item.organization}</span>
                        <span className="org-dot">·</span>
                        <span className="org-loc-text">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="timeline-body-desc">{item.desc}</p>

                    {item.bullets && (
                      <ul className="timeline-bullet-list">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="timeline-bullet-item">
                            <span className="bullet-dash">–</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.isHighlight && (
                      <div className="timeline-confidential-note">
                        <span className="conf-lock-icon">🔒</span>
                        <span>Detail proyek bersifat rahasia milik perusahaan — tidak dapat ditampilkan secara visual.</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
