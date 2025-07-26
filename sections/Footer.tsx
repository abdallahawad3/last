"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const services = [
  { title: "بناء عظم", link: "/bone-building", icon: "🧱" },
  { title: "ترميم وصيانة", link: "/maintenance", icon: "🛠️" },
  { title: "تشطيبات", link: "/finishes", icon: "🏠" },
  { title: "ديكورات", link: "/decors", icon: "🎨" },
  { title: "مظلات", link: "/awnings", icon: "⛱️" },
  { title: "برجولات", link: "/pergolas", icon: "🌿" },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (footerRef.current) {
      const items = footerRef.current.querySelectorAll(".footer-item");
      gsap.from(items, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-primary text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="footer-item">
          <h3 className="text-xl font-bold text-white mb-3">شركتنا</h3>
          <p className="text-gray-400 text-sm leading-6">
            نحن نقدم خدمات البناء والتشطيبات والديكورات بأعلى معايير الجودة،
            لنحقق لك منزل أحلامك.
          </p>
        </div>

        {/* Services Links */}
        <div className="footer-item">
          <h4 className="text-lg font-semibold text-white mb-3">خدماتنا</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.link}>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 hover:text-accent transition"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-item">
          <h4 className="text-lg font-semibold text-white mb-3">تواصل معنا</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="tel:+1234567890"
                className="hover:text-accent transition"
              >
                📞 +123 456 7890
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@ourcompany.com"
                className="hover:text-accent transition"
              >
                📧 info@ourcompany.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps/place/Our+Company+Address"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                📍 عنوان الشركة
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-background text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} شركتنا. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
