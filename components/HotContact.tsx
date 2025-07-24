"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const HotContact = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!popupRef.current) return;

    if (open) {
      // Expand: from 0 height to auto
      gsap.fromTo(
        popupRef.current,
        { height: 0, opacity: 0 },
        {
          height: "130px",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      // Collapse: to 0 height
      gsap.to(popupRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 gap-1 flex flex-col items-end z-50">
      {/* Popup (icons only) */}
      <div
        ref={popupRef}
        className="overflow-hidden -top-1 flex flex-col justify-between items-center gap-4 bg-primary rounded-xl shadow-lg py-3 px-2"
        style={{ height: 0, opacity: 0 }}
      >
        <a
          href="https://wa.me/+966569088789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="w-10 h-10" />
        </a>
        <a href="tel:+966569088789">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone-icon lucide-phone text-white"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
        </a>
      </div>

      {/* Main Floating Button */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 bg-accent group flex items-center justify-center rounded-full cursor-pointer hover:bg-primary transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:scale-125 group-hover:stroke-white"
        >
          <path d="M16 2v2" />
          <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
          <path d="M8 2v2" />
          <circle cx="12" cy="11" r="3" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
        </svg>
      </div>
    </div>
  );
};

export default HotContact;
