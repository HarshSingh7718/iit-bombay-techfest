'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface Particle {
  x: number; y: number;
  size: number;
  speedX: number; speedY: number;
  opacity: number; opacitySpeed: number;
  color: string;
}

function createParticle(w: number, h: number): Particle {
  const colors = ['#7c3aed', '#6366f1', '#3d9cf8', '#06b6d4', '#c9a227', '#a855f7'];
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 2 + 0.3,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.6 + 0.1,
    opacitySpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let particles: Particle[] = Array.from({ length: 120 }, () =>
      createParticle(canvas.width, canvas.height)
    );

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;
        if (p.opacity <= 0.05 || p.opacity >= 0.75) p.opacitySpeed *= -1;
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          Object.assign(p, createParticle(canvas.width, canvas.height));
        }
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.12;
            ctx.strokeStyle = '#7c3aed';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Animated stat counters
  useEffect(() => {
    const statEls = document.querySelectorAll<HTMLElement>('[data-target]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          let current = 0;
          const step = target / (2200 / 16);
          const iv = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current).toLocaleString('en-IN');
            if (current >= target) {
              el.textContent = target.toLocaleString('en-IN');
              clearInterval(iv);
            }
          }, 16);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Glitch effect
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      el.style.animation = 'glitchAnim 0.18s steps(2, end) both';
      setTimeout(() => { el.style.animation = ''; }, 200);
    }, 6000);
    return () => clearInterval(iv);
  }, []);

  // Cursor glow
  useEffect(() => {
    const glow = document.createElement('div');
    glow.style.cssText = `position:fixed;width:320px;height:320px;border-radius:50%;
      background:radial-gradient(circle,rgba(124,58,237,.06) 0%,transparent 70%);
      pointer-events:none;z-index:0;transform:translate(-50%,-50%);
      mix-blend-mode:screen;`;
    document.body.appendChild(glow);
    let mx = 0, my = 0, gx = 0, gy = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);
    let rafId: number;
    const animate = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      glow.style.left = gx + 'px';
      glow.style.top = gy + 'px';
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <Image
          src="/hero_bg.jpg"
          alt="Aetherial Renaissance"
          fill
          className={styles.bgImg}
          priority
          unoptimized
        />
        <div className={styles.overlay} />
      </div>

      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Asia&apos;s Largest Science &amp; Technology Festival
          <span className={styles.dot} />
        </div>

        <h1 className={styles.heading}>
          <span ref={titleRef} className={styles.tf}>TECHFEST</span>
          <span className={styles.year}>2026</span>
        </h1>

        <p className={styles.theme}>An Aetherial Renaissance</p>
        <p className={styles.host}>IIT Bombay &nbsp;&bull;&nbsp; January 2026</p>

        <div className={styles.actions}>
          <a href="#register" className="btn btn-primary">
            <span>Register Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#events" className="btn btn-ghost">
            <span>Explore Events</span>
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { target: 190, suffix: '+', label: 'Countries' },
            { target: 175000, suffix: '+', label: 'Participants' },
            { target: 500, suffix: '+', label: 'Events' },
            { target: 12, suffix: 'Cr+', label: 'Prize Pool' },
          ].map((s, i) => (
            <div key={s.label} className={styles.statGroup}>
              {i > 0 && <div className={styles.divider} />}
              <div className={styles.stat}>
                <div className={styles.statNumRow}>
                  <span className={styles.statNum} data-target={s.target}>0</span>
                  <span className={styles.statSuffix}>{s.suffix}</span>
                </div>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}
