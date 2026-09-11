import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './icons/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats, socials } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrapper fade-in-up">
          <div className="hero-status-badge">
            <span className="status-pulse" />
            <span>{personal.availability}</span>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="hero-title fade-in-up">
          Halo, Saya <span className="gradient-text">{personal.name}</span>
          <br />
          <span className="hero-title-sub">{personal.title}</span>
        </h1>

        {/* Tagline / Bio summary */}
        <p className="hero-tagline fade-in-up">
          {personal.tagline}
        </p>

        {/* Call to Actions */}
        <div className="hero-actions fade-in-up">
          <a href="#projects" className="btn btn-primary">
            <span>Eksplorasi Proyek</span>
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            <span>Hubungi Saya</span>
          </a>

          {personal.resumeUrl && personal.resumeUrl !== '#' && (
            <a href={personal.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Download size={18} />
              <span>Unduh CV</span>
            </a>
          )}
        </div>

        {/* Social Links Icons */}
        <div className="hero-socials fade-in-up">
          <span className="hero-socials-label">Terhubung bersama saya:</span>
          <div className="hero-social-icons">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-btn">
                <GithubIcon size={20} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <LinkedinIcon size={20} />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-icon-btn">
                <TwitterIcon size={20} />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-btn">
                <InstagramIcon size={20} />
              </a>
            )}
            {socials.email && (
              <a href={socials.email} aria-label="Email" className="social-icon-btn">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card stat-card hover-float">
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
