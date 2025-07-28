import img1 from "../../public/exterior/1.webp";
import img6 from "../../public/exterior/6.webp";
import img7 from "../../public/exterior/7.webp";
import img8 from "../../public/exterior/8.webp";
import img9 from "../../public/exterior/9.webp";
import img10 from "../../public/exterior/10.webp";
import img11 from "../../public/exterior/11.webp";
import img12 from "../../public/exterior/12.webp";
import img13 from "../../public/exterior/13.webp";
import img14 from "../../public/exterior/14.webp";
import img15 from "../../public/exterior/15.webp";
import img16 from "../../public/exterior/16.webp";
import img17 from "../../public/exterior/17.webp";
import img18 from "../../public/exterior/18.webp";
import img19 from "../../public/exterior/19.webp";
import img20 from "../../public/exterior/20.png";
import Slider from "@/components/ImageSlider/Slider";

const images = [
  {
    original: img1.src,
    thumbnail: img1.src,
  },
  {
    original: img6.src,
    thumbnail: img6.src,
  },
  {
    original: img7.src,
    thumbnail: img7.src,
  },
  {
    original: img8.src,
    thumbnail: img8.src,
  },
  {
    original: img9.src,
    thumbnail: img9.src,
  },
  {
    original: img10.src,
    thumbnail: img10.src,
  },
  {
    original: img11.src,
    thumbnail: img11.src,
  },
  {
    original: img12.src,
    thumbnail: img12.src,
  },
  {
    original: img13.src,
    thumbnail: img13.src,
  },
  {
    original: img14.src,
    thumbnail: img14.src,
  },
  {
    original: img15.src,
    thumbnail: img15.src,
  },
  {
    original: img16.src,
    thumbnail: img16.src,
  },
  {
    original: img17.src,
    thumbnail: img17.src,
  },
  {
    original: img18.src,
    thumbnail: img18.src,
  },
  {
    original: img19.src,
    thumbnail: img19.src,
  },
  {
    original: img20.src,
    thumbnail: img20.src,
  },
];

export const metadata = {
  title: "تصميم خارجي في مكة وجدة | سيف تاورز - أفضل شركة تصميم واجهات خارجية",
  description:
    "خدمات التصميم الخارجي والواجهات في مكة وجدة من سيف تاورز. تصميم واجهات عصرية، تنسيق حدائق، حلول إضاءة خارجية، واختيار أفضل المواد. خبرة في تحويل المساحات الخارجية إلى أماكن مبهرة تلبي جميع رغبات العملاء.",
  keywords: [
    "تصميم خارجي",
    "تصميم واجهات",
    "تصميم حدائق",
    "تصميم خارجي مكة",
    "تصميم خارجي جدة",
    "شركة تصميم خارجي",
    "واجهات منازل",
    "تنسيق حدائق",
    "تصميم إضاءة خارجية",
    "سيف تاورز",
    "تصميم فلل",
    "تصميم منازل",
    "تصميم خارجي حديث",
    "تصميم واجهات فلل",
    "تصميم خارجي السعودية",
    "تصميم حدائق منزلية",
    "تصميم شاليهات",
    "تصميم استراحات",
    "تصميم أسوار",
    "تصميم بوابات",
    "تصميم مسابح",
    "تصميم حدائق عامة",
    "تصميم حدائق فلل",
    "تصميم حدائق خارجية",
    "تصميم مناظر طبيعية",
    "تصميم إضاءة حدائق",
    "تصميم جلسات خارجية",
    "تصميم ديكورات خارجية",
    "تصميم مداخل",
    "تصميم بلكونات",
    "تصميم تراسات",
    "تصميم حدائق أسطح",
    "تصميم حدائق صغيرة",
    "تصميم حدائق كبيرة",
    "تصميم حدائق حديثة",
    "تصميم حدائق كلاسيكية",
    "تصميم حدائق فاخرة",
    "تصميم حدائق مستدامة",
    "تصميم حدائق ذكية",
    "تصميم حدائق عائلية",
    "تصميم حدائق أطفال",
    "تصميم حدائق عامة حديثة",
    "تصميم حدائق عامة كلاسيكية",
    "تصميم حدائق عامة فاخرة",
    "تصميم حدائق عامة مستدامة",
    "تصميم حدائق عامة ذكية",
    "تصميم حدائق عامة عائلية",
    "تصميم حدائق عامة أطفال",
  ],
  openGraph: {
    title: "تصميم خارجي في مكة وجدة | سيف تاورز",
    description:
      "أفضل خدمات التصميم الخارجي والواجهات في مكة وجدة. خبرة في تصميم واجهات عصرية وتنسيق الحدائق.",
    url: "https://your-domain.com/exterior-design",
    type: "website",
    locale: "ar_SA",
    siteName: "سيف تاورز",
    images: [
      {
        url: img1.src,
        width: 1200,
        height: 630,
        alt: "تصميم خارجي في مكة وجدة",
      },
    ],
  },
};

const page = () => {
  return (
    <main>
      <div className="text-center bg-primary text-light py-32 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          تصميم خارجي
        </h1>
        <p className="text-lg max-w-[70%] mx-auto leading-relaxed text-background">
          تقدم <strong className="text-secondary">سيف تاورز</strong> خدمات
          <strong> التصميم الخارجي</strong> لتحويل المساحات الخارجية إلى أماكن
          مبهرة وفريدة من نوعها. تشمل خدماتنا{" "}
          <strong>
            {" "}
            تصميم الواجهات، تنسيق الحدائق، اختيار المواد الخارجية والإضاءة،
            وتقديم حلول مبتكرة
          </strong>{" "}
          تلبي رغبات العملاء. نعمل على تحقيق{" "}
          <strong>التوازن بين الجمال والوظيفة</strong> باستخدام أفضل المواد
          وأحدث التقنيات.
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
