import React from 'react';
import certificationsData from '../data/certifications.json';
// You can create a CertificationsPage.css file for styling

const CertificationsPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>My Certifications</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {certificationsData.map(cert => (
          <div key={cert.id} style={{ border: '1px solid var(--border-color)', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
            <h3><a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a></h3>
            <p>Issuer: {cert.issuer} - {cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;