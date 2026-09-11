import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  // Track active section for navbar highlighting
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="portfolio-app">
      {/* Background Ambient Glowing Orbs */}
      <div className="ambient-glow-container" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
