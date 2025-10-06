// src/components/Home.js
import React, { useEffect, useState, useRef } from "react";
import "./Home.css"; // We'll create this file for styles
import { useNavigate } from 'react-router-dom';

function useInViewAnimation(className) {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleAnimation = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add(className);
        } else {
          node.classList.remove(className);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleAnimation, {
      threshold: 0.2,
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [className]);

  return ref;
}

function AnimatedNumber({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

const socialLinks = [
  { icon: "fa-brands fa-github", url: "https://github.com/Shadow-Vanguard" },
  { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/roshan-varghese-r08/" },
  { icon: "fa-brands fa-instagram", url: "https://instagram.com/roshn____" },
  { icon: "fa-brands fa-youtube", url: "https://www.youtube.com/@roshanvarghese1850" },
];

export default function Home() {
  const navigate = useNavigate();
  const headerRef = useInViewAnimation("animated-header");
  const navRef = useInViewAnimation("animated-nav");
  const titleRef = useInViewAnimation("animated-title");
  const descRef = useInViewAnimation("animated-desc");
  const actionsRef = useInViewAnimation("animated-actions");
  const profileRef = useInViewAnimation("animated-profile");
  const statsRef = useInViewAnimation("animated-stats");

  // Helper to detect mobile (window width <= 600)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tooltip logic
  const [tooltip, setTooltip] = React.useState({ show: false, message: '', x: 0, y: 0 });
  const tooltipTimeout = React.useRef();

  const handleMouseEnter = (e, message) => {
    if (isMobile) return;
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      show: true,
      message,
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY
    });
  };
  const handleMouseLeave = () => {
    if (isMobile) return;
    setTooltip({ ...tooltip, show: false });
  };
  const handleMobileClick = (e, message) => {
    if (!isMobile) return;
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      show: true,
      message,
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY
    });
    clearTimeout(tooltipTimeout.current);
    tooltipTimeout.current = setTimeout(() => {
      setTooltip(t => ({ ...t, show: false }));
    }, 2000);
  };

  return (
    <div className="home-bg">
      {/* Top Navigation */}
      <nav className="home-nav" ref={navRef}>
        <button className="nav-btn active">
          {isMobile ? <i className="fa-solid fa-briefcase"></i> : 'Professional'}
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate('/personal')}
        >
          {isMobile ? <i className="fa-solid fa-user"></i> : 'Personal'}
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate('/contact')}
        >
          {isMobile ? <i className="fa-solid fa-envelope"></i> : 'Contact'}
        </button>
      </nav>
      {/* Main Content */}
      <main className="home-main">  
        <section className="home-left">
          <div className="home-title" ref={titleRef}>Software Engineer / Data Scientist</div>
          <h1>
            <span className="hello drop-down" style={{ animationDelay: "0.1s" }}>Hello I'm</span>
            <span className="first-name drop-down" style={{ animationDelay: "0.2s" }}>Roshan</span>
            <span className="last-name drop-down" style={{ animationDelay: "0.5s" }}>Varghese</span>
          </h1>
          <p className="home-desc" ref={descRef}>
            An MCA Graduate | Software Engineer & Full-Stack Developer | Data Scientist & Analyst | Learning, Building, Evolving | Driven by purpose, grounded in progress
          </p>
          <div className="home-actions" ref={actionsRef}>
            <a href="/media/Roshan_Varghese_Resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
              VIEW RESUME <i className="fa fa-file"></i>
            </a>
            <div className="social-icons">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="home-right" ref={profileRef}>
          <div className="profile-pic-wrapper">
            <div className="profile-outline"></div>
            <img
              src={require("../media/me.jpg")}
              alt="Profile"
              className="profile-pic"
            />
            <div className="orbit-dots">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>
          </div>
        </section>
      </main>

      {/* Stats */}
      <footer className="home-stats" ref={statsRef}>
        <div>
          <span className="stat-num"><AnimatedNumber value={23} /></span>
          <span className="stat-label">AGE</span>
        </div>
        {/* <div>
          <span className="stat-num"><AnimatedNumber value={1} /></span>
          <span className="stat-label">YEARS OF EXPERIENCE</span>
        </div> */}
        <div>
          <span className="stat-num"><AnimatedNumber value={5} /></span>
          <span className="stat-label">PROJECTS WORKED ON</span>
        </div>
        <div>
          <span className="stat-num"><AnimatedNumber value={2} /></span>
          <span className="stat-label">PROJECTS DEPLOYED</span>
        </div>
      </footer>
    </div>
  );
}