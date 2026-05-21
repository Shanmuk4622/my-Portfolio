import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import ScrollReveal from '../components/ScrollReveal';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // To display success/error messages

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
          setStatus('success');
          form.current.reset(); // Reset the form after successful submission
      }, () => {
          setStatus('error');
      });
  };

  return (
    <div className="contact-container">
      <ScrollReveal>
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </ScrollReveal>
      <div className="contact-content">
        <ScrollReveal direction="left" delay={0.1}>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="status-success">Message sent successfully!</p>}
            {status === 'error' && <p className="status-error">Failed to send message. Please try again.</p>}
          </form>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me via email or connect with me on social media.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shanmukesh-bonala/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Shanmuk4622" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ContactPage;