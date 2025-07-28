import Script from "next/script";
import "./globals.css";
import { Cairo, Tajawal } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/sections/Footer";
import img from "/maintenance/1.webp";
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

export const metadata = {
  metadataBase: new URL("https://last-sepia-eight.vercel.app"),
  title: `سيف تاورز | شركة المقاولات في جدة ومكة | بناء عظم وتشطيبات وترميم وديكورات ومظلات وبرجولات`,
  description:
    "خدمات بناء عظم، تشطيبات، ترميم، ديكورات، مظلات وبرجولات في جدة ومكة. استشارة مجانية وعروض أسعار تنافسية.",
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
    "معلم جبسمبورد",
    "لياسة",
    "دهان",
    "معلم سيراميك",
    "معلم عزل",
    "مصمم داخلي",
    "معلم جبس مغربي",
    "برجولات",
    "شركة ترميم وتشطيب",
    "معلم رخام",
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
    title:
      "سيف تاورز | شركة المقاولات في جدة ومكة | بناء عظم وتشطيبات وترميم وديكورات ومظلات وبرجولات",
    description:
      "سيف تاورز تقدم خدمات المقاولات العامة في جدة ومكة: بناء عظم، تشطيبات، ترميم، ديكورات، مظلات، برجولات، وأكثر. اتصل بنا لاستشارة مجانية.",
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
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />

        {/* iOS PWA Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="سيف تاورز" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "سيف تاورز",
              image: "https://last-sepia-eight.vercel.app/logo.png",
              "@id": "https://last-sepia-eight.vercel.app",
              url: "https://last-sepia-eight.vercel.app",
              telephone: "+966501234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "جبل النور - شارع حسين سرحان",
                addressLocality: "مكة",
                addressRegion: "مكة المكرمة",
                postalCode: "21955",
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
