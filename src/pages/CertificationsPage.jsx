import React, { useState } from 'react';
import { FaExternalLinkAlt, FaCalendar, FaBuilding, FaSearch } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';
import './CertificationsPage.css';

const CertificationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = certificationsData.filter(cert => 
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="certifications-container">
      <h1 className="certifications-title">My Certifications</h1>
      <p className="certifications-subtitle">
        Professional certifications and achievements that showcase my continuous learning journey.
      </p>

      <div className="cert-search-container">
        <FaSearch className="cert-search-icon" />
        <input 
          type="text" 
          className="cert-search-input" 
          placeholder="Search by name, issuer, or description..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredCerts.length === 0 ? (
        <div className="cert-no-results">
          <p>No certifications found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="certifications-grid">
          {filteredCerts.map(cert => {
            const isFileUrl = cert.url && cert.url.startsWith('file://');
            const finalUrl = isFileUrl ? `/${cert.url.replace('file://', '')}` : cert.url;
            
            return (
              <a 
                key={cert.id} 
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;