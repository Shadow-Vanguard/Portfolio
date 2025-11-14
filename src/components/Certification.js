import React from "react";
import "./Certification.css";
import useBodyScrollLock from "./useViewAnimation";


const Certification = ({ open, onClose, size = "large" }) => {
  useBodyScrollLock(open);
  if (!open) return null;

  // Add a class based on the size prop
  const modalSizeClass = size === "small" ? "modal-content-small" : "modal-content-large";

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${modalSizeClass}`}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="modal-primary">My</span>
          <br />
          <h2>Certifications</h2>
        </div>
        <div className="modal-tech-grid">
        </div>
        <div className="modal-focus-areas">
          <div className="focus-title"></div>
          <div className="focus-grid">
          <div>
              <span className="focus-label frontend">Data Science And Analytics -</span>
              <span className="focus-desc">Zidio Development</span>
            </div>
            <div>
              <span className="focus-label frontend">Java Programming -</span>
              <span className="focus-desc">Oracle Academy</span>
            </div>
            <div>
              <span className="focus-label backend">Joy Of Computing Using Python -</span>
              <span className="focus-desc">NPTEL</span>
            </div>

            <div>
              <span className="focus-label backend">Introduction To Data Science -</span>
              <span className="focus-desc">Infosys Springboard</span>
            </div>

            <div>
              <span className="focus-label backend">Python Programming -</span>
              <span className="focus-desc">Udemy</span>
            </div>

            <div>
              <span className="focus-label backend">Introduction To Artifical Intelligence -</span>
              <span className="focus-desc">Infosys Springboard</span>
            </div>
            
            <div>
              <span className="focus-label backend">Introduction To Natural Language Processing -</span>
              <span className="focus-desc">Infosys Springboard</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
