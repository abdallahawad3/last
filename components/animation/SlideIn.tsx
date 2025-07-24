"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

export function SlideIn({ children, from = "left", delay = 0 }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const offset = from === "left" || from === "right" ? 80 : 40;
    const x = from === "left" ? -offset : from === "right" ? offset : 0;
    const y = from === "top" ? -offset : from === "bottom" ? offset : 0;

    const animateIn = () => {
      gsap.to(node, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const animateOut = () => {
      gsap.to(node, {
        opacity: 0,
        x,
        y,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    // Set initial state
    gsap.set(node, { opacity: 0, x, y });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn();
        } else {
          animateOut();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, from]);

  return <div ref={ref}>{children}</div>;
}
