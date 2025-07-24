import React from "react";
import "./About.css"; // We'll create this for styles
import amalJyothiImg from '../media/amal jyothi.jpeg';
import mesImg from '../media/mes.jpeg';
import ccmImg from '../media/ccm.webp';
import useInViewAnimation from './useViewAnimation';

export default function About() {
  const amalJyothiImgRef = useInViewAnimation('slide-in-view');
  const mesImgRef = useInViewAnimation('slide-in-view');
  const ccmImgRef = useInViewAnimation('slide-in-view');

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-education">
        <h3 className="education-title">
          <span role="img" aria-label="graduation cap"></span> Education
        </h3>
        <div className="education-cards">
          <div className="education-card">
            <img
              ref={amalJyothiImgRef}
              src={amalJyothiImg}
              alt="Amal Jyothi College of Engineering"
              className="education-img"
            />
              <div className="education-info">
                <h4>Amal Jyothi College of Engineering(Autonomous)</h4>
                <p className="degree">Master Of Computer Applications (MCA)</p>
                <p className="meta">
                  <i className="fa fa-map-marker"></i> Kottayam, India &nbsp; <i className="fa-solid fa-calendar-days"></i> 2023 - 2025
                </p> 
              </div>
          </div>
          
          <div className="education-card">
            <img
              ref={mesImgRef}
              src={mesImg}
              alt="MES College"
              className="education-img"
            />
              <div className="education-info">
                <h4>MES College</h4>
                <p className="degree">Bachelor Of Computer Applications (BCA)</p>
                <p className="meta">
                  <i className="fa fa-map-marker"></i> Erumely, India &nbsp; <i className="fa-solid fa-calendar-days"></i> 2020 - 2023        
                </p>
              </div>
          </div>

          <div className="education-card">
            <img
              ref={ccmImgRef}
              src={ccmImg}
              alt="CCM HSS"
              className="education-img"
            />
            <div className="education-info">
              <h4>CCM HSS</h4>
              <p className="degree">Higher Secondary</p>
              <p className="meta">
                <i className="fa fa-map-marker"></i> Karikkattoor, India &nbsp; <i className="fa-solid fa-calendar-days"></i> 2018 - 2020          
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
