import React, { useState } from "react";
import "./Project.css";
import Footer from "./Footer";

const categories = [
  "Road Guardian",
  "Glamour Quest",
  "Estate Agency",
  "Wiki Search Engine",

];

const allProjects = [
  {
    category: "Road Guardian",
    title: "Road Guardian",
    image: require("../media/RG.png"),
    description: "AI and ML powered web platform that provides 24/7 roadside assistance by intelligently connecting users with the nearest and most suitable service providers for assistance with an interactive UI.",
    tags: ["FastAPI", "Python", "ML", "HTML", "MySQL", "OpenAI","AL"],
    github: "https://github.com/Shadow-Vanguard/Road-Guardian"
  },

  {
    category: "Glamour Quest",
    title: "Glamour Quest",
    image: require("../media/glamour.png"),
    description:"GlamorQuest is a full-stack web platform that delivers an immersive 3D salon experience using VR, simulating real-world hair styling and beauty services.",
    tags: ["FastAPI", "Python", "HTML", "CSS", "JavaScript","ML","VR"],
    github: "https://github.com/Shadow-Vanguard/Glamour_Quest/"
  },
  {
    category: "Estate Agency",
    title: "Estate Agency", 
    image: require("../media/house_rental.jpg"),
    description: "A full-stack House Rental web application built with Django and React that allows users to browse, list, and manage rental properties with a clean and responsive interface.",
    tags: ["FastAPI", "Python","React", "CSS", "JavaScript","ML"],
    github: "https://github.com/Shadow-Vanguard/House__Rental"
  },

  {
    category: "Wiki Search Engine",
    title: "Wiki Search Engine",
    image: require("../media/wiki.png"),
    description: "AI powered wiki search engine that uses the Wikipedia API to search for articles and display them in a user-friendly interface.",
    tags: ["FastAPI", "React","CSS", "JavaScript"],
    github: "https://github.com/Shadow-Vanguard/Wiki_Search"
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredProjects = allProjects.filter(p => p.category === activeTab);

  return (
    <section className="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`project-tab${activeTab === cat ? " active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="project-list">
        {filteredProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title + ' logo'} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <button 
                className="project-github" 
                onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
              >
                <i className="fa-brands fa-github"></i> GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
      <a
        className="project-github-link"
        href="https://github.com/Shadow-Vanguard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my GitHub to view more
        <svg
          className="wavy-underline"
          viewBox="0 0 420 18"
          width="420"
          height="50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", margin: "0 auto" }}
        >
          <path
            d="M01 12 Q 70 -1, 130 12 T 250 8 T 270 12 T 500 19"
            stroke="#2ecc71"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </a>

    </section>
  );
};

export default Project;
