import img1 from "../../public/Finishes/1.webp";
import img2 from "../../public/Finishes/2.webp";
import img3 from "../../public/Finishes/3.webp";
import img4 from "../../public/Finishes/4.webp";
import img5 from "../../public/Finishes/5.webp";
import img6 from "../../public/Finishes/6.webp";
import img7 from "../../public/Finishes/7.webp";
import Slider from "@/components/ImageSlider/Slider";

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

export const metadata = {
  title: "تشطيبات | خدمات التشطيبات الداخلية والخارجية | سيف تاورز",
  description:
    "نقدم خدمات التشطيبات الداخلية والخارجية بجودة عالية، تشمل الدهانات، الأرضيات، الأسقف، تركيب الأبواب والنوافذ، البلاط، اللياسه، الكهرباء وتنسيق الحدائق والمساحات الخارجية. | سيف تاورز",
  keywords: [
    "تشطيبات",
    "تشطيبات داخلية",
    "تشطيبات خارجية",
    "دهانات",
    "أرضيات",
    "أسقف",
    "تركيب الأبواب",
    "تركيب النوافذ",
    "بلاط",
    "لياسه",
    "كهرباء",
    "تنسيق حدائق",
    "خدمات التشطيب",
    "ديكور",
    "تشطيب شقق",
    "تشطيب فلل",
    "تشطيب منازل",
    "تشطيب مكاتب",
    "تشطيب واجهات",
    "تشطيب حمامات",
    "تشطيب مطابخ",
    "تشطيب غرف نوم",
    "تشطيب صالات",
    "تشطيب جدران",
    "تشطيب أسقف معلقة",
    "تشطيب جبس",
    "تشطيب سيراميك",
    "تشطيب رخام",
    "تشطيب حجر",
    "تشطيب حديث",
    "تشطيب فاخر",
    "تشطيب اقتصادي",
    "تشطيب عازل",
    "تشطيب مقاوم للرطوبة",
    "تشطيب مقاوم للحرارة",
    "تشطيب عازل للصوت",
    "تشطيب خارجي حديث",
    "تشطيب داخلي مودرن",
    "تشطيب كلاسيكي",
    "تشطيب عصري",
    "تشطيب سعودي",
    "تشطيب الرياض",
    "تشطيب جدة",
    "تشطيب الشرقية",
    "تشطيب مكة",
    "تشطيب منازل فخمة",
    "تشطيب منازل صغيرة",
    "تشطيب منازل كبيرة",
    "تشطيب مباني",
    "تشطيب مشاريع",
    "تشطيب شركات",
    "معلم لياسه",
    "معلم ديكور جيبس بورد",
  ],
  openGraph: {
    title: "تشطيبات | خدمات التشطيبات الداخلية والخارجية",
    description:
      "نقدم خدمات التشطيبات الداخلية والخارجية بجودة عالية، تشمل الدهانات، الأرضيات، الأسقف، تركيب الأبواب والنوافذ، البلاط، اللياسه، الكهرباء وتنسيق الحدائق.",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: img1.src,
        width: 1200,
        height: 630,
        alt: "تشطيبات داخلية وخارجية",
      },
    ],
  },
  alternates: {
    canonical: "https://last-sepia-eight.vercel.app/finishes",
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
          تشطيبات
        </h1>
        <p className="text-lg max-w-[70%] mx-auto leading-relaxed text-background">
          تقدم <strong className="text-secondary">سيف تاورز</strong> خدمات
          <strong> التشطيبات الداخلية والخارجية</strong> التي تضفي لمسات جمالية
          وفنية على المباني. تشمل خدماتنا{" "}
          <strong>
            {" "}
            الدهانات، الأرضيات، الأسقف، تركيب الأبواب والنوافذ، البلاط، اللياسة،
            أعمال الكهرباء، وتنسيق الحدائق والمساحات الخارجية
          </strong>
          . نحرص دائمًا على استخدام <strong>أفضل المواد والتقنيات</strong> لضمان
          جودة عالية وإرضاء تام لعملائنا.
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
      {/* شبكة الصور */}
      <Slider images={images} />
    </main>
  );
};

export default GalleryPage;
