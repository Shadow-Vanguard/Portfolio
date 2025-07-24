import React from "react";
import "./Experience.css";
import useInViewAnimation from "./useViewAnimation";

const experiences = [
  {
    year: "2025",
    role: "Data Science & Analytics Intern",
    company: "Zidio Development",
    companyUrl: "#",
    date: "Jul 2025 - Present",
    location: "Remote",
    details: [
      "Hands-on experience in real-time data science projects using Python, ML, and data-driven model building.",
      "Contributing to team tasks by preparing reports, analyzing datasets, and presenting actionable insights.",
      "Collaborating with cross-functional teams to implement data-driven solutions and improve business outcomes."
    ],
    tags: ["Python", "Machine Learning", "Numpy", "Pandas", "Data Analysis"],
    logo: require("../media/zidio.jpeg")
  },




];

const TimelineItem = ({ experience }) => {
  const timelineRef = useInViewAnimation('in-view');
  
  return (
    <div className="timeline-row">
      <div className="timeline-year" ref={timelineRef}>
        <span className="timeline-dot"></span>
        <span className="year">{experience.year}</span>
      </div>
      <div className="timeline-card">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <img src={experience.logo} alt={experience.company + ' logo'} className="timeline-card-logo" />
          <div>
            <h3 style={{ marginBottom: 2 }}>{experience.role}</h3>
            <span className="company">
              {experience.company}
            </span>
            <div className="meta">
              <span>{experience.date}</span> &nbsp;|&nbsp; <span>{experience.location}</span>
            </div>
          </div>
        </div>
        <ul>
          {experience.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
        <div className="tags">
          {experience.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience & Journey</h2>
      <p className="experience-subtitle">
        My professional journey through internships, freelance projects, and leadership roles in technology and design.
      </p>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
