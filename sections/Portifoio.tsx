"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/animation/FadeIn";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef(null);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const projects = [
    {
      title: "مشروع فيلا سكنية",
      category: "تشطيبات فاخرة",
      img: "/about/construction-team.webp",
    },
    {
      title: "برج إداري",
      category: "مقاولات عامة",
      img: "/about/construction-team.webp",
    },
    {
      title: "مبنى تجاري",
      category: "بناء عظم",
      img: "/about/construction-team.webp",
    },
    {
      title: "حديقة عامة",
      category: "برجولات ومظلات",
      img: "/about/construction-team.webp",
    },
    {
      title: "مجمع سكني",
      category: "ترميم وصيانة",
      img: "/about/construction-team.webp",
    },
    {
      title: "مكتب إداري",
      category: "ديكورات داخلية",
      img: "/about/construction-team.webp",
    },
  ];

  useEffect(() => {
    if (imagesLoadedCount === projects.length) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [imagesLoadedCount, projects.length]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return; // Skip during SSR

      gsap.from(".portfolio-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top 85%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: -20, // Increased for visibility
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".portfolio-card"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef, revertOnUpdate: true }
  );

  const handleImageLoad = () => {
    setImagesLoadedCount((prevCount) => prevCount + 1);
  };

  return (
    <section
      ref={containerRef}
      className="portfolio-section py-20 bg-light text-primary"
    >
      <div className="container mx-auto px-6 text-center !mb-12">
        <FadeIn>
          <h2 className="text-4xl font-bold font-heading text-secondary mb-4">
            أعمالنا
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg font-body max-w-2xl mx-auto">
            مجموعة من أبرز المشاريع التي نفذناها في جدة ومكة، تشمل البناء
            والتشطيبات والديكورات بمستوى عالٍ من الجودة.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {projects.map((project, i) => (
          <div
            onClick={() => {}}
            key={i}
            className="portfolio-card cursor-pointer h-64 relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative w-full h-full ">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="parallax-img object-cover w-full inset-0 !h-[120%]"
                priority={true}
                onLoadingComplete={handleImageLoad}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 duration-300 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-heading">{project.title}</h3>
                <p className="text-sm font-body">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
