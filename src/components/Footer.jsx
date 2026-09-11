import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './icons/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand & Summary */}
          <div className="footer-brand-col">
            <a href="#hero" className="navbar-logo">
              <span className="logo-badge">
                <Sparkles size={16} className="logo-sparkle" />
              </span>
              <span className="logo-text">
                {personal.nickname || 'Portfolio'}
                <span className="logo-dot">.dev</span>
              </span>
            </a>
            <p className="footer-brand-tagline">
              Membangun antarmuka web modern, cepat, dan berestetika tinggi untuk membantu brand dan bisnis tumbuh di era digital.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-links-heading">Navigasi Cepat</h4>
            <div className="footer-links-grid">
              <a href="#hero" className="footer-link">Beranda</a>
              <a href="#about" className="footer-link">Tentang Saya</a>
              <a href="#skills" className="footer-link">Tech Stack</a>
              <a href="#projects" className="footer-link">Galeri Proyek</a>
              <a href="#experience" className="footer-link">Pengalaman</a>
              <a href="#contact" className="footer-link">Kontak Langsung</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="footer-social-col">
            <h4 className="footer-links-heading">Ikuti Saya</h4>
            <div className="footer-social-icons">
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter / X">
                  <TwitterIcon size={18} />
                </a>
              )}
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
              )}
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm footer-scroll-top"
              aria-label="Kembali ke atas halaman"
            >
              <ArrowUp size={16} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {currentYear} {personal.name}. Dibuat dengan{' '}
            <Heart size={14} className="text-heart" /> menggunakan{' '}
            <span className="text-accent font-semibold">React.js & Vite</span>.
          </p>

          <p className="footer-status-tag">
            Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
