"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Link from "next/link";
const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    tl.from(".hero-title", { y: 50, opacity: 0, duration: 1 })
      .from(".hero-text", { y: 50, opacity: 0, duration: 1 })
      .fromTo(
        ".hero-btns",
        { y: 50, opacity: 0, ease: "none" },
        { y: 0, opacity: 1, ease: "none" },
        "-=0.5"
      )
      .fromTo(
        ".hero-btn",
        {
          y: 50,
          opacity: 0,
          ease: "none",
          duration: 0.05,
          stagger: 0.1,
        },
        { y: 0, opacity: 1, ease: "none", duration: 0.05, stagger: 0.1 },
        "-=0.5"
      )

      .from(".video-wrapper", { scale: 1.1, opacity: 0 }, 0);

    gsap.registerPlugin(SplitText);

    const split = new SplitText(".hero-title", { type: "words" });
    tl.from(
      split.words,
      {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
      },
      0
    );

    return () => {
      tl.kill();
      split.revert(); // Revert the SplitText changes
    };
  }, []);
  return (
    <section className="relative min-h-screen min-w-screen flex items-center justify-center">
      <div className="video-wrapper absolute inset-0 min-w-full min-h-full">
        <video loop autoPlay muted className="w-full h-full object-cover">
          <source src="/flag.webm" type="video/webm" />
          <source src="./flag.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-center mb-4 text-light">
          سيف تاورز… حيث يبدأ حلمك بالسكن الراقي
        </h1>
        <p className="hero-text text-lg md:text-xl font-body mb-6 text-light/90 text-center leading-relaxed">
          في <strong className="text-accent">سيف تاورز</strong>، نحول أحلامك إلى
          واقع. بخبرة تتجاوز <strong className="text-light">15 عامًا</strong> في
          البناء والتطوير العقاري، نبني لك <strong>منزل الأحلام</strong> من
          الأساسات حتى أفخم التشطيبات. كل مشروع نصممه هو{" "}
          <strong className="text-light">تحفة معمارية</strong> تمزج بين{" "}
          <strong>الجودة، الفخامة، والتصميم العصري</strong>.
        </p>

        <div className="hero-btns overflow-hidden flex items-center justify-center flex-wrap gap-4">
          <button aria-label="احجز موعدك الآن" className="hero-btn ">
            <Link aria-label="احجز موعدك الآن" href="#contact">
              {" "}
              اتصل بنا الآن
            </Link>
          </button>
          <span className="text-light/80 text-lg font-body">أو</span>
          <button aria-label="تواصل معنا عبر الواتساب" className="hero-btn">
            <Link
              aria-label="تواصل معنا عبر الواتساب"
              href="https://wa.me/+966531955694"
            >
              تواصل معنا عبر الواتساب
            </Link>
          </button>
        </div>

        <p className="mt-4 text-center text-light/80 text-sm">
          * عدد محدود من الوحدات المميزة – اغتنم الفرصة قبل نفادها!
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-accent text-2xl">
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
            className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line text-accent"
          >
            <path d="M12 17V3" />
            <path d="m6 11 6 6 6-6" />
            <path d="M19 21H5" />
          </svg>
        </div>
      </div>
      <div className="overlay-cover absolute inset-0 bg-black opacity-60"></div>
    </section>
  );
};

export default Hero;
