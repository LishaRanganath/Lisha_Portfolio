import './Introduction.css';
import myPhoto from '../../assets/1770664898155.jpeg';

const skills = ['Java', 'Python', 'React', 'React Native', 'SQL', 'REST APIs', 'Cloud Computing', 'Distributed Systems', 'AI'];

function Introduction() {
  return (
    <section id="introduction">
      <div className="introduction container">

        {/* Left — animated intro */}
        <div className="introduction__left">
          <h1>Hello, <span></span></h1>
          <h1>My Name is <span></span></h1>
          <h1>Lisha<span></span></h1>
          <a href="#projects" className="cta">Portfolio</a>
        </div>

        {/* Right — bio snapshot */}
        <div className="introduction__right">
          <div className="introduction__photo-wrap">
            <img src={myPhoto} alt="Lisha Ranganath" className="introduction__photo" />
          </div>
          <div className="introduction__bio">
            <h2 className="introduction__bio-name">Lisha Ranganath</h2>
            <p className="introduction__bio-role">Software Engineer · MSCS @ Georgia Tech</p>
            <p className="introduction__bio-desc">
              Experienced in building full-stack applications using Java, Python, React, SQL, and
              REST APIs — including real-time systems and scalable backend services. Passionate
              about distributed systems, AI applications, cloud computing, and cybersecurity.
            </p>
            <div className="introduction__skills">
              {skills.map((s, i) => (
                <span className="introduction__skill-tag" key={i}>{s}</span>
              ))}
            </div>
            <div className="introduction__actions">
              <a
                href="/Image/resume.pdf"
                className="introduction__btn introduction__btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Introduction;
