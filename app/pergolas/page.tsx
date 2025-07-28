import img1 from "../../public/pergolas/1.webp";
import img2 from "../../public/pergolas/2.webp";
import img3 from "../../public/pergolas/3.webp";
import img4 from "../../public/pergolas/4.webp";
import img5 from "../../public/pergolas/5.webp";
import img6 from "../../public/pergolas/6.webp";
import img7 from "../../public/pergolas/7.webp";
import Slider from "@/components/ImageSlider/Slider";
import { Metadata } from "next";

const images = [
  {
    original: img1.src,
    thumbnail: img1.src,
  },
  {
    original: img2.src,
    thumbnail: img2.src,
  },
  {
    original: img3.src,
    thumbnail: img3.src,
  },
  {
    original: img4.src,
    thumbnail: img4.src,
  },
  {
    original: img5.src,
    thumbnail: img5.src,
  },
  {
    original: img6.src,
    thumbnail: img6.src,
  },
  {
    original: img7.src,
    thumbnail: img7.src,
  },
];

export const metadata: Metadata = {
  title: "البرجولات | تصميم وتنفيذ برجولات خارجية",
  description:
    "نقدم خدمات تصميم وتنفيذ البرجولات الخشبية والحديدية وبرجولات اللكسان والقماش والمظلات والجلسات الخارجية للحدائق والسطوح بجودة عالية وخبرة متميزة في جميع أنحاء المملكة.",
  keywords: [
    "برجولات",
    "تصميم برجولات",
    "تنفيذ برجولات",
    "برجولات خشبية",
    "برجولات حديدية",
    "برجولات لكسان",
    "برجولات قماش",
    "مظلات",
    "جلسات خارجية",
    "حدائق",
    "سطوح",
    "جلسات حدائق",
    "مظلات حدائق",
    "مظلات سيارات",
    "ديكورات خارجية",
    "تصميم حدائق",
    "تنفيذ جلسات",
    "جلسات سطح",
    "جلسات خارجية مودرن",
    "برجولات حديثة",
    "برجولات مودرن",
    "برجولات الرياض",
    "برجولات جدة",
    "برجولات الدمام",
    "برجولات السعودية",
  ],
  openGraph: {
    title: "البرجولات | تصميم وتنفيذ برجولات خارجية",
    description:
      "خدمات متكاملة لتصميم وتنفيذ البرجولات والمظلات والجلسات الخارجية للحدائق والسطوح بجودة عالية وخبرة واسعة في جميع أنحاء المملكة.",
    url: "https://your-domain.com/pergolas",
    type: "website",
    images: [
      {
        url: "/maintenance/1.webp",
        width: 1200,
        height: 630,
        alt: "برجولات خارجية",
      },
    ],
    locale: "ar_SA",
    siteName: "ديكور السعودية",
  },
};
const page = () => {
  return (
    <main>
      <div className="text-center bg-primary text-light py-32 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          البرجولات
        </h1>
        <p className="text-lg max-w-[70%] mx-auto leading-relaxed text-background">
          تقدم <strong className="text-secondary">سيف تاورز</strong> خدمات
          <strong> تصميم وتنفيذ البرجولات</strong> لابتكار مساحات خارجية مريحة
          وجذابة. تشمل خدماتنا{" "}
          <strong>
            {" "}
            البرجولات الخشبية، الحديدية، برجولات اللكسان والقماش، المظلات،
            والجلسات
          </strong>{" "}
          لمختلف{" "}
          <strong>أماكن الجلسات الخارجية، الحدائق، الأحواش، والأسطح</strong>.
          نحرص على الدمج بين <strong>الجودة العالية والتصميم العصري</strong>{" "}
          لتلبية جميع تطلعات العملاء.
        </p>
        <div className="flex justify-center mt-4">
          <button
            aria-label="اتصل الآن"
            className="flex items-center text-green-600 font-heading hover:underline transition-all bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100"
          >
            <a
              aria-label="اتصل بنا الآن"
              href={`tel:+966531955694`}
              target="_blank"
              rel="noopener noreferrer"
            >
              اتصل الآن
              <span> 📞</span>
            </a>
          </button>
        </div>
      </div>
      <Slider images={images} />
    </main>
  );
};

export default page;
