'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: '🌐', title: 'Global Reach',          desc: 'Participants from 190+ countries worldwide' },
  { icon: '🏆', title: '₹12 Crore+ Prize Pool', desc: "One of India's biggest student tech competitions" },
  { icon: '🔬', title: '500+ Events',            desc: 'Competitions, workshops, exhibitions & talks' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !emblemRef.current) return;

    gsap.fromTo(
      emblemRef.current,
      { y: 60, rotation: -5 },
      {
        y: -60,
        rotation: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className={styles.topLine} />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About the Festival</span>
          <h2 className="section-title">
            Where Technology<br />
            <em>Transcends Boundaries</em>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Techfest, the annual Science &amp; Technology festival of IIT Bombay, stands as Asia&apos;s
              largest gathering of brilliant minds, innovators, and visionaries. Each year, we push
              the boundaries of what&apos;s possible — inviting students, researchers, and industry
              leaders from over 190 countries.
            </p>
            <p>
              Techfest 2026 celebrates <strong>An Aetherial Renaissance</strong> — a theme that bridges
              classical wisdom with the spark of cutting-edge technology. It&apos;s a convergence of art,
              science, and imagination that invites us to rediscover the world anew. From quantum computing
              to interstellar exploration, we are the launchpad for tomorrow&apos;s breakthroughs.
            </p>
            <p>
              For over two decades, Techfest has been the pinnacle of technological advancement and student
              collaboration. Let the symphony of gears and the poetry of code inspire you to reach for the stars.
            </p>

            <div className={styles.highlights}>
              {highlights.map((h) => (
                <div key={h.title} className={styles.item}>
                  <div className={styles.icon}>{h.icon}</div>
                  <div>
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.emblemWrap} ref={emblemRef}>
            <div className={styles.glow} />
            <Image
              src="/techfest_emblem.jpg"
              alt="Techfest Emblem"
              width={340}
              height={340}
              className={styles.emblem}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
