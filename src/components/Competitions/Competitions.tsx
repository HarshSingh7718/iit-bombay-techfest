'use client';

import { useState } from 'react';
import styles from './Competitions.module.css';

const FILTERS = ['All', 'AI / ML', 'Robotics', 'Coding', 'Design', 'Physics'] as const;
type Filter = typeof FILTERS[number];

const COMPETITIONS = [
  { num: '01', title: 'AI Model Showdown',  desc: 'Build & deploy AI models that solve real-world problems. Judged on accuracy, creativity, and scalability.', prize: '₹5,00,000', badge: 'AI / ML',  cat: 'AI / ML' },
  { num: '02', title: 'Bot Wars',           desc: 'Design and program autonomous bots to navigate complex arenas. Hardware + software integration challenge.',  prize: '₹3,00,000', badge: 'Robotics', cat: 'Robotics' },
  { num: '03', title: 'Code Rush',          desc: 'Speed-based competitive programming. Solve complex algorithmic puzzles under pressure. Solo & team formats.', prize: '₹2,00,000', badge: 'Coding',   cat: 'Coding' },
  { num: '04', title: 'Design Frontier',    desc: 'Innovation in product design, UX/UI, and engineering prototypes. Present your vision to industry jury.',     prize: '₹1,50,000', badge: 'Design',   cat: 'Design' },
  { num: '05', title: 'Physics Olympiad',   desc: 'Mind-bending theoretical and experimental physics challenges at an international level.',                    prize: '₹1,00,000', badge: 'Physics',  cat: 'Physics' },
  { num: '06', title: 'Deep Learning Duel', desc: 'Train neural networks on mystery datasets. Push the limits of deep learning architectures.',                 prize: '₹2,50,000', badge: 'AI / ML',  cat: 'AI / ML' },
];

export default function Competitions() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All' ? COMPETITIONS : COMPETITIONS.filter((c) => c.cat === active);

  return (
    <section className={styles.section} id="competitions">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competitions</span>
          <h2 className="section-title">
            Prove Your Mastery<br />
            <em>Win Glory</em>
          </h2>
        </div>

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((c) => (
            <div key={c.num} className={styles.card}>
              <div className={styles.num}>{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className={styles.meta}>
                <span className={styles.prize}>{c.prize}</span>
                <span className={styles.badge}>{c.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#" className="btn btn-primary">View All 300+ Competitions</a>
        </div>
      </div>
    </section>
  );
}
