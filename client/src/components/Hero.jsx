import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* BACKGROUND EFFECTS */}

      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      <div className="container hero-content">

        {/* LEFT SIDE */}

        <div className="hero-text">

          <p className="greeting">
            Hello, It's Me 👋
          </p>

          <h1 className="name">
            Darsi <span>Bhuvanasivakrishna</span>
          </h1>

          <h2 className="role">
            And I'm a
            <span className="highlight">
              {" "}Frontend Developer & AIML Student
            </span>
          </h2>

          <p className="description">
            Passionate Computer Science Engineering student specializing in
            Artificial Intelligence and Machine Learning at GITAM University.
            Skilled in building modern web applications, AI-powered systems,
            and scalable software solutions using React, JavaScript, Python,
            and Full Stack technologies. Dedicated to creating innovative,
            responsive, and user-friendly digital experiences.
          </p>

          {/* STATS */}

          <div className="hero-stats">

            <div className="stat-box">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h3>3+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-box">
              <h3>2027</h3>
              <p>Graduation</p>
            </div>

          </div>

          {/* SOCIAL LINKS */}

          <div className="social-links">

            <a
              href="tel:9059995719"
              className="social-icon"
            >
              📞
            </a>

            <a
              href="mailto:bhuvandarsibsk@gmail.com"
              className="social-icon"
            >
              ✉️
            </a>

            <a
              href="https://www.linkedin.com/in/darsi-bhuvanasivakrishna"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/itachi523"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

          {/* BUTTONS */}

          <div className="hero-actions">

            <a
              href="/resume.pdf"
              className="btn primary-btn"
              download
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="btn secondary-btn"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image-wrapper">

          <div className="hero-image">

            <div className="image-border"></div>

            <img
              src="/profile.png"
              alt="Bhuvan"
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/400?text=Profile';
              }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;