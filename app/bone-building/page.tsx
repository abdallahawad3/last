import img1 from "../../public/bouns/1.jpeg";
import img2 from "../../public/bouns/2.jpeg";
import img3 from "../../public/bouns/3.jpeg";
import img4 from "../../public/bouns/4.jpeg";
import img5 from "../../public/bouns/5.jpeg";
import img6 from "../../public/bouns/6.jpeg";
import img7 from "../../public/bouns/7.jpeg";
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
  title: "بناء عظم في جدة ومكة | مؤسسة مقاولات",
  description:
    "خدمات بناء عظم وتشطيبات عالية الجودة في جدة ومكة. تنفيذ جميع أعمال البناء والإنشاء من الحفر حتى التشطيب بواسطة فريق محترف ومعلمين خبرة.",
  keywords: [
    "بناء عظم",
    "مقاول بناء",
    "تشطيبات",
    "جدة",
    "مكة",
    "مقاولات",
    "انشاءات",
    "ملاحق",
    "عمائر",
    "مباني",
    "مقاول عظم",
    "مقاول تشطيب",
    "مقاول فلل",
    "مقاول منازل",
    "مقاول مشاريع",
    "بناء فلل",
    "بناء منازل",
    "بناء مشاريع",
    "مقاولات عامة",
    "مقاول سعودي",
    "مقاول جدة",
    "مقاول مكة",
    "مؤسسة مقاولات",
    "مقاولات جدة",
    "مقاولات مكة",
    "ترميم مباني",
    "ترميم منازل",
    "ترميم فلل",
    "بناء حديث",
    "بناء مستودعات",
    "بناء مصانع",
    "مقاول ترميم",
    "مقاول بناء عظم",
    "مقاول بناء تشطيب",
    "معلمين بناء",
    "معلمين عظم",
    "معلمين تشطيب",
    "معلمين محترفين",
    "معلمين خبرة",
  ],
  openGraph: {
    title: "بناء عظم في جدة ومكة | مؤسسة مقاولات",
    description:
      "ننفذ جميع أعمال بناء العظم والتشطيبات في جدة ومكة بجودة عالية وخبرة طويلة ومعلمين محترفين.",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: img5.src,
        width: 1200,
        height: 630,
        alt: "بناء عظم في جدة ومكة",
      },
    ],
  },
  facebook: {
    title: "بناء عظم في جدة ومكة | مؤسسة مقاولات",
    description:
      "نقدم خدمات بناء العظم والتشطيبات في جدة ومكة بجودة عالية وبأسعار تنافسية. اتصل بنا الآن للحصول على استشارة مجانية.",
    images: [img5.src],
  },
  twitter: {
    title: "بناء عظم في جدة ومكة | مؤسسة مقاولات",
    description:
      "خدمات بناء عظم وتشطيبات عالية الجودة في جدة ومكة. تنفيذ جميع أعمال البناء والإنشاء من الحفر حتى التشطيب بواسطة فريق محترف ومعلمين خبرة.",
    card: "summary_large_image",
    images: [img5.src],
  },
  alternates: {
    canonical: "https://last-sepia-eight.vercel.app/bone-building",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <main>
      <div className="text-center bg-primary text-light py-20 md:pb-40 md:pt-52">
        <h1 className="masked-text text-2xl md:text-5xl font-bold mb-4">
          بناء عظم
        </h1>
        <p className="text-lg md:text-2xl max-w-[70%] mx-auto ">
          تقوم مؤسستنا بتنفيذ أعمال البناء من اشغال العظم والتشطيبات بجوده عاليه
          وبجميع أعمال البناء والانشاء ابتداءً من اعمال الحفر والردم وإنشاء
          القواعد وبناء العظم والمباني مثل العمائر, والمنتزهات, الملاحق وكافة
          أشكال البناء بما يتضمنه من اعمال النجارة المسلحة والتسليح وصب
          الخرسانات كما نقوم بجميع اعمال العظم بالمواد أو بدونها .
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

export default page;
