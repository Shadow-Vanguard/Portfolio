import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const socialLinks = [
  {
    href: "https://instagram.com/roshn____",
    icon: "fa-brands fa-instagram",
    label: "Instagram"
  },
  {
    href: "https://wa.me/919061855716",
    icon: "fa-brands fa-whatsapp",
    label: "Whatsapp"
  },
  {
    href: "https://github.com/Shadow-Vanguard",
    icon: "fa-brands fa-github",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/roshan-varghese-r08/",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn"
  },
  {
    href: "https://www.youtube.com/@roshanvarghese1850",
    icon: "fa-brands fa-youtube",
    label: "YouTube"
  },
  {
    href: "mailto:roshanv334@gmail.com",
    icon: "fa-regular fa-envelope",
    label: "Email"
  }
];

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer${visible ? " footer-visible" : ""}`}>
      <div className="footer-talk">
        <h2 className="footer-heading">Let's <span>Talk</span></h2>
        <div className="footer-social-row">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="footer-social-icon"
            >
              {link.isSvg ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <path d="M44 39V13.8L24 28.5L4 13.8V39C4 40.1 4.9 41 6 41H42C43.1 41 44 40.1 44 39Z" fill="#34A853"/>
                  <path d="M44 9C44 7.9 43.1 7 42 7H6C4.9 7 4 7.9 4 9V10.2L24 24.9L44 10.2V9Z" fill="#EA4335"/>
                  <path d="M4 13.8L24 28.5L44 13.8V10.2L24 24.9L4 10.2V13.8Z" fill="#FBBC05"/>
                  <path d="M24 24.9L4 10.2V9C4 7.9 4.9 7 6 7H42C43.1 7 44 7.9 44 9V10.2L24 24.9Z" fill="#4285F4"/>
                </svg>
              ) : (
                <i className={link.icon}></i>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-row">
        <span className="footer-name">Roshan Varghese</span>
        <span className="footer-location">Kerala, India</span>
        <span className="footer-copyright">© 2025 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 