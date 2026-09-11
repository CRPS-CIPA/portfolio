import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          <span className="logo-badge">
            <Sparkles size={16} className="logo-sparkle" />
          </span>
          <span className="logo-text">
            {portfolioData.personal.nickname || 'Portfolio'}
            <span className="logo-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links-desktop">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.name}
                {isActive && <span className="nav-link-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & CTA */}
        <div className="navbar-actions">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <a href="#contact" className="btn btn-primary btn-sm navbar-cta">
            <Send size={14} />
            <span>Kontak</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu-nav">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="mobile-menu-footer">
            <a href="#contact" onClick={handleLinkClick} className="btn btn-primary w-full">
              <Send size={16} />
              <span>Mulai Diskusi Proyek</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
