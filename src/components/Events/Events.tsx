import styles from './Events.module.css';
import Link from 'next/link';

const events = [
  { icon: '⚙️', title: 'Competitions',    desc: 'Battle it out in 300+ national and international technical competitions spanning AI, robotics, coding, engineering design and more.', tag: '300+ Challenges',    href: '#competitions', cta: 'Explore',       featured: true },
  { icon: '🎤', title: 'Speaker Sessions', desc: 'World-class keynotes by Nobel laureates, tech pioneers, astronauts, and global thought leaders pushing the frontiers of science.',   tag: '50+ Speakers',     href: '#speakers',    cta: 'Meet Speakers' },
  { icon: '🧠', title: 'Workshops',       desc: 'Immersive, hands-on learning experiences in AI, Deep Learning, Robotics, Quantum Computing, and emerging tech domains.',              tag: '80+ Workshops',    href: '#workshops',   cta: 'Learn More' },
  { icon: '🔭', title: 'Tech Expo',       desc: 'A mesmerizing showcase of cutting-edge technologies, international scientific exhibitions, and prototype demonstrations.',             tag: 'International Expo', href: '#',           cta: 'Visit Expo' },
  { icon: '💻', title: 'Hackathons',      desc: '24 to 72-hour marathon coding challenges where teams build real solutions to real problems. High stakes, high rewards.',              tag: '₹50L+ Prizes',     href: '#',            cta: 'Register' },
  { icon: '🤖', title: 'Robotics Arena',  desc: 'Witness autonomous machines battle it out in jaw-dropping robotic challenges. Engineer, program, and compete.',                       tag: 'Autonomous Bots',  href: '#',            cta: 'Compete' },
];

export default function Events() {
  return (
    <section className={styles.section} id="events">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Events</span>
          <h2 className="section-title">
            The Grand Stages<br />
            <em>of Innovation</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {events.map((e) => (
            <div key={e.title} className={`${styles.card} ${e.featured ? styles.featured : ''}`}>
              <div className={styles.glow} />
              <div className={styles.icon}>{e.icon}</div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <span className={styles.tag}>{e.tag}</span>
              <a href={e.href} className={styles.link}>
                {e.cta} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
