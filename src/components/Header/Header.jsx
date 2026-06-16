import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Home', href: '#introduction', dataAfter: 'Home' },
  { label: 'Certificates', href: '#services', dataAfter: 'Service' },
  { label: 'Projects', href: '#projects', dataAfter: 'Projects' },
  { label: 'Publications', href: '#publications', dataAfter: 'Publications' },
  { label: 'Education', href: '#education', dataAfter: 'Education' },
  { label: 'Experience', href: '#about', dataAfter: 'Experience' },
  { label: 'Contact', href: '#contact', dataAfter: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section id="header">
      <div
        className="header container"
        style={{ backgroundColor: scrolled ? '#29323c' : 'rgba(31,30,30,0.24)' }}
      >
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>L</span>isha <span>R</span>anganath
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
            </div>
            <ul className={menuOpen ? 'active' : ''}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-after={link.dataAfter}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
