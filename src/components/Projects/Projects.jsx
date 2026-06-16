import './Projects.css';

const projectsData = [
  {
    number: '01',
    title: 'MapReduce Framework with gRPC',
    category: 'Distributed Systems · Advanced OS · Georgia Tech',
    desc: 'Designed and implemented a fault-tolerant distributed MapReduce framework in C++ using gRPC, as part of the Advanced Operating Systems coursework at Georgia Tech. Built a Master-Worker architecture capable of processing large datasets in parallel across multiple worker processes.',
    highlights: [
      'Designed a Master node handling task scheduling, workload distribution, and phase management between Map and Reduce operations',
      'Implemented gRPC-based communication with async event-driven processing using Completion Queues for concurrent task management',
      'Built fault-tolerant scheduling with deadline-based monitoring, task reallocation, and automatic retry logic for failed or slow workers',
      'Developed intermediate data partitioning, sorting, and a k-way merge algorithm for efficient Reduce phase execution',
      'Ensured data reliability through atomic file operations, temporary file management, and idempotent task execution',
    ],
    tags: ['C++', 'gRPC', 'Protocol Buffers', 'Multithreading', 'Distributed Systems', 'MapReduce'],
  },
  {
    number: '02',
    title: 'Automated Navigation Systems for Job Portals – A Survey on Multilingual Chatbots and Resume Builders and Parsers',
    category: 'Full Stack · NLP · IEEE Published 2024',
    desc: 'Final year team project (group of 4) presented and published at the IEEE Conference held at BMSCE in 2024. Originally sourced from an All India Hackathon problem statement — built a bilingual automated platform to help native job seekers access opportunities across languages and sectors.',
    highlights: [
      'Aggregated software and government job postings across the web using web scraping',
      'Integrated Google Translate API and NMT for multilingual support across the portal',
      'Built an NLP-powered chatbot using Streamlit for automated navigation',
      'Developed a resume parser that evaluates job qualification and extracts skill sets from uploaded resumes',
      'Built a 3-mode resume builder: manual form, LinkedIn profile scraping, and video parsing using NLP',
    ],
    tags: ['Python', 'NLP', 'NMT', 'Streamlit', 'Google Translate API', 'Web Scraping', 'Firebase', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Paying Guest App',
    category: 'Full Stack · MVC · Internship Project 2024',
    desc: 'Built during my internship learning period in 2024 to understand MVC architecture and automated testing with Pytest. A full-stack rental platform with three distinct role-based interfaces for users, owners, and admins.',
    highlights: [
      'User interface to browse available paying guest accommodations and book them',
      'Owner interface for posting, updating, and deleting building listings',
      'Admin interface to manage all listings and remove owners along with their postings',
      'Implemented RESTful APIs following MVC architecture using Ruby on Rails',
      'Performed end-to-end automated testing for the entire application using Pytest',
    ],
    tags: ['Ruby on Rails', 'Python', 'Pytest', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
    link: 'https://github.com/LishaRanganath/PayingGuestApp',
  },
  {
    number: '04',
    title: 'Barrier Synchronization Algorithms for Scalable Memory Systems',
    category: 'Parallel Computing · HPC · Advanced OS · Georgia Tech',
    desc: 'Designed, implemented, and benchmarked scalable barrier synchronization algorithms for shared and distributed memory systems as part of the Advanced Operating Systems coursework at Georgia Tech, evaluated on the PACE HPC cluster.',
    highlights: [
      'Implemented OpenMP barriers (Centralized Sense Reversal & Dissemination) and MPI barriers (Dissemination & Tournament) for thread and process-level synchronization',
      'Designed two hybrid hierarchical barriers combining OpenMP and MPI to synchronize across both threads and distributed processes simultaneously',
      'Benchmarked on Georgia Tech PACE HPC cluster — varying thread and process counts to analyze latency, scalability, and communication overhead',
      'Compared custom implementations against built-in OpenMP/MPI primitives; logarithmic algorithms (Dissemination, Tournament) scaled significantly better than centralized approaches',
      'Analyzed impact of NUMA architecture, cache coherence traffic, and network communication patterns on synchronization performance',
    ],
    tags: ['C', 'OpenMP', 'MPI', 'Parallel Computing', 'Distributed Systems', 'HPC', 'Linux', 'NUMA'],
  },
  {
    number: '05',
    title: 'Dance Posture Detection',
    category: 'Computer Vision · Mini Project 2022',
    desc: 'Built as a mini project in my Bachelors (group of 2), inspired by our shared passion for classical dance. The website helps beginners correct their dance postures and hand gestures in real time without needing a teacher.',
    highlights: [
      'Users stand in front of the camera and copy poses shown on screen — system estimates correctness using body keypoints (knee, elbow, etc.) via PoseNet on TensorFlow',
      'Proceeds to the next pose on a successful match, otherwise prompts the user to retry',
      'Implemented hand gesture recognition for classical dance mudras using MediaPipe',
      'Built front-end with HTML, CSS, and JavaScript; backend with PHP on Apache server for request handling and user data storage',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Apache', 'TensorFlow', 'PoseNet', 'MediaPipe'],
    link: 'https://github.com/LishaRanganath/Dance_Web_Page',
  },

];

function Projects() {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
          <p className="projects-subtitle">A few things I've built</p>
        </div>
        <div className="all-projects">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card__top">
                <span className="project-card__number">{project.number}</span>
                <span className="project-card__category">{project.category}</span>
              </div>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__desc">{project.desc}</p>
              <ul className="project-card__highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              )}
              <div className="project-card__accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
