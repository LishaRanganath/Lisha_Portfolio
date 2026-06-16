import './Education.css';

const educationData = [
  {
    degree: 'MS in Computer Science',
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    duration: '2026 – Present',
    status: 'In Progress',
    points: [],
  },
  {
    degree: 'B.E. Information Science and Engineering',
    school: 'New Horizon College of Engineering',
    location: 'Bengaluru, India',
    duration: '2020 – 2024',
    status: 'Graduated with Honors',
    points: ['CGPA: 9.39 · Graduated with Honors'],
  },
];

function Education() {
  return (
    <section id="education">
      <div className="education container">
        <div className="education-header">
          <h1 className="section-title">
            Edu<span>cation</span>
          </h1>
          <p className="education-subtitle">Academic background</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-card__dot" />
              <div className="edu-card__body">
                <div className="edu-card__header">
                  <div className="edu-card__title-group">
                    <h2 className="edu-card__degree">{edu.degree}</h2>
                    <p className="edu-card__school">
                      {edu.school}
                      <span className="edu-card__location"> · {edu.location}</span>
                    </p>
                  </div>
                  <div className="edu-card__meta">
                    <span className="edu-card__status">{edu.status}</span>
                    <span className="edu-card__duration">{edu.duration}</span>
                  </div>
                </div>
                {edu.points.length > 0 && (
                  <ul className="edu-card__points">
                    {edu.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
