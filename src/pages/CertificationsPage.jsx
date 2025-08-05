import React from 'react';

import certificationsData from '../data/certifications.json';
import './CertificationsPage.css';

const CertificationsPage = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-title">My Certifications</h1>
      {certificationsData.map(cert => (
        <div key={cert.id} className="cert-card">
          <h3><a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a></h3>
          <p>Issuer: {cert.issuer} - {cert.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CertificationsPage;