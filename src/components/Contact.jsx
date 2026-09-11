import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Harap lengkapi nama, email, dan pesan Anda.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message to backend / email service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Hubungi Saya</span>
          <h2 className="section-title">
            Mari Memulai <span className="gradient-text">Proyek Bersama</span>
          </h2>
          <p className="section-subtitle">
            Punya ide produk digital, butuh developer tambahan untuk tim Anda, atau sekadar ingin menyapa? Pintu saya selalu terbuka!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column">
            <div className="glass-card contact-info-card">
              <h3 className="contact-card-title">Informasi Kontak</h3>
              <p className="contact-card-desc">
                Saya biasanya merespons dalam waktu kurang dari 24 jam. Anda dapat mengirimkan email atau menghubungi kontak langsung di bawah ini.
              </p>

              <div className="contact-items-list">
                {/* Email Item */}
                <a href={`mailto:${personal.email}`} className="contact-item hover-float">
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Kirim Email</span>
                    <span className="contact-item-value">{personal.email}</span>
                  </div>
                </a>

                {/* Phone / WhatsApp Item */}
                <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="contact-item hover-float">
                  <div className="contact-item-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">WhatsApp / Telepon</span>
                    <span className="contact-item-value">{personal.phone}</span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Lokasi Saat Ini</span>
                    <span className="contact-item-value">{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="contact-availability-box">
                <div className="availability-dot-row">
                  <span className="status-pulse" />
                  <span className="availability-title">Status Kerja Saat Ini</span>
                </div>
                <p className="availability-text">
                  {personal.availability}. Siap bergabung untuk proyek jangka pendek maupun kontrak panjang.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-column">
            <div className="glass-card contact-form-card">
              {isSubmitted ? (
                <div className="form-success-box fade-in-up">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Pesan Berhasil Terkirim!</h3>
                  <p className="success-desc">
                    Terima kasih telah menghubungi saya. Saya telah menerima pesan Anda dan akan segera membalasnya sesegera mungkin.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary btn-sm"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="form-title">Tinggalkan Pesan</h3>

                  {errorMessage && (
                    <div className="form-error-banner">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Nama Lengkap <span className="text-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Misal: Alex Wijaya"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Alamat Email <span className="text-required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subjek Proyek / Keperluan
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Misal: Pembuatan Landing Page atau Tawaran Kolaborasi"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Pesan Anda <span className="text-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda di sini..."
                      className="form-textarea"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full form-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
