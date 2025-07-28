"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
          <div className="">
            <Link aria-label="العودة إلى الصفحة الرئيسية" href={"/"}>
              <Image
                src="/logos/2-removebg-preview.png"
                alt="Logo"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <p className="text-light/80">
            في <strong className="text-accent">سيف تاورز</strong>، نقدم خدمات
            البناء، التشطيبات، والديكورات الراقية وفق أعلى معايير الجودة. مهمتنا
            أن نحقق لك منزل الأحلام بتصميم يجمع بين الفخامة والراحة.
          </p>
        </div>

        {/* Services Links */}
        <div className="footer-item">
          <h3 className="text-lg font-semibold text-white mb-3">خدماتنا</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.link}>
                <Link
                  aria-label={`خدمة ${service.title}`}
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
                aria-label="رقم الهاتف"
                href="tel:+966531955694"
                className="hover:text-accent transition"
              >
                📞+966531955694
              </Link>
            </li>
            <li>
              <Link
                aria-label="البريد الإلكتروني"
                href="mailto:info@ourcompany.com"
                className="hover:text-accent transition"
              >
                📧 info@ourcompany.com
              </Link>
            </li>
            <li>
              <Link
                aria-label="موقع الشركة"
                href="https://maps.app.goo.gl/PrftFhzg5LHMUY2v7?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                📍جبل النور - شارع حسين سرحان - المملكة العربية السعودية
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-background text-sm mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} سيف تاورز. جميع الحقوق محفوظة.</p>
        <p>
          تم تصميم الموقع بواسطة{" "}
          <Link
            href="https://www.linkedin.com/in/abdullah-awad3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            عبدالله عوض
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
