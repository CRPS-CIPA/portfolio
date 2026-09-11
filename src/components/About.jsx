import React from 'react';
import { Code2, Palette, Zap, Users, MapPin, Mail, CheckCircle2, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon name strings to Lucide components
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
  Users: Users,
};

// Helper untuk memastikan avatar valid (baik hasil import objek, path string relatif / publik, maupun URL)
const resolveAvatarSrc = (src) => {
  if (!src) return '/foto.png';
  if (typeof src !== 'string') return src;
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return src;
  if (src.startsWith('assets/')) return '/' + src;
  if (!src.startsWith('/') && !src.startsWith('.')) return '/' + src;
  return src;
};

export default function About() {
  const { personal, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Tentang Saya</span>
          <h2 className="section-title">
            Mendedikasikan Diri untuk <span className="gradient-text">Karya Berkualitas</span>
          </h2>
          <p className="section-subtitle">
            Menggabungkan keahlian teknis logika backend dengan estetika antarmuka modern.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Profile Card */}
          <div className="about-visual-column">
            <div className="glass-card about-image-card">
              <div className="about-image-wrapper">
                <img
                  src={resolveAvatarSrc(personal.avatar)}
                  alt={personal.name}
                  className="about-avatar-img"
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== window.location.origin + '/foto.png') {
                      e.currentTarget.src = '/foto.png';
                    }
                  }}
                />
                <div className="about-image-overlay" />
              </div>

              {/* Quick Info Bar */}
              <div className="about-card-info">
                <div className="about-info-item">
                  <MapPin size={16} className="text-accent" />
                  <span>{personal.location}</span>
                </div>
                <div className="about-info-item">
                  <Mail size={16} className="text-accent" />
                  <span>{personal.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="about-content-column">
            <h3 className="about-heading">
              Halo! Saya <span className="text-accent">{personal.name}</span>
            </h3>
            <p className="about-bio-text">
              {personal.bio}
            </p>
            <p className="about-bio-text">
              Bagi saya, web development bukan hanya sekadar merangkai kode, melainkan seni memecahkan masalah nyata bagi pengguna dengan solusi yang anggun, responsif, dan mudah digunakan.
            </p>

            {/* Value Highlights Grid */}
            <div className="about-highlights-grid">
              {aboutHighlights.map((item, index) => {
                const IconComponent = iconMap[item.iconName] || CheckCircle2;
                return (
                  <div key={index} className="glass-card highlight-card">
                    <div className="highlight-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div className="highlight-text-box">
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                <span>Mari Berkolaborasi</span>
              </a>
              <a href="#skills" className="btn btn-secondary">
                <span>Lihat Tech Stack</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
