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
  title: "المظلات في السعودية | أفضل خدمات تصميم وتركيب المظلات في جدة ومكة",
  description:
    "احصل على أفضل خدمات تصميم وتركيب المظلات للسيارات، الحدائق، المسابح، الجلسات، السطوح، الاحواش، والمناطق التجارية في جدة، مكة، الرياض وجميع أنحاء السعودية. جودة عالية، أسعار منافسة، تصاميم عصرية، وضمان طويل الأمد.",
  keywords: [
    "مظلات",
    "تصميم مظلات",
    "تركيب مظلات",
    "مظلات سيارات",
    "مظلات حدائق",
    "مظلات مسابح",
    "مظلات جلسات",
    "مظلات سطوح",
    "مظلات احواش",
    "مظلات مناطق تجارية",
    "مظلات الرياض",
    "مظلات جدة",
    "مظلات مكة",
    "مظلات السعودية",
    "مظلات حديثة",
    "مظلات مقاومة للحرارة",
    "مظلات مقاومة للمطر",
    "مظلات متحركة",
    "مظلات ثابتة",
    "مظلات قماش",
    "مظلات حديد",
    "مظلات بلاستيك",
    "مظلات PVC",
    "مظلات خشب",
    "مظلات فاخرة",
    "مظلات بأسعار مناسبة",
    "مظلات عالية الجودة",
    "أفضل مظلات",
    "مظلات تركيب سريع",
    "مظلات بضمان",
  ],
  openGraph: {
    title: "المظلات في السعودية | أفضل خدمات تصميم وتركيب المظلات في جدة ومكة",
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
      <div className="text-center bg-primary text-light py-20 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          المظلات
        </h1>
        <p className="text-lg  max-w-[70%] mx-auto ">
          نقدم خدمات تصميم وتركيب المظلات، تشمل خدماتنا مظلات السيارات،
          والحدائق، والمواقف، والمسابح، والجلسات، والسطوح، والاحواش، والمناطق
          التجارية، نحرص على الجمع بين الجودة العالية والتصاميم الرائعة لتلبية
          احتياجاتك.
        </p>
        <div className="flex justify-center mt-4">
          <button className="flex items-center text-green-600 font-heading hover:underline transition-all bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100">
            <a
              href={`tel:+966569088789`}
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
