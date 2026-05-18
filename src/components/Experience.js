import React from "react";
import "./Experience.css";
import useInViewAnimation from "./useViewAnimation";

const experiences = [
  {
    year: "2026",
    role: "Junior Data Analyst",
    company: "Zidio Development",
    companyUrl: "#",
    date: "Jun 2025 - Feb 2026",
    location: "Remote",
    details: [
      "Processed and cleaned 80K+ records using Python (Pandas, NumPy) and Excel, improving data quality by 30% through effective preprocessing.",
      "Designed and maintained ETL pipelines using Python and SQL (MySQL), ensuring reliable data flow and consistency across systems.",
      "Developed optimized SQL queries and reports, improving reporting efficiency by 25% and supporting KPI tracking.",
      "Built interactive Power BI dashboards with data visualization techniques using Matplotlib to deliver clear insights and support decision-making.",
      "Performed EDA (Exploratory Data Analysis) and statistical analysis in Jupyter Notebook, translating business requirements into actionable insights with strong analytical thinking and storytelling."
    ],
    tags: ["Python", "Machine Learning", "Numpy", "Pandas", "Data Analysis", "Data Visualization","Power BI"],
    logo: require("../media/zidio.jpeg")
  },
  {
    year: "2025",
    role: "Data Science & Analytics Intern",
    company: "Zidio Development",
    companyUrl: "#",
    date: "Mar 2025 - Jun 2025",
    location: "Remote",
    details: [
      "Built and finetuned ML models on datasets of 20,000+ records, achieving 92% accuracy and reducing manual analysis time by 30%.",
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) to uncover insights and improve data quality.",
      "Created interactive dashboards and visual reports using Power BI and Matplotlib to present business insights.",
      "Collaborated with the analytics team to prepare reports, optimize data pipelines, and implement data-driven solutions."
    ],
    tags: ["Python", "Machine Learning", "Numpy", "Pandas", "Data Analysis", "Data Visualization","Power BI"],
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
