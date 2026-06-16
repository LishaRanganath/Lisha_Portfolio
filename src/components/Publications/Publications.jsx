import './Publications.css';

const publicationsData = [
  {
    type: 'IEEE Conference Paper',
    title: 'Automated Navigation Systems for Job Portals – A Survey on Multilingual Chatbots and Resume Builders and Parsers',
    authors: 'Lisha Ranganath et al.',
    venue: 'IEEE Conference, BMSCE — Published 2024',
    desc: 'A bilingual automated job portal built as a final year project, originally sourced from an All India Hackathon problem statement. The platform aggregates job listings across the web via scraping, supports multiple Indian languages through Google Translate API and NMT, and features an NLP-powered chatbot for navigation. Includes a resume parser that evaluates candidate qualifications and a multi-mode resume builder — via manual form, LinkedIn profile scraping, or video parsing.',
    link: 'https://ieeexplore.ieee.org/document/10544358',
  },
];

function Publications() {
  return (
    <section id="publications">
      <div className="publications container">
        <div className="publications-header">
          <h1 className="section-title">
            Publi<span>cations</span>
          </h1>
          <p className="publications-subtitle">Research & written work</p>
        </div>

        {publicationsData.length === 0 ? (
          <div className="publications-empty">
            <span className="empty-icon">📄</span>
            <p>Publications coming soon.</p>
          </div>
        ) : (
          <div className="publications-list">
            {publicationsData.map((pub, index) => (
              <div className="pub-card" key={index}>
                <div className="pub-card__left">
                  <span className="pub-card__type">{pub.type}</span>
                  <div className="pub-card__line" />
                </div>
                <div className="pub-card__body">
                  <h2 className="pub-card__title">{pub.title}</h2>
                  <p className="pub-card__authors">{pub.authors}</p>
                  <p className="pub-card__venue">{pub.venue}</p>
                  <p className="pub-card__desc">{pub.desc}</p>
                  {pub.link && pub.link !== '#' && (
                    <a
                      href={pub.link}
                      className="pub-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Publications;
