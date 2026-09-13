'use client';

import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

const TARGET = new Date('2027-01-15T10:00:00+05:30');

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins:  Math.floor((diff % 3600000) / 60000),
    secs:  Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

export default function Countdown() {
  // Start with null to avoid SSR/client mismatch
  const [time, setTime] = useState<{ days: number; hours: number; mins: number; secs: number } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = time
    ? [time.days, time.hours, time.mins, time.secs]
    : [0, 0, 0, 0];

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>The Renaissance Begins In</p>
        <div className={styles.grid}>
          {UNITS.map((label, i) => (
            <div key={label} className={styles.item}>
              {i > 0 && <span className={styles.sep}>:</span>}
              <div className={styles.block}>
                <span className={styles.num} suppressHydrationWarning>
                  {pad(values[i])}
                </span>
                <span className={styles.blockLabel}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
