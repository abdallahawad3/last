"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlideIn } from "@/components/animation/SlideIn";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useGSAP(() => {
    gsap.from(".about-text", {
      x: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
    });

    gsap.from(".about-image", {
      x: -80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="about-section py-40 bg-primary text-light flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <SlideIn from="right">
          <div className="about-text">
            <h2 className="text-4xl  font-bold text-light mb-6">من نحن</h2>
            <p className="text-lg font-body leading-relaxed mb-6">
              نحن شركة رائدة في مجال المقاولات والبناء في جدة ومكة، نقدم خدمات
              متكاملة تشمل البناء من مرحلة العظم وحتى التشطيبات والديكورات،
              بخبرة تتجاوز 15 عامًا في تقديم الجودة والالتزام بالمواعيد.
            </p>

            {/* النقاط المميزة */}
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✔</span> خبرة طويلة في
                مشاريع كبرى.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✔</span> التزام بأعلى
                معايير الجودة.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✔</span> فريق متخصص في
                التشطيبات والديكورات.
              </li>
            </ul>
          </div>
        </SlideIn>
        {/* الصورة */}
        <SlideIn from="left">
          <div className="about-image">
            <Image
              src="/about/construction-team.webp"
              alt="شركة المقاولات في جدة ومكة"
              width={700}
              height={500}
              className="rounded-md shadow-lg clip-shape object-cover"
            />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
