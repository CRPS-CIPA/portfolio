import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
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
            <span>Pendidikan & Sertifikasi</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="timeline-container">
          {activeTab === 'experience' && (
            <div className="timeline-list">
              {experiences.map((item, index) => (
                <div key={index} className="timeline-item">
                  {/* Timeline Dot & Line */}
                  <div className="timeline-marker">
                    <div className="timeline-dot">
                      <Briefcase size={14} />
                    </div>
                    {index < experiences.length - 1 && <div className="timeline-line" />}
                  </div>

                  {/* Timeline Card */}
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

                    <p className="timeline-description">
                      {item.description}
                    </p>

                    {item.technologies && (
                      <div className="timeline-tags">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="timeline-list">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  {/* Timeline Dot & Line */}
                  <div className="timeline-marker">
                    <div className="timeline-dot">
                      <Award size={14} />
                    </div>
                    {index < education.length - 1 && <div className="timeline-line" />}
                  </div>

                  {/* Timeline Card */}
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

                    <p className="timeline-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
