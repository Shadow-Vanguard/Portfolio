import React from "react";
import "./TechStakModel.css";
import useBodyScrollLock from "./useViewAnimation";

const TechStackModal = ({ open, onClose, size = "large" }) => {
  useBodyScrollLock(open);
  if (!open) return null;

  // Add a class based on the size prop
  const modalSizeClass = size === "small" ? "modal-content-small" : "modal-content-large";

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${modalSizeClass}`}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="modal-primary">My Primary</span>
          <br />
          <h2>Tech-Stack</h2>
        </div>
        <div className="modal-tech-grid">
          <span>ReactJS</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>TypeScript</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>Docker</span>
          <span>GitHub Actions</span>
        </div>
        <div className="modal-focus-areas">
          <div className="focus-title">Technology Focus Areas</div>
          <div className="focus-grid">
            <div>
              <span className="focus-label frontend">Frontend :</span>
              <span className="focus-desc">React, TypeScript, HTML</span>
            </div>
            <div>
              <span className="focus-label backend">Backend :</span>
              <span className="focus-desc">FastAPI, PostgreSQL</span>
            </div>
            <div>
              <span className="focus-label styling">Styling :</span>
              <span className="focus-desc">Tailwind CSS, Modern UI</span>
            </div>
            <div>
              <span className="focus-label devops">DevOps :</span>
              <span className="focus-desc">Docker, GitHub Actions</span>
            </div>
            <div>
              <span className="focus-label devops">Testing :</span>
              <span className="focus-desc">Selenium, Postman, TestNG</span>
            </div>
            <div>
              <span className="focus-label devops">Clouds :</span>
              <span className="focus-desc">AWS(EC2, S3), GCP</span>
            </div>
            <div>
              <span className="focus-label devops">ML / AI :</span>
              <span className="focus-desc">Scikit-learn, Pandas, TensorFlow </span>
            </div>
            <div>
              <span className="focus-label devops">App Development :</span>
              <span className="focus-desc">Flutter, Android Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackModal;
