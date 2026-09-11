import React, { useState } from 'react';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { portfolioData } from '../data/portfolioData';

const FALLBACK_PROJECT_IMG = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

export default function Projects({ onSelectProject }) {
  const { projects, socials } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  // Categories list
  const filterCategories = ['Semua', 'Fullstack', 'Web App', 'UI/UX', 'Mobile'];

  // Filter logic
  const filteredProjects = selectedFilter === 'Semua'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Portofolio & Karya</span>
          <h2 className="section-title">
            Proyek Pilihan & <span className="gradient-text">Karya Terkini</span>
          </h2>
          <p className="section-subtitle">
            Kombinasi aplikasi nyata, prototype produk, dan eksplorasi desain yang memadukan fungsi dan keindahan.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`filter-btn ${selectedFilter === cat ? 'filter-btn-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card hover-float">
              {/* Project Image Box */}
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== FALLBACK_PROJECT_IMG) {
                      e.currentTarget.src = FALLBACK_PROJECT_IMG;
                    }
                  }}
                />
                <div className="project-image-overlay">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary btn-sm project-preview-btn"
                    aria-label={`Buka detail ${project.title}`}
                  >
                    <Eye size={15} />
                    <span>Lihat Detail</span>
                  </button>
                </div>
                <span className="project-badge">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="project-card-body">
                <h3 className="project-title" onClick={() => onSelectProject(project)}>
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="badge">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Footer Action Links */}
                <div className="project-card-footer">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="project-text-link"
                  >
                    Detail Lengkap &rarr;
                  </button>

                  <div className="project-links-icons">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        aria-label="Repository GitHub"
                        title="Repository GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for More Work */}
        <div className="projects-bottom-cta">
          <p>Mencari studi kasus atau repositori open-source lainnya?</p>
          <a
            href={socials.github || 'https://github.com'}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={18} />
            <span>Kunjungi Repositori GitHub Saya</span>
          </a>
        </div>
      </div>
    </section>
  );
}
