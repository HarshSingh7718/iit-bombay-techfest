import styles from './Workshops.module.css';

const WORKSHOPS = [
  { icon: '🧠', title: 'Deep Learning Bootcamp',          desc: 'Intensive 2-day hands-on training with industry experts. Build, train, and deploy neural networks from scratch.', tags: ['2 Days', 'Certificate', 'Beginner → Advanced'] },
  { icon: '🤖', title: 'Robotics & ROS',                  desc: 'Program real robots using ROS. Navigate, sense, and control autonomous hardware in live environments.',            tags: ['1 Day', 'Certificate', 'Intermediate'] },
  { icon: '⚛️', title: 'Quantum Computing',               desc: 'Explore qubits, quantum gates, and Qiskit. Understand the future of computation beyond classical limits.',         tags: ['1 Day', 'Certificate', 'Advanced'] },
  { icon: '🔐', title: 'Cybersecurity & Ethical Hacking', desc: 'CTF-style hands-on workshop on pentesting, vulnerability analysis, and network security fundamentals.',            tags: ['1 Day', 'Certificate', 'All Levels'] },
  { icon: '📊', title: 'Data Science & Analytics',        desc: 'From raw data to powerful insights. Learn pandas, visualization, model building, and data storytelling.',          tags: ['2 Days', 'Certificate', 'Beginner Friendly'] },
  { icon: '🚁', title: 'Drone Engineering',               desc: 'Build and fly your own drone. Understand aerodynamics, flight controllers, and autonomous navigation.',            tags: ['1 Day', 'Certificate', 'Intermediate'] },
];

export default function Workshops() {
  return (
    <section className={styles.section} id="workshops">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Workshops &amp; Learning</span>
          <h2 className="section-title">
            Master Tomorrow&apos;s<br />
            <em>Skills Today</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {WORKSHOPS.map((w) => (
            <div key={w.title} className={styles.card}>
              <div className={styles.icon}>{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
              <div className={styles.tags}>
                {w.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
