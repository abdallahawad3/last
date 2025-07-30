import Slider from "@/components/ImageSlider/Slider";
import img1 from "../../public/awnings/1.webp";
import img2 from "../../public/awnings/2.webp";
import img3 from "../../public/awnings/3.webp";
import img4 from "../../public/awnings/4.webp";
import img5 from "../../public/awnings/5.webp";
import img6 from "../../public/awnings/6.webp";

const images = [
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
    original: img1.src,
    thumbnail: img1.src,
  },
  {
    original: img2.src,
    thumbnail: img2.src,
  },
];
export const metadata = {
  title: "سيف تاورز | افضل خدمات تصميم وتركيب المظلات في السعودية",
  description: `
اكتشف أفضل خدمات تصميم وتركيب المظلات في السعودية مع سيف تاورز. نقدم مظلات سيارات وحدائق ومسابح وجلسات وأسطح وأحواش ومناطق تجارية بجودة عالية وتصاميم عصرية. اتصل بنا الآن للحصول على استشارة مجانية!
  مظلات سيارات، مظلات حدائق، مظلات مسابح، مظلات جلسات، مظلات سطوح، مظلات أحواش، مظلات مناطق تجارية
  `,
  keywords: [
    "مظلات سيارات",
    "مظلات حدائق",
    "مظلات مسابح",
    "مظلات جلسات",
    "مظلات سطوح",
    "مظلات أحواش",
    "مظلات مناطق تجارية",
    "تصميم مظلات",
    "تركيب مظلات",
    "مظلات بجودة عالية",
    "مظلات عصرية",
    "مظلات في جدة",
    "مظلات في مكة",
    "مظلات في السعودية",
    "خدمات مظلات",
    "تصميم وتركيب مظلات",
    "مظلات سيارات في جدة",
    "مظلات حدائق في جدة",
    "مظلات مسابح في جدة",
    "مظلات جلسات في جدة",
    "مظلات سطوح في جدة",
    "مظلات أحواش في جدة",
    "مظلات مناطق تجارية في جدة",
    "مظلات سيارات في مكة",
    "مظلات حدائق في مكة",
    "مظلات مسابح في مكة",
    "مظلات جلسات في مكة",
    "مظلات سطوح في مكة",
    "مظلات أحواش في مكة",
    "مظلات مناطق تجارية في مكة",
    "مظلات سيارات في السعودية",
    "مظلات حدائق في السعودية",
    "مظلات مسابح في السعودية",
    "مظلات جلسات في السعودية",
    "مظلات سطوح في السعودية",
    "مظلات أحواش في السعودية",
    "مظلات مناطق تجارية في السعودية",
    "تصميم مظلات في جدة",
  ],
  openGraph: {
    title: "تركيب وتصميم المظلات في جدة و مكة  | سيف تاورز",
    description:
      "خدمات احترافية في تصميم وتركيب مظلات السيارات والحدائق والمسابح والمناطق التجارية بجودة عالية وضمان طويل الأمد في جدة، مكة، والسعودية.",
    images: [
      {
        url: img1.src,
        width: 800,
        height: 600,
        alt: "مظلات سيارات وحدائق في جدة ومكة",
      },
      {
        url: img2.src,
        width: 800,
        height: 600,
        alt: "مظلات حديثة في جدة ومكة",
      },
      {
        url: img3.src,
        width: 800,
        height: 600,
        alt: "مظلات جلسات في جدة ومكة",
      },
    ],
    type: "website",
    locale: "ar_SA",
    siteName: "Decor",
  },
  twitter: {
    card: "summary_large_image",
    title: "المظلات في السعودية | أفضل خدمات تصميم وتركيب المظلات في جدة ومكة",
    description:
      "خدمات احترافية في تصميم وتركيب مظلات السيارات والحدائق والمسابح والمناطق التجارية بجودة عالية وضمان طويل الأمد في جدة، مكة، والسعودية.",
    images: [img1.src],
  },
  alternates: {
    canonical: "/awnings",
    languages: {
      "ar-SA": "/awnings",
    },
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};
const GalleryPage = () => {
  return (
    <main>
      <div className="text-center bg-primary text-light py-32 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          المظلات
        </h1>
        <p className="text-lg max-w-[70%] mx-auto leading-relaxed text-background">
          تقدم <strong className="text-secondary">سيف تاورز</strong> خدمات
          <strong> تصميم وتركيب المظلات</strong> بمختلف أنواعها. تشمل خدماتنا{" "}
          <strong>
            {" "}
            مظلات السيارات، الحدائق، المواقف، المسابح، الجلسات، الأسطح، الأحواش،
            والمناطق التجارية
          </strong>
          . نحرص دائمًا على الجمع بين{" "}
          <strong>الجودة العالية والتصاميم العصرية</strong> لتلبية جميع
          احتياجاتك.
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

export default GalleryPage;
