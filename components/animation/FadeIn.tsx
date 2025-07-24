"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animateIn = () => {
      gsap.to(node, {
        opacity: 1,
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
        y: 30,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    // Set initial state
    gsap.set(node, { opacity: 0, y: 30 });

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
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
