import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

const FALLBACK_PROJECT_IMG = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop modal-backdrop-animate"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="glass-card modal-container modal-content-animate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup jendela detail proyek"
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div className="modal-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="modal-header-img"
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_PROJECT_IMG) {
                e.currentTarget.src = FALLBACK_PROJECT_IMG;
              }
            }}
          />
          <div className="modal-image-gradient" />
          <span className="modal-category-badge">{project.category}</span>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h3 id="modal-title" className="modal-title">
            {project.title}
          </h3>

          <p className="modal-description">
            {project.fullDescription || project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Fitur & Keunggulan Utama:</h4>
              <ul className="modal-features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Teknologi yang Digunakan:</h4>
            <div className="modal-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                <span>Kunjungi Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>Lihat Kode (GitHub)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
