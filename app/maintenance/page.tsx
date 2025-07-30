import img1 from "../../public/maintenance/1.webp";
import img2 from "../../public/maintenance/2.webp";
import img3 from "../../public/maintenance/3.webp";
import img4 from "../../public/maintenance/4.webp";
import img5 from "../../public/maintenance/5.webp";
import img6 from "../../public/maintenance/6.webp";
import img7 from "../../public/maintenance/7.webp";
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
  title: "ترميم وصيانه | سيف تاورز افضل مؤسسة ترميم وصيانة في السعودية",
  description:
    "نقدم خدمات ترميم وصيانة احترافية للمنازل والفلل والمنتزهات والحدائق في السعودية. صيانة دورية، سباكة، كهرباء، دهانات، تنفيذ سريع بإشراف فنيين ومهندسين متخصصين. اتصل الآن لمزيد من التفاصيل.",
  keywords: [
    "ترميم",
    "صيانة",
    "منازل",
    "فلل",
    "منتزهات",
    "حدائق",
    "سباكة",
    "مؤسسة الديكور",
    "صيانة دورية",
    "كهرباء",
    "دهانات",
    "إصلاح تسربات",
    "تجديد منازل",
    "خدمات هندسية",
    "صيانة شاملة",
    "ترميم مباني",
    "ترميم فلل",
    "ترميم حدائق",
    "ترميم منتزهات",
    "فنيين محترفين",
    "مهندسين",
    "خدمات صيانة",
    "مقاولات",
    "تشطيب",
    "إعادة تأهيل",
    "إصلاح أعطال",
    "ديكور داخلي",
    "ديكور خارجي",
    "أفضل شركة ترميم",
    "أفضل شركة صيانة",
    "ترميم منازل الرياض",
    "صيانة فلل جدة",
    "ترميم حدائق السعودية",
    "شركة ترميم وصيانة",
    "خدمات ترميم احترافية",
    "ترميم منازل بسرعة",
    "صيانة منازل مضمونة",
    "ترميم فلل حديث",
    "صيانة كهرباء وسباكة",
  ],
  openGraph: {
    title: "ترميم وصيانة | مؤسسة سيف تاورز",
    description:
      "خدمات ترميم وصيانة احترافية للمنازل والفلل والمنتزهات والحدائق في السعودية. صيانة دورية، سباكة، كهرباء، دهانات، تنفيذ سريع بإشراف فنيين ومهندسين متخصصين. اتصل الآن لمزيد من التفاصيل.",
    url: "https://last-sepia-eight.vercel.app/maintenance",
    siteName: "مؤسسة سيف تاورز",
    images: [
      {
        url: "/maintenance/1.webp",
        width: 800,
        height: 600,
        alt: "ترميم وصيانة المنازل والفلل",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
};
const GalleryPage = () => {
  return (
    <main>
      <div className="text-center bg-primary text-light py-32 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-6">
          ترميم وصيانة
        </h1>
        <p className="text-xl max-w-[80%] md:max-w-[60%] mx-auto leading-relaxed text-background">
          تقدم <strong className="text-secondary">مؤسسة سيف</strong> خدمات
          متكاملة في{" "}
          <strong>ترميم وصيانة المنازل والفلل والمنتزهات والحدائق</strong>{" "}
          بمختلف أشكالها وأنواعها. كما نمتلك القدرة على تنفيذ جميع
          <strong> أعمال السباكة</strong> للمباني الجديدة، وصيانة المباني
          القائمة، مع توفير <strong> برامج صيانة دورية</strong> تحت إشراف فريق{" "}
          <strong className="text-secondary">أمهر الفنيين والمهندسين</strong>{" "}
          لضمان أعلى مستويات الجودة.
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
