"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const services = [
  { title: "بناء عظم", link: "/bone-building" },
  { title: "ترميم وصيانة", link: "/maintenance" },
  { title: "تشطيبات", link: "/finishes" },
  { title: "ديكورات", link: "/decors" },
  { title: "مظلات", link: "/awnings" },
  { title: "برجولات", link: "/pergolas" },
  { title: "تصميم خارجي", link: "/exterior-design" },
  { title: "تصميم داخلي", link: "/interior-design" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuRef.current) return;

    if (menuOpen) {
      // إغلاق القائمة
      gsap.to(menuRef.current, {
        height: 0,
        overflow: "hidden",
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setMenuOpen(false),
      });
    } else {
      // فتح القائمة
      setMenuOpen(true);
      const scrollHeight = menuRef.current.scrollHeight; // الطول الطبيعي للمحتوى
      gsap.fromTo(
        menuRef.current,
        { height: 0 },
        {
          height: scrollHeight,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            menuRef.current && (menuRef.current.style.height = "auto");
          },
        }
      );
    }
  };

  useEffect(() => {
    // ضبط القائمة لتكون مغلقة افتراضيًا
    if (menuRef.current) {
      menuRef.current.style.height = "0px";
      menuRef.current.style.overflow = "hidden";
    }
  }, []);

  return (
    <header
      className={`shadow-md bg-primary text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white font-heading">
          <Link href="/" aria-label="الصفحة الرئيسية">
            <Image
              src="/logos/2-removebg-preview.png"
              alt="Logo"
              width={200}
              height={50}
              className=""
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-6  text-background font-medium font-heading">
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
          onClick={toggleMenu}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? (
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
              className="lucide lucide-x transition duration-300"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
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
              className="lucide lucide-menu transition duration-300"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden bg-primary border-t overflow-hidden"
      >
        {services.map((service) => (
          <Link
            aria-label={`قائمة الخدمات ${service.title}`}
            key={service.link}
            href={service.link}
            className="block px-4 py-3 hover:bg-light/80 text-background font-medium font-body transition"
            onClick={() => toggleMenu()}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </header>
  );
};
export default Navbar;
