import './Footer.css';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/lisha-ranganath-0ba04824a',
    icon: 'https://img.icons8.com/bubbles/100/000000/linkedin.png',
    alt: 'LinkedIn',
  },
  {
    href: 'https://github.com/LishaRanganath',
    icon: 'https://img.icons8.com/bubbles/100/000000/github.png',
    alt: 'GitHub',
  },
];

function Footer() {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            <span>L</span>isha <span>R</span>anganath
          </h1>
        </div>
        <div className="social-icon">
          {socialLinks.map((social, index) => (
            <div className="social-item" key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
