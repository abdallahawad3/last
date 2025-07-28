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
    <section className="about-section py-40 flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <SlideIn from="right">
          <div className="about-text">
            <h2 className="text-2xl md:text-5xl font-bold leading-relaxed font-heading text-primary mb-6">
              من نحن
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8">
              نحن في <strong className="text-primary">سيف تاورز</strong> شركة
              رائدة في مجال المقاولات والبناء في جدة ومكة، نقدم لك حلولاً
              متكاملة تبدأ من بناء العظم وصولاً إلى أرقى التشطيبات والديكورات.
              بخبرة تفوق <strong className="text-primary">15 عامًا</strong>،
              نجعل من كل مشروع تحفة معمارية تجمع بين الجودة، الدقة، والالتزام
              بالمواعيد.
            </p>
            {/* النقاط المميزة */}
            <ul className="text-lg md:text-xl text-secondary space-y-3 md:mx-4">
              <li className="flex items-center gap-2">
                <span className="text-accent text-2xl">✔</span> خبرة طويلة في
                تنفيذ مشاريع كبرى.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent text-2xl">✔</span> التزام صارم
                بأعلى معايير الجودة.
              </li>
              <li className="flex items-center gap-2">
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
