import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      date: "May 2024 – Present",
      company: "Vaikunth Technologies",
      role: "Jr. MERN Stack Developer",
      description: [
        "Developed and deployed 5+ scalable full-stack web applications using the MERN stack, improving user experience for 1,000+ end-users.",
        "Designed and integrated RESTful APIs, streamlining data exchange and reducing server response time by 20%.",
        "Implemented third-party API integrations to enhance application functionality.",
        "Optimized code quality by writing unit tests and debugging issues, achieving 95% code coverage and improving reliability.",
      ],
    },
    {
      date: "Oct 2023 – Mar 2024",
      company: "ROBO+ Edutech",
      role: "Trainer",
      description: [
        "Conducted 10+ hands-on workshops on hardware fundamentals, coding, and problem-solving for 2000+ school students, fostering interest in STEM.",
        "Designed and delivered interactive lessons on electronics, IoT concepts, and programming basics, enabling students to build practical projects.",
        "Enhanced student engagement by integrating real-world applications into the curriculum, increasing participation rates by 30%.",
        "Collaborated with school administrators to tailor training sessions that aligned with educational goals.",
      ],
    },
    {
      date: "Nov 2022 – Jan 2023",
      company: "AzzipTech",
      role: "Intern",
      description: [
        "Designed and implemented a gesture-controlled system using Arduino, ultrasonic sensors, and jumper wire connections for hands-free computer control.",
        "Developed a Python-based software solution with OpenCV and Machine Learning, replacing hardware dependency with webcam-based gesture recognition.",
        "Prototyped and tested hardware and software systems in collaboration with a team, achieving a functional and user-friendly interface.",
      ],
    },
  ];

  return (
    <div className="timeline-container" id="experience">
      <div className="heading">
        <h5>EXPERIENCE</h5>
        <h2>
          <span className="heading-border"></span>EXPERIENCE
          <span className="heading-border"></span>
        </h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="timeline-content">
              <button className="btn-date">{exp.date}</button>
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
