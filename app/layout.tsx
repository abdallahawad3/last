import Script from "next/script";
import "./globals.css";
import { Cairo, Tajawal } from "next/font/google";

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
  title: "شركة المقاولات والبناء في جدة ومكة | بناء عظم وتشطيبات",
  description:
    "نقدم جميع خدمات المقاولات العامة، بناء العظم، التشطيبات، الترميم والديكورات في جدة ومكة بخبرة أكثر من 15 سنة.",
  keywords: [
    "مقاولات جدة",
    "مقاولات مكة",
    "بناء عظم جدة",
    "تشطيبات مكة",
    "ترميم وصيانة",
    "ديكورات",
    "مظلات برجولات السعودية",
  ],
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "شركة المقاولات في جدة ومكة",
    description: "خدمات بناء وتشطيب متكاملة في جدة ومكة بخبرة طويلة.",
    url: "https://example.com",
    siteName: "شركة المقاولات",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_SA",
    type: "website",
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
              name: "شركة المقاولات والبناء",
              image: "https://example.com/logo.png",
              "@id": "https://example.com",
              url: "https://example.com",
              telephone: "+966501234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "حي النسيم",
                addressLocality: "جدة",
                addressRegion: "مكة المكرمة",
                postalCode: "21577",
                addressCountry: "SA",
              },
              areaServed: [
                { "@type": "City", name: "جدة" },
                { "@type": "City", name: "مكة" },
              ],
              openingHours: "Su,Mo,Tu,We,Th,Sa 08:00-18:00",
            }),
          }}
        />
      </head>
      <body className={`overflow-x-hidden`}>{children}</body>
    </html>
  );
}
