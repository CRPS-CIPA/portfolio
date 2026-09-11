import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle-btn"
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      title={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
    >
      {isDark ? (
        <Sun className="theme-icon sun-icon" size={20} />
      ) : (
        <Moon className="theme-icon moon-icon" size={20} />
      )}
    </button>
  );
}
