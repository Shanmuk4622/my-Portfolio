import React from 'react';
import { FaExternalLinkAlt, FaCalendar, FaBuilding } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';
import ScrollReveal from '../components/ScrollReveal';
import './CertificationsPage.css';

const CertificationsPage = () => {
  return (
    <div className="certifications-container">
      <ScrollReveal>
        <h1 className="certifications-title">My Certifications</h1>
        <p className="certifications-subtitle">
          Professional certifications and achievements that showcase my continuous learning journey.
        </p>
      </ScrollReveal>

      <div className="certifications-grid">
        {certificationsData.map((cert, index) => {
          const isFileUrl = cert.url && cert.url.startsWith('file://');
          const finalUrl = isFileUrl ? `/${cert.url.replace('file://', '')}` : cert.url;

          return (
            <ScrollReveal key={cert.id} delay={index * 0.08}>
              <a
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-link"
                style={{ textDecoration: 'none', display: 'block', outline: 'none' }}
              >
                <div className="cert-card">
                  <div className="cert-image-container">
                    <img src={cert.imageUrl} alt={cert.name} className="cert-image" />
                    <div className="cert-overlay">
                      <div className="cert-view-btn">
                        <FaExternalLinkAlt /> View Certificate
                      </div>
                    </div>
                  </div>
                  <div className="cert-content">
                    <h3 className="cert-name" title={cert.name}>{cert.name}</h3>
                    {cert.description && (
                      <p className="cert-description" style={{ fontSize: '0.95rem', color: 'var(--text-secondary-color)', marginBottom: '1rem', lineHeight: '1.5' }}>
                        {cert.description}
                      </p>
                    )}
                    <div className="cert-meta">
                      <span className="cert-issuer">
                        <FaBuilding />
                        {cert.issuer}
                      </span>
                      <span className="cert-date">
                        <FaCalendar />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationsPage;