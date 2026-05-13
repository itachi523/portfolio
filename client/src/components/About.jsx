import React from 'react';
import './About.css';

const About = () => {

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "GITAM University School of Technology",
      duration: "2023 - 2027",
      cgpa: "CGPA: 7.3/ 10",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Full Stack Development",
        "Data Structures & Algorithms"
      ],
      description:
        "Currently pursuing a Bachelor’s degree in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning. Passionate about developing scalable web applications, intelligent systems, and modern software solutions. Experienced in React, Java, Python, and database management systems with strong problem-solving abilities and analytical thinking. Actively involved in academic projects, technical learning, and continuous skill development in emerging technologies."
    },

    {
      degree: "Class XII (Intermediate Education)",
      institution: "Sri Chaitanya Anjanadri Junior College",
      duration: "2021 - 2023",
      cgpa: "Percentage: 73%",
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Logical Reasoning"
      ],
      description:
        "Completed higher secondary education with a strong academic background in Mathematics, Physics, and Chemistry. Built excellent analytical and quantitative reasoning skills while consistently maintaining outstanding academic performance. Participated in competitive learning programs and strengthened time management, discipline, and critical thinking abilities."
    },

    {
      degree: "Class X (Secondary Education)",
      institution: "Sri Chaitanya Techno Curriculum School",
      duration: "2020 - 2021",
      cgpa: "Percentage: 100%",
      skills: [
        "Leadership",
        "Communication",
        "Teamwork",
        "Problem Solving"
      ],
      description:
        "Successfully completed secondary education with distinction and excellent academic achievements. Developed strong communication, leadership, and teamwork skills through active participation in academic and extracurricular activities. Established a solid foundation in mathematics, science, and technology-oriented learning."
    }
  ];

  return (
    <section id="about" className="about">

      <div className="background-blur blur1"></div>
      <div className="background-blur blur2"></div>

      <div className="container">

        <div className="section-header">
          <p className="section-subtitle">
            Academic & Professional Growth
          </p>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-description">
            A passionate Computer Science student focused on building
            innovative software solutions, intelligent applications,
            and modern web experiences through creativity, problem-solving,
            and continuous learning.
          </p>
        </div>

        {/* STATS */}

        <div className="stats-container">

          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Programming Languages</p>
          </div>

          <div className="stat-card">
            <h3>2027</h3>
            <p>Expected Graduation</p>
          </div>

          <div className="stat-card">
            <h3>AI/ML</h3>
            <p>Specialization</p>
          </div>

        </div>

        {/* EDUCATION TIMELINE */}

        <div className="timeline">

          {education.map((edu, index) => (

            <div
              key={index}
              className="education-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >

              <div className="timeline-dot"></div>

              <div className="card-glow"></div>

              <div className="card-content">

                <div className="top-section">

                  <div>
                    <h3 className="degree">
                      {edu.degree}
                    </h3>

                    <h4 className="institution">
                      {edu.institution}
                    </h4>
                  </div>

                  <div className="duration-box">
                    <div className="duration-badge">
                      {edu.duration}
                    </div>

                    <div className="cgpa-badge">
                      {edu.cgpa}
                    </div>
                  </div>

                </div>

                <p className="edu-description">
                  {edu.description}
                </p>

                {/* SKILLS */}

                <div className="skills-container">

                  {edu.skills.map((skill, i) => (
                    <span className="skill-tag" key={i}>
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="card-line"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;