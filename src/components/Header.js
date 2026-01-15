import React from "react";

export default function Header() {
  return (
    <header className="home-header">
      <div className="home-logo">Roshan Varghese</div>
      <a href="/media/Roshan_Varghese_AI_ML_Engineer.pdf?v=2" className="resume-top-btn" download="Roshan_Varghese_AI_ML_Engineer.pdf">
        <i className="fa fa-download"></i> Download Resume
      </a>
    </header>
  );
}
