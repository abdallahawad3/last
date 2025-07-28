import Script from "next/script";
import "./globals.css";
import { Cairo, Tajawal } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/sections/Footer";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["600", "700"], // Headings
  variable: "--font-heading",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500"], // Body text
  variable: "--font-body",
  display: "swap",
});
const img = {
  src: "https://last-sepia-eight.vercel.app/logo.png",
};

export const metadata = {
  metadataBase: new URL("https://last-sepia-eight.vercel.app"),
  title: "شركة المقاولات والبناء في جدة ومكة | بناء عظم وتشطيبات",
  description:
    "نقدم جميع خدمات المقاولات العامة، بناء العظم، التشطيبات، الترميم والديكورات في جدة ومكة بخبرة أكثر من 15 سنة. اتصل الآن للحصول على أفضل خدمات المقاولات، تشطيب الفلل، ترميم المنازل، أعمال الديكور، مظلات، برجولات، صيانة، كهرباء وسباكة في جدة ومكة.",
  keywords: [
    "مقاولات جدة",
    "مقاولات مكة",
    "بناء عظم جدة",
    "تشطيبات مكة",
    "ترميم وصيانة",
    "ديكورات",
    "مظلات برجولات السعودية",
    "مقاول تشطيبات",
    "مقاول ترميم",
    "مقاول بناء",
    "مقاولات عامة",
    "ديكورات داخلية",
    "ديكورات خارجية",
    "مقاولات فلل",
    "مقاولات منازل",
    "مقاولات تجارية",
    "مقاولات سكنية",
    "مقاولات مشاريع",
    "مقاولات جدة مكة",
    "مقاولات السعودية",
    "مقاول معتمد",
    "مقاول خبرة",
    "مقاول بناء عظم",
    "مقاول تشطيب فاخر",
    "مقاول ترميم منازل",
    "مقاول ديكورات",
    "مقاول مظلات",
    "مقاول برجولات",
    "مقاول حدائق",
    "مقاول أعمال كهرباء",
    "مقاول أعمال سباكة",
    "مقاول أعمال جبس",
    "مقاول أعمال دهانات",
    "مقاول أعمال سيراميك",
    "مقاول أعمال رخام",
    "مقاول أعمال حجر",
    "مقاول أعمال ألمنيوم",
    "مقاول أعمال زجاج",
    "مقاول أعمال نجارة",
    "مقاول أعمال حديد",
    "مقاول أعمال عزل",
    "مقاول أعمال عوازل",
    "مقاول أعمال أسقف",
    "مقاول أعمال أرضيات",
    "مقاول أعمال واجهات",
    "مقاول أعمال مسابح",
    "مقاول أعمال حدائق",
    "مقاول أعمال صيانة",
    "مقاول أعمال ترميم",
    "مقاول أعمال تشطيب",
    "أفضل شركة مقاولات جدة",
    "أفضل شركة مقاولات مكة",
    "شركة بناء جدة",
    "شركة بناء مكة",
    "شركة تشطيبات جدة",
    "شركة تشطيبات مكة",
    "شركة ترميم جدة",
    "شركة ترميم مكة",
    "شركة ديكورات جدة",
    "شركة ديكورات مكة",
    "مقاول فلل جدة",
    "مقاول فلل مكة",
    "مقاول منازل جدة",
    "مقاول منازل مكة",
    "مقاول مشاريع جدة",
    "مقاول مشاريع مكة",
  ],
  alternates: {
    canonical: "https://last-sepia-eight.vercel.app",
  },
  openGraph: {
    title: "شركة المقاولات في جدة ومكة | بناء عظم وتشطيبات",
    description:
      "خدمات بناء وتشطيب وترميم وديكورات في جدة ومكة بخبرة طويلة. اتصل بنا الآن للحصول على أفضل الأسعار والجودة.",
    url: "https://last-sepia-eight.vercel.app",
    siteName: "سيف تاورز",
    images: [
      {
        url: img.src,
        width: 1200,
        height: 630,
        alt: "شركة المقاولات والبناء في جدة ومكة",
      },
      {
        url: img.src,
        width: 800,
        height: 600,
        alt: "خدمات التشطيب والترميم",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abdullah1173707", // يمكن حذفه أو تحديثه
    title: "شركة المقاولات والبناء في جدة ومكة",
    description: "خدمات بناء وتشطيب وترميم وديكورات في جدة ومكة. اتصل الآن!",
    images: [img.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} overflow-x-hidden`}
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "سيف تاورز",
              image: "https://last-sepia-eight.vercel.app/logo.png", // تأكد من صحة الرابط
              "@id": "https://last-sepia-eight.vercel.app",
              url: "https://last-sepia-eight.vercel.app",
              telephone: "+966501234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "جبل النور - شارع حسين سرحان",
                addressLocality: "مكة",
                addressRegion: "مكة المكرمة",
                postalCode: "21955", // رمز بريدي تقريبي لجبل النور - يمكن تعديله إن وُجد أدق
                addressCountry: "SA",
              },
              areaServed: [
                { "@type": "City", name: "مكة" },
                { "@type": "City", name: "جدة" },
              ],
              openingHours: "Su,Mo,Tu,We,Th,Sa 08:00-18:00",
            }),
          }}
        />
      </head>

      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
