// StaggerList.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface StaggerListProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  from?: "left" | "right" | "top" | "bottom";
}

export function StaggerList({
  children,
  delay = 0,
  stagger = 0.1,
  from = "bottom",
}: StaggerListProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Select the service-card elements specifically
    const items = node.querySelectorAll(".service-card");
    if (items.length === 0) return;

    const offset = from === "left" || from === "right" ? 80 : 40;
    const x = from === "left" ? -offset : from === "right" ? offset : 0;
    const y = from === "top" ? -offset : from === "bottom" ? offset : 0;

    // Set initial state
    gsap.set(items, { opacity: 0, x, y });

    const animateIn = () => {
      gsap.from(items, {
        opacity: 0,
        x,
        y,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const animateOut = () => {
      gsap.to(items, {
        opacity: 0,
        x,
        y,
        duration: 0.6,
        stagger: stagger * 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

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
  }, [delay, stagger, from]);

  return <div ref={ref}>{children}</div>;
}
