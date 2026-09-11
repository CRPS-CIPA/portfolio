import React, { useState } from 'react';
import { Layers, Terminal, Cpu, Layout, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  'Semua': Layers,
  'Frontend': Layout,
  'Backend & Database': Terminal,
  'Tools & DevOps': Cpu,
  'Design & Workflow': Layers,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Extract all categories
  const categories = ['Semua', ...skills.map((s) => s.category)];

  // Filter skills based on category selection
  const filteredSkills = activeCategory === 'Semua'
    ? skills.flatMap((group) => group.items.map((item) => ({ ...item, category: group.category })))
    : (skills.find((group) => group.category === activeCategory)?.items || []).map((item) => ({
        ...item,
        category: activeCategory,
      }));

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Keahlian & Teknologi</span>
          <h2 className="section-title">
            Teknologi yang Saya <span className="gradient-text">Kuasai</span>
          </h2>
          <p className="section-subtitle">
            Kumpulan tools, library, dan bahasa pemrograman yang saya gunakan untuk mewujudkan produk digital.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Layers;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`skills-tab-btn ${isActive ? 'skills-tab-active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card hover-float">
              <div className="skill-card-top">
                <div className="skill-title-group">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category-badge">{skill.category}</span>
                </div>
                <span className="skill-level-tag">{skill.tag}</span>
              </div>

              {/* Progress Bar */}
              <div className="skill-progress-wrapper">
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="skill-progress-label">
                  <span>Kemampuan</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
