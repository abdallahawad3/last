"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/FadeIn";
import { SlideIn } from "@/components/animation/SlideIn";
import { StaggerList } from "@/components/animation/StaggerList";
import Link from "next/link";

export default function OurServices() {
  const services = [
    {
      title: "بناء عظم",
      desc: "إنشاء الهيكل الإنشائي بجودة هندسية عالية",
      img: "/services/construction.webp",
      icon: "🧱",
      link: "/bone-building",
    },
    {
      title: "ترميم وصيانة",
      desc: "إصلاح وتجديد المباني القديمة بأحدث الأساليب",
      img: "/services/repair.webp",
      icon: "🛠️",
      link: "/maintenance",
    },
    {
      title: "تشطيبات",
      desc: "تنفيذ أعمال التشطيب الداخلي باحترافية",
      img: "/services/finishing.webp",
      icon: "🏠",
      link: "/finishes",
    },
    {
      title: "ديكورات",
      desc: "تصميم وتنفيذ ديكورات عصرية للمنازل والمكاتب",
      img: "/services/decor.webp",
      icon: "🎨",
      link: "/decors",
    },
    {
      title: "مظلات",
      desc: "تركيب مظلات للحدائق والسيارات بجودة عالية",
      img: "/services/shade.webp",
      icon: "⛱️",
      link: "/awnings",
    },
    {
      title: "برجولات",
      desc: "تصميم وتنفيذ برجولات خشبية وحديدية أنيقة",
      img: "/services/pergola.webp",
      icon: "🌿",
      link: "/pergolas",
    },
  ];

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(".heading", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="services-section py-20 text-center relative ">
      <div className="container">
        <FadeIn delay={0.1}>
          <h2 className="heading text-4xl font-bold text-secondary mb-4">
            خدماتنا
          </h2>
        </FadeIn>
        <SlideIn>
          <p className="text-2xl font-body max-w-2xl mx-auto mb-12">
            نقدم جميع خدمات البناء والتشطيب تحت سقف واحد بخبرة وجودة عالية.
          </p>
        </SlideIn>
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card border-dashed border-3 border-secondary bg-primary p-2 rounded-xl shadow-lg overflow-hidden relative group hover:shadow-lg hover:shadow-accent transition"
            >
              <div className="relative w-full h-70 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={300}
                  priority={true}
                  className="w-full h-full rounded-xl object-cover transform group-hover:scale-110 transition duration-500 clip-triangle"
                />
                <div className="service-icon absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-accent text-white text-3xl rounded-full p-3 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-light mb-3">{service.title}</h3>
                <p className="font-body text-light">{service.desc}</p>
                <div>
                  <button className="my-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition hover:bg-secondary">
                    <Link href={service.link}>تعرف على المزيد</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
