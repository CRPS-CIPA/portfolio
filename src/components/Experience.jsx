import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Award, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, education, certificate } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Untuk modal gambar

  // Fungsi tutup modal
  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.classList.add('modal-open'); // Kunci halaman saat modal terbuka
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove('modal-open'); // Buka kunci saat modal ditutup
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <span className="section-badge">Jejak Karir & Edukasi</span>
          <h2 className="section-title">
            Pengalaman & <span className="gradient-text">Riwayat Karir</span>
          </h2>
          <p className="section-subtitle">
            Perjalanan profesional, kontribusi nyata, serta latar belakang pendidikan yang membentuk keahlian saya.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="experience-tabs">
          <button
            onClick={() => setActiveTab('experience')}
            className={`experience-tab-btn ${activeTab === 'experience' ? 'experience-tab-active' : ''}`}
          >
            <Briefcase size={18} />
            <span>Pengalaman Kerja</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`experience-tab-btn ${activeTab === 'education' ? 'experience-tab-active' : ''}`}
          >
            <GraduationCap size={18} />
            <span>Pendidikan</span>
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`experience-tab-btn ${activeTab === 'certificate' ? 'experience-tab-active' : ''}`}
          >
            <Award size={18} />
            <span>Sertifikat</span>
          </button>
        </div>

        {/* Konten Tab */}
        <div className="timeline-container">
          {/* === PENGALAMAN KERJA === */}
          {activeTab === 'experience' && (
            <div className="timeline-list">
              {experiences.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"><Briefcase size={14} /></div>
                    {index < experiences.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="glass-card timeline-card hover-float">
                    <div className="timeline-card-header">
                      <div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <div className="timeline-company-row">
                          <Building size={14} className="text-accent" />
                          <span className="timeline-company">{item.company}</span>
                        </div>
                      </div>
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                    {item.technologies && (
                      <div className="timeline-tags">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="badge">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* === PENDIDIKAN === */}
          {activeTab === 'education' && (
            <div className="timeline-list">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"><GraduationCap size={14} /></div>
                    {index < education.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="glass-card timeline-card hover-float">
                    <div className="timeline-card-header">
                      <div>
                        <h3 className="timeline-role">{item.degree}</h3>
                        <div className="timeline-company-row">
                          <GraduationCap size={15} className="text-accent" />
                          <span className="timeline-company">{item.institution}</span>
                        </div>
                      </div>
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* === ✅ SERTIFIKAT (BENTUK KARTU BARIS + KLIK UNTUK BUKA GAMBAR) === */}
          {activeTab === 'certificate' && (
            <div className="certificate-grid">
              {certificate.map((item, index) => (
                <div
                  key={index}
                  className="glass-card certificate-card hover-float"
                  onClick={() => openModal(item.image)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="certificate-header">
                    <div className="certificate-date">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="certificate-title">{item.title}</h3>
                    <p className="certificate-issuer">{item.issuer}</p>
                    <p className="certificate-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* === ✅ MODAL / POP-UP GAMBAR SERTIFIKAT === */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="sertifikat" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}