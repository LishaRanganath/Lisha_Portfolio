import './Certificates.css';

const certificates = [
  {
    title: 'Cloud Computing and Distributed Systems',
    desc: 'An in-depth course covering the core principles behind modern cloud platforms — including virtualization, cloud storage, fault tolerance, peer-to-peer systems, and distributed algorithms. Explored real-world systems like Apache Spark, Apache Cassandra, HBase, MapReduce, and Google\'s Chubby while studying concepts such as leader election, distributed mutual exclusion, and PAXOS-based fault tolerance.',
  },
  {
    title: 'Foundation of Cloud IoT Edge ML',
    desc: 'A comprehensive course on the convergence of IoT, Machine Learning, and Cloud Computing through the lens of Edge Computing. Covered core concepts including QoS provisioning for delay-sensitive IoT applications, virtualization, wireless networks, tensor processing units, and spatial localization. Explored real-world applications using Deep Learning across self-driving cars, augmented reality, and distributed end-user systems.',
  },
  {
    title: 'Affective Computing',
    desc: 'A course at the intersection of Computer Science, design, and human psychology focused on enabling machines to recognize and respond to human emotions. Covered emotion theory, computational modelling, and multi-modal emotion analysis using voice, facial expressions, and physiological signals — along with relevant machine learning and signal processing techniques. Also examined the ethical, legal, and social implications of affective computing in Human-Machine Interaction.',
  },

  {
    title: 'Google Cloud Computing Foundations',
    desc: 'A foundational course by Google covering cloud basics, big data, and machine learning, with a focus on where and how Google Cloud Platform fits into modern computing. Combined conceptual learning with hands-on labs through the Qwiklabs platform to reinforce practical cloud skills.',
  },
  {
    title: 'Design & Implementation Of Human-Computer Interfaces',
    desc: 'A structured course on building usable systems, covering the full lifecycle from requirements gathering to implementation and evaluation. Topics included usability engineering, identification of usability requirements, usable design principles, and system evaluation techniques. Gained practical understanding of how to design consumer-facing products that are intuitive and accessible to everyday users.',
  },

  {
    title: 'Ethical Hacking',
    desc: 'A practical course covering the fundamentals of ethical hacking — from networking and cryptography to real-world attacks and vulnerabilities. Learned how individuals and organizations can adopt safe IT practices by understanding threat vectors and security hardening techniques, supported by hands-on demonstrations throughout the course.',
  },
  {
    title: 'Introduction To Industry 4.0 And Industrial Internet Of Things',
    desc: 'A course on the transformation of industrial processes through modern technologies like Cyber Physical Systems, IoT, Cloud Computing, Machine Learning, and Data Analytics. Explored how IIoT connects automation systems with enterprise planning and product lifecycle management, and how these technologies collectively drive the Industry 4.0 revolution.',
  },
];

function Certificates() {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">
            Certif<span>i</span>cates
          </h1>
        </div>
        <div className="service-bottom">
          {certificates.map((cert, index) => (
            <div className="service-item" key={index}>
              <div className="icon">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                  alt="certificate icon"
                />
              </div>
              <h2>{cert.title}</h2>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
