"use client";
import { SlideIn } from "@/components/animation/SlideIn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useGSAP(() => {
    gsap.from(".contact-form", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
    });

    gsap.from(".contact-map", {
      opacity: 0,
      y: -60,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
    });
  }, []);

  const formatPhoneForWhatsApp = (phoneNumber: string) => {
    // Remove any non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // If starts with 0, replace with 966 (Saudi Arabia)
    if (cleaned.startsWith("0")) {
      return cleaned.replace(/^0/, "966");
    }

    // If doesn't start with 966, add it
    if (!cleaned.startsWith("966")) {
      return `966${cleaned}`;
    }

    return cleaned;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !phone || !message || !email) {
      setError("يرجى ملء جميع الحقول");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          subject: "طلب خدمة جديد من موقع الديكور",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        // Auto-redirect to WhatsApp after 2 seconds
        setTimeout(() => {
          if (data.whatsappLink) {
            window.open(data.whatsappLink, "_blank");
          }
        }, 2000);
      } else {
        setError(data.error || "حدث خطأ أثناء إرسال الرسالة");
      }
    } catch (err) {
      setError("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
      console.error("Email sending failed:", err);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="contact-section py-20 bg-background text-primary"
    >
      <div className="container mx-auto px-6 text-center !mb-12">
        <SlideIn from="bottom">
          <h2 className="text-4xl font-bold font-heading text-secondary mb-4">
            تواصل معنا
          </h2>
        </SlideIn>
        <SlideIn delay={0.1} from="bottom">
          <p
            className="text-lg font-body max-w-2xl mx-auto"
            style={{ fontWeight: 500 }}
          >
            سواء كنت تبحث عن مقاول لمشروع جديد أو تحتاج إلى خدمات ترميم وصيانة،
            تواصل معنا الآن في جدة ومكة.
          </p>
        </SlideIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 !gap-12 max-w-6xl mx-auto px-6">
        {/* نموذج التواصل */}
        <SlideIn from="right">
          <div className="contact-form bg-white p-8 rounded-2xl shadow-lg">
            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">✅ تم إرسال رسالتك بنجاح!</p>
                <p className="text-sm mt-1">
                  سنقوم بالرد عليك قريباً عبر البريد الإلكتروني أو واتساب.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p>❌ {error}</p>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="الاسم الكامل *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="البريد الإلكتروني *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                dir="rtl"
                placeholder="رقم الهاتف (مثال: 0569088789) *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="اكتب رسالتك هنا... (نوع الخدمة المطلوبة، تفاصيل المشروع، إلخ) *"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              ></textarea>

              <button
                aria-label="إرسال الرسالة"
                type="submit"
                disabled={loading}
                className={`w-full font-heading py-3 rounded-lg transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-secondary hover:bg-accent"
                } text-white`}
              >
                {loading ? "⏳ جاري الإرسال..." : "📧 إرسال الرسالة"}
              </button>
            </form>

            {/* أزرار مباشرة */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
              <a
                aria-label="اتصل بنا الآن"
                href="tel:+966531955694"
                className="flex items-center text-accent font-heading hover:underline transition-all"
              >
                📞 اتصل الآن
              </a>
              <button
                aria-label="فتح واتساب"
                className="flex items-center text-green-600 font-heading hover:underline transition-all bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100"
              >
                <a
                  aria-label="فتح واتساب مباشر"
                  href={`https://wa.me/+966531955694`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 واتساب مباشر
                </a>
              </button>
            </div>
          </div>
        </SlideIn>

        {/* خريطة Google */}
        <div className="contact-map rounded-2xl shadow-lg">
          <Link
            aria-label="موقع الشركة في جدة"
            href="https://maps.app.goo.gl/PrftFhzg5LHMUY2v7?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block group"
          >
            <Image
              src="/maps-preview.png"
              alt="موقع الشركة في جدة"
              width={600}
              height={500}
              className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
