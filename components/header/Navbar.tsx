"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const services = [
  {
    title: "بناء عظم",
    link: "/bone-building",
  },
  {
    title: "ترميم وصيانة",
    link: "/maintenance",
  },
  {
    title: "تشطيبات",
    link: "/finishes",
  },
  {
    title: "ديكورات",

    link: "/decors",
  },
  {
    title: "مظلات",
    link: "/awnings",
  },
  {
    title: "برجولات",
    link: "/pergolas",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (menuOpen && menuRef.current) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -40 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      } else if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -40,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [menuOpen] } // runs when menuOpen changes
  );

  return (
    <header className="shadow-md bg-primary text-white fixed top-0 left-0 w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white font-heading">
          <Link href="/">شركتنا</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-background font-medium font-body">
          {services.map((service) => (
            <Link
              key={service.link}
              href={service.link}
              className="hover:text-background/80 transition"
            >
              {service.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden py-1 px-2 bg-light rounded-md hover:bg-light/80 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons">
            {menuOpen ? (
              <>
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
                  className="lucide lucide-x-icon lucide-x transition duration-300"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </>
            ) : (
              <>
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
                  className="lucide lucide-menu-icon lucide-menu transition duration-300"
                >
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                  <path d="M4 6h16" />
                </svg>
              </>
            )}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-primary border-t overflow-hidden"
        >
          {services.map((service) => (
            <Link
              key={service.link}
              href={service.link}
              className="block px-4 py-3 hover:bg-light/80"
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
export default Navbar;
