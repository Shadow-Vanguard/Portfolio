import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";

export default function Contact() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null); // or setResult(undefined) depending on your code
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await emailjs.send(
        'service_rosh08',
        'template_gixxhoo',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        '-ceA2vEM3-NPuAgB4'
      );
      setResult({ success: true, message: 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setResult({ success: false, message: 'Failed to send message. Please try again.' });
    }
    setLoading(false);
  };

  return (

    <div className="contact-bg">
      {/* Top Navigation */}
      <nav className="home-nav1">
       <button className="nav-btn1" onClick={() => navigate('/')}>
          {isMobile ? <i className="fa-solid fa-briefcase"></i> : 'Professional'}
        </button>
        <button
          className="nav-btn1"
          onClick={() => navigate('/personal')}
        >
          {isMobile ? <i className="fa-solid fa-user"></i> : 'Personal'}
        </button>
        <button
          className="nav-btn1 active1"
          onClick={() => navigate('/contact')}
        >
          {isMobile ? <i className="fa-solid fa-envelope"></i> : 'Contact'}
        </button>
      </nav>
      <h1 className="contact-title">
        <span className="contact-title-bold">Let's </span>
        <span className="contact-title-green">Connect</span>
      </h1>
      <p className="contact-subtitle">
        Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Let's create something amazing together.
      </p>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new opportunities, creative projects, or just having a conversation about technology and innovation.</p>
          <div className="contact-info-box">
            <div className="contact-info-item">
              <span className="contact-info-icon"><i className="fa-solid fa-envelope"></i></span>
              <div>
                <div className="contact-info-label1">Email</div>
                <div className="contact-info-value">roshanv334@gmail.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon"><i className="fa-solid fa-location-dot"></i></span>
              <div>
                <div className="contact-info-label2">Location</div>
                <div className="contact-info-value">Kerala, India</div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon"><i className="fa-solid fa-clock"></i></span>
              <div>
                <div className="contact-info-label3">Response Time</div>
                <div className="contact-info-value">Usually within 24 hours</div>
              </div>
            </div>
          </div>
          <div className="contact-follow">
            <div className="contact-follow-label">Follow Me</div>
            <div className="contact-follow-icons">
              <a href="https://github.com/Shadow-Vanguard" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/roshan-varghese-r08/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://instagram.com/roshn____" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.youtube.com/@roshanvarghese1850" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2><i className="fa-regular fa-message"></i> Send a Message</h2>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label>Name :</label>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="contact-form-group">
                <label>Email :</label>
                <input type="email" name="email" placeholder="your_gmail@gmail.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="contact-form-group">
              <label>Subject :</label>
              <input type="text" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <label>Message :</label>
              <textarea name="message" placeholder="Tell me about your project, idea, or just say hello..." value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="contact-form-btn" disabled={loading}>
              <i className="fa-regular fa-paper-plane"></i> {loading ? 'Sending...' : 'Send Message'}
            </button>
            {result && (
              <div
                className={`fade-out${result.success ? "" : " hide"}`}
                style={{ color: result.success ? '#4ade80' : '#ff4d4f', marginTop: '1rem', textAlign: 'center' }}
              >
                {result.message}
              </div>
            )}
            <div className="contact-form-email">
              Or email me directly at <a href="mailto:roshanv334@gmail.com">roshanv334@gmail.com</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
