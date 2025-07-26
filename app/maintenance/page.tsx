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
  title: "ترميم وصيانة | مؤسسة الديكور",
  description:
    "خدمات ترميم وصيانة احترافية للمنازل والفلل والمنتزهات والحدائق في السعودية. صيانة دورية، سباكة، كهرباء، دهانات، تنفيذ سريع بإشراف فنيين ومهندسين متخصصين. اتصل الآن لمزيد من التفاصيل.",
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
    title: "ترميم وصيانة | مؤسسة الديكور",
    description:
      "خدمات ترميم وصيانة احترافية للمنازل والفلل والمنتزهات والحدائق في السعودية. صيانة دورية، سباكة، كهرباء، دهانات، تنفيذ سريع بإشراف فنيين ومهندسين متخصصين. اتصل الآن لمزيد من التفاصيل.",
    url: "https://last-sepia-eight.vercel.app/maintenance",
    siteName: "مؤسسة الديكور",
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
      <div className="text-center bg-primary text-light py-20 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          ترميم وصيانة
        </h1>
        <p className="text-lg  max-w-[70%] mx-auto ">
          تقوم مؤسستنا بإعمال ترميم والصيانة للمنازل والفلل والمنتزهات والحدائق
          بكافة أشكالها وانواعها المختلفة كما لدينا القدرة علي تنفيذ جميع إعمال
          السباكة للمباني الجديدة وعمل الصيانة للمباني القديمة وعمل برامج صيانة
          دورية بإشراف فريق عمل متكامل من امهر الفنيين والمهندسين.
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
