import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Pixeled Projects",
      tech: "React • Node.js • Express • MongoDB • HTML • CSS",
      description:
        "Pixelated Projects is a dynamic project showcase platform that allows users to create and share their projects with the world. Built with React for the frontend and Node.js with Express for the backend, it features a responsive design, user authentication, and a MongoDB database to store project information. Users can easily create, edit, and view projects, making it an ideal platform for developers to showcase their work and connect with others in the tech community.",
      number: "01",
      link: "https://github.com/itachi523/Pixeled-Projects"
    },

    {
      title: "Online Food Ordering Chatbot ",
      tech: "HTML,CSS,JAVASCRIPT • NLP • Chatbot Development • Web Integration",
      description:
        "Built an intelligent chatbot  assistant that allows users to order food and interact with them using natural language queries. Implemented NLP techniques for semantic search, contextual understanding, and fast document summarization to improve user productivity.",
      number: "02",
      link: "https://github.com/itachi523/OnlneFoodOrderngChatbot"
    },

    {
      title: "Spotify Genre Segmentation",
      tech: "Python • Data Analysis • Clustering • Visualization",
      description:
        "Performed genre-based music segmentation using machine learning clustering algorithms and exploratory data analysis. Generated meaningful visualizations, correlation matrices, and recommendation insights to support personalized playlist recommendations.",
      number: "03",
      link: "https://github.com/itachi523/spotify-segmentation"
    },

    {
      title: "Modern E-Commerce Platform",
      tech: "React • Firebase • Authentication • UI/UX",
      description:
        "Designed and developed a fully responsive e-commerce platform with product listings, authentication, cart management, and dynamic UI interactions. Focused on creating a modern user experience with clean design, scalability, and smooth navigation.",
      number: "04",
      link: "https://github.com/itachi523/Ecommerce-website"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="background-circle circle1"></div>
      <div className="background-circle circle2"></div>

      <div className="projects-header">
        <p className="section-subtitle">My Recent Work</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-glow"></div>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <h4>{project.tech}</h4>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;