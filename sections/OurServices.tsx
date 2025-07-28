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
      title: "بناء الهيكل الإنشائي (عظم)",
      desc: "نضمن لك أساسًا صلبًا ومتينًا لمشروعك، بتصاميم هندسية دقيقة وجودة تنفيذ لا تُضاهى، لراحة بال تدوم طويلاً.",
      img: "/services/construction.webp",
      icon: "🧱",
      link: "/bone-building",
    },
    {
      title: "ترميم وصيانة شاملة للمباني",
      desc: "نعيد الحياة لمبناك! نقدم حلولاً متكاملة للتجديد والإصلاح، باستخدام أحدث التقنيات لضمان استعادة رونق وأمان ممتلكاتك.",
      img: "/services/repair.webp",
      icon: "🛠️",
      link: "/maintenance",
    },
    {
      title: "تشطيبات داخلية احترافية",
      desc: "حول مساحتك إلى تحفة فنية! نُشرف على كل تفاصيل التشطيبات الداخلية بدقة متناهية، لنقدم لك جودة استثنائية تعكس ذوقك الرفيع.",
      img: "/services/finishing.webp",
      icon: "🏠",
      link: "/finishes",
    },
    {
      title: "تصميم وتنفيذ ديكورات عصرية",
      desc: "اجعل مساحتك تتحدث عنك. نصمم وننفذ ديكورات داخلية مبتكرة، لتحويل أحلامك إلى واقع ملموس يعبر عن شخصيتك وأسلوب حياتك.",
      img: "/services/decor.webp",
      icon: "🎨",
      link: "/decors",
    },
    {
      title: "تصميم داخلي فريد",
      desc: "نصمم لك مساحات عملية وجميلة. استشاراتنا في التصميم الداخلي تجمع بين الإبداع والوظائف العملية، لخلق بيئات تلهمك وتلبي احتياجاتك.",
      img: "/interior/20.webp",
      icon: "🖌️",
      link: "/interior-design",
    },
    {
      title: "تصميم خارجي ساحر",
      desc: "امنح واجهة منزلك أو مشروعك جاذبية لا تُنسى. نصمم مساحات خارجية آسرة، من الحدائق الخضراء إلى الواجهات المعمارية المذهلة.",
      img: "/exterior/1.webp",
      icon: "🌳",
      link: "/exterior-design",
    },
    {
      title: "مظلات عصرية ومتينة",
      desc: "أضف لمسة من الظل والأناقة لمساحتك الخارجية. نوفر ونركب مظلات عالية الجودة للحدائق والسيارات، بتصاميم متنوعة تناسب احتياجاتك.",
      img: "/services/shade.webp",
      icon: "⛱️",
      link: "/awnings",
    },
    {
      title: "برجولات خشبية وحديدية",
      desc: "أنشئ مساحة خارجية للاسترخاء والجمال. نصمم وننفذ برجولات خشبية أو حديدية أنيقة، لتوفير مناطق ظل وجلسات خارجية مميزة.",
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
                <h3 className="text-2xl text-background mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-background">
                  {service.desc.slice(0, 100)}...
                </p>
                <div>
                  <button
                    aria-label="تعرف على المزيد عن الخدمة"
                    className="my-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition hover:bg-secondary"
                  >
                    <Link
                      aria-label={`تعرف على المزيد عن ${service.title}`}
                      href={service.link}
                    >
                      تعرف على المزيد
                    </Link>
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
