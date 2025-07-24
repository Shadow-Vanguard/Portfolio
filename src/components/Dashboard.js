import React, { useState } from "react";
import "./Dashboard.css";
import TechStackModal from "./TechStackModal";
import CertificationModal from "./Certification";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [certificationModalOpen, setCertificationModalOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* Full-Stack Engineer Card */}
        <div className="card card-main">
          <div className="card-header">
            {/* <span className="icon">&#60;&#62;</span> */}
            <h2>Full-Stack Engineer</h2>
          </div>
          <p>
            Full-Stack Engineer who has built secure systems for AI-driven learning platforms, real-time dashboards, and career guidance tools.
          </p>
          <div className="tags">
            <span className="tag">Django</span>
            <span className="tag">React</span>
            <span className="tag">FastAPI</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

        {/* Languages Card */}
        <div className="card languages-card">
          <div className="languages-header">
            <span className="languages-icon">
              {/* Globe SVG icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#2ecc71" strokeWidth="2"/>
                <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#2ecc71" strokeWidth="2"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="#2ecc71" strokeWidth="2"/>
              </svg>
            </span>
            <span className="languages-title">Languages</span>
          </div>
          <ul className="languages-list">
            <li>
              <span className="dot"></span>
              <span className="lang-name">English</span>
              <span className="fluent">Fluent</span>
            </li>
            <li>
              <span className="dot"></span>
              <span className="lang-name">Malayalam</span>
              <span className="fluent">Fluent</span>
            </li>
            <li>
              <span className="dot"></span>
              <span className="lang-name">Hindi</span>
              <span className="fluent">Fluent</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack Card */}
        <div className="card">
          
          <div className="modal-header">
            <span className="modal-primary">My Primary</span>
            <br/>
            <h2>Tech-Stack</h2>
          </div>

          <div className="tech-stack">
            <span>Django  </span>
            <span>ReactJS</span>
            <span>FastAPI</span>
            <span>JavaScript</span>
            <span>PostgreSQL</span>
          </div>
          <div
            className="more-tech"
            style={{ cursor: "pointer" }}
            onClick={() => setModalOpen(true)}
          >
            More technologies →
          </div>
        </div>


        {/* Key Achievements Card */}
        <div className="card card-wide">
         {/* <span className="modal-primary">Portfolio Highlights</span> */}
          <h2>Key Achievements</h2>

          <div className="achievements">
            <div className="achievement">
              <div className="achievement-title">Technical Workshops</div>
              <div className="achievement-desc">Actively participated in technical workshops.</div>
            </div>

            <div className="achievement">
              <div className="achievement-title">Product-Ready Projects</div>
              <div className="achievement-desc">Built end-to-end applications</div>
            </div>
          </div>
          {/* <div className="see-all">Click to see all achievements →</div> */}
        </div>


        {/* Contact Card */}
        <div className="card card-image">
          <img
            src={require("../media/coding.jpg")}
            alt="Coding"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>


          {/*About/Description Card*/}
          <div className="card card-wide">
            <h2>Certifications</h2>
            <div className="achievement">
              <div className="achievement">
                <div className="achievement-title">Infosys Springboard</div>
                <div className="achievement-desc">Introduction To Artifical Intelligence</div>
              </div>

              <div className="achievement">
                <div className="achievement-title">Infosys Springboard</div>
                <div className="achievement-desc">Introduction To Data Science</div>
              </div>
              <div
                className="more-cert"
                style={{ cursor: "pointer" }}
                onClick={() => setCertificationModalOpen(true)}
              >
                More certifications →
              </div>
            </div>
        </div> 

      </div>
      <TechStackModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <CertificationModal open={certificationModalOpen} onClose={() => setCertificationModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
