'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="#hero" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/techfest_emblem.jpg"
            alt="Techfest Emblem"
            width={38}
            height={38}
            className={styles.emblem}
            unoptimized
          />
          <div className={styles.brand}>
            <span className={styles.title}>TECHFEST</span>
            <span className={styles.sub}>IIT BOMBAY</span>
          </div>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {['about', 'events', 'competitions', 'speakers', 'workshops', 'contact'].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={closeMenu}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a href="#register" className={styles.cta} onClick={closeMenu}>
          Register Now
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
