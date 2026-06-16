import './About.css';

const experiences = [
  {
    role: 'Associate Engineer — Front-End Development',
    company: 'L&T Technology Services',
    location: 'Bengaluru',
    duration: '09/2024 – 09/2025',
    type: 'Full-Time',
    points: [
      'Built real-time IoT dashboards using React, enabling live data visualization and improving monitoring efficiency',
      'Integrated dynamic data streams to deliver responsive and high-performance user interfaces',
    ],
  },
  {
    role: 'Associate Engineer Trainee — Full-Stack Development',
    company: 'L&T Technology Services',
    location: 'Bengaluru',
    duration: '06/2024 – 08/2024',
    type: 'Trainee',
    points: [
      'Built a scalable Product Management System using Spring Boot, React, and SQL, enabling reliable CRUD operations and efficient data handling',
      'Implemented real-time validation, alert mechanisms, and intuitive UI, improving data accuracy and user experience',
    ],
  },
  {
    role: 'Associate Software Engineer Intern',
    company: 'Plan Source India',
    location: 'Bengaluru',
    duration: '02/2024 – 06/2024',
    type: 'Internship',
    points: [
      'Built a full-stack PG Management System using Ruby on Rails (MVC), implementing role-based access, booking workflows, and user profile management',
      'Integrated OAuth-based authentication and REST APIs to support secure user access and efficient data flow',
      'Automated end-to-end testing using Selenium (Python, pytest), improving reliability and reducing manual testing effort',
    ],
  },
];

function About() {
  return (
    <section id="about">
      <div className="experience container">
        <div className="experience-header">
          <h1 className="section-title">
            Profes<span>sional</span> Experience
          </h1>
          <p className="experience-subtitle">Where I've worked</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="exp-card" key={index}>
              <div className="exp-card__dot" />
              <div className="exp-card__body">
                <div className="exp-card__header">
                  <div className="exp-card__title-group">
                    <h2 className="exp-card__role">{exp.role}</h2>
                    <p className="exp-card__company">
                      {exp.company}
                      <span className="exp-card__location"> · {exp.location}</span>
                    </p>
                  </div>
                  <div className="exp-card__meta">
                    <span className="exp-card__type">{exp.type}</span>
                    <span className="exp-card__duration">{exp.duration}</span>
                  </div>
                </div>
                <ul className="exp-card__points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
