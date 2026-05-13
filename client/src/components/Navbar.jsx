import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const top = window.scrollY;
          const offset = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (top >= offset && top < offset + height) {
            setActive(section);
          }

        }

      });

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  // CLOSE MOBILE MENU AFTER CLICK

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className={scrolled ? 'header scrolled' : 'header'}>

      {/* LOGO */}

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        Bhuvan<span>.</span>
      </a>

      {/* MOBILE MENU */}

      <div
        className={menuOpen ? 'menu-toggle active' : 'menu-toggle'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAVBAR */}

      <nav className={menuOpen ? 'navbar active' : 'navbar'}>

        <a
          href="#home"
          className={active === 'home' ? 'active-link' : ''}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === 'about' ? 'active-link' : ''}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#projects"
          className={active === 'projects' ? 'active-link' : ''}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === 'contact' ? 'active-link' : ''}
          onClick={closeMenu}
        >
          Contact
        </a>

        {/* RESUME BUTTON */}

        <a
          href="/resume.pdf"
          className="resume-btn"
          download="Bhuvan_Resume.pdf"
          onClick={closeMenu}
        >
          Download Resume
        </a>

      </nav>

    </header>

  );
};

export default Navbar;