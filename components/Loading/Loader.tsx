"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const logoRef = useRef<SVGSVGElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const paths = logoRef.current?.querySelectorAll("path");
    if (!paths) return;

    gsap.set(paths, { stroke: "#fff", fill: "transparent", strokeWidth: 2 });

    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onFinish,
        });
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.05,
      ease: "power2.out",
    }).to(paths, { fill: "#fff", strokeWidth: 0, duration: 0.8 }, "-=1");
  }, []); // Empty deps so it runs once

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <svg
        ref={logoRef}
        width="216"
        height="233"
        viewBox="0 0 216 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-40"
      >
        {/* Fix fillRule/clipRule (React requires camelCase) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176.273 158.598C189.211 143.144 197 123.232 197 101.5C197 52.3467 157.153 12.5 108 12.5C58.8467 12.5 19 52.3467 19 101.5C19 127.009 29.7322 150.012 46.9277 166.24C34.8821 152.087 27.6129 133.743 27.6129 113.702C27.6129 68.9086 63.9248 32.5967 108.718 32.5967C153.511 32.5967 189.823 68.9086 189.823 113.702C189.823 130.305 184.834 145.743 176.273 158.598Z"
          fill="white"
        />
        {/* Add the rest of your paths (all with fillRule/clipRule fixed) */}
      </svg>
    </div>
  );
};

export default Loader;
