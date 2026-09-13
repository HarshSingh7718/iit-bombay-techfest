import Image from 'next/image';
import styles from './Footer.module.css';

const links = {
  'Quick Links': [
    { label: 'About',        href: '#about' },
    { label: 'Events',       href: '#events' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Speakers',     href: '#speakers' },
  ],
  Participate: [
    { label: 'Register',       href: '#register' },
    { label: 'Workshops',      href: '#workshops' },
    { label: 'Accommodation',  href: '#' },
    { label: 'Travel',         href: '#' },
  ],
  Connect: [
    { label: 'techfest.org', href: 'https://techfest.org', external: true },
    { label: 'Instagram',    href: '#' },
    { label: 'LinkedIn',     href: '#' },
    { label: 'Twitter / X',  href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/techfest_emblem.jpg"
              alt="Techfest"
              width={60}
              height={60}
              className={styles.emblem}
              unoptimized
            />
            <div>
              <h3>TECHFEST 2026</h3>
              <p>IIT Bombay</p>
              <p className={styles.quote}>An Aetherial Renaissance</p>
            </div>
          </div>

          <div className={styles.linksGrid}>
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className={styles.col}>
                <h5>{group}</h5>
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    {...('external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Techfest, IIT Bombay. All rights reserved.</p>
          <p>Asia&apos;s Largest Science &amp; Technology Festival</p>
        </div>
      </div>
    </footer>
  );
}
