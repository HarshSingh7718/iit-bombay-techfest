import styles from './Speakers.module.css';

const SPEAKERS = [
  { emoji: '🚀', gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)', name: 'Space Pioneer',     role: 'Former NASA Astronaut' },
  { emoji: '🤖', gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)', name: 'AI Visionary',      role: 'Pioneer in Deep Learning' },
  { emoji: '🧬', gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)', name: 'Biotech Innovator', role: 'Nobel Laureate, Medicine' },
  { emoji: '⚡', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Clean Tech CEO',    role: 'Founder, Energy Startup' },
  { emoji: '🌍', gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)', name: 'Policy Leader',     role: 'UN Tech Envoy' },
  { emoji: '🔬', gradient: 'linear-gradient(135deg,#6366f1,#06b6d4)', name: 'Quantum Physicist', role: 'Research Director, CERN' },
];

const ALL = [...SPEAKERS, ...SPEAKERS]; // duplicate for seamless loop

export default function Speakers() {
  return (
    <section className={styles.section} id="speakers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Keynote Speakers</span>
          <h2 className="section-title">
            Voices That<br />
            <em>Shape the Future</em>
          </h2>
          <p className="section-desc">
            Global luminaries from science, tech, space exploration, and beyond take the stage at Techfest 2026.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.track}>
          {ALL.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar} style={{ background: s.gradient }}>
                <span>{s.emoji}</span>
              </div>
              <h4>{s.name}</h4>
              <p>{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
