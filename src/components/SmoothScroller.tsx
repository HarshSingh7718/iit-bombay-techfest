'use client';

import { useEffect, useRef } from 'react';
import ReactLenis from 'lenis/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    // Sync GSAP's ticker with Lenis requestAnimationFrame
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
