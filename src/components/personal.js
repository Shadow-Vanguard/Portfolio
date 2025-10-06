import React from "react";
import "./personal.css"; // Create this for custom styles
import avatar from "../media/ghibilime.png"; // Use your illustration or avatar
import { Link, useNavigate } from 'react-router-dom';

const stats = [
  { value: "23", label: "YEARS YOUNG" },
  { value: "3", label: "LANGUAGES" },
//   { value: "2", label: "COUNTRIES" },
  { value: "∞", label: "COFFEE CUPS" },
];

export default function Personal() {
  const navigate = useNavigate();
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
    <div className="personal-bg">
      {/* Top Navigation */}
      <nav className="home-nav3">
      <button className="nav-btn3" onClick={() => navigate('/')}>
        
          {isMobile ? <i className="fa-solid fa-briefcase"></i> : 'Professional'}
        </button>

        <button
          className="nav-btn3 active3"
          onClick={() => navigate('/personal')}
        >
          {isMobile ? <i className="fa-solid fa-user"></i> : 'Personal'}
        </button>
        <button
          className="nav-btn3"
          onClick={() => navigate('/contact')}
        >
          {isMobile ? <i className="fa-solid fa-envelope"></i> : 'Contact'}
        </button>
      </nav>
      {tooltip.show && (
        <div
          className="custom-tooltip"
          style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y + 8,
            transform: 'translateX(-50%)',
            zIndex: 2000
          }}
        >
          {tooltip.message}
        </div>
      )}
      <div className="personal-container">
        <div className="personal-left">
          <div className="personal-title">
            <span className="personal-title-green">Beyond the</span>
            <br />
            <span className="personal-title-bold">Code</span>
          </div>
          <div className="personal-subtitle">
            Welcome to my personal space. Here's what drives me, inspires me, and keeps me balanced outside of the professional world.
          </div>
          <div className="personal-stats">
            {stats.map((stat) => (
              <div className="personal-stat" key={stat.label}>
                <div className="personal-stat-value">{stat.value}</div>
                <div className="personal-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="personal-right">
          <img src={avatar} alt="Personal avatar" className="personal-avatar" />
        </div>
      </div>
    </div>
  );
}
