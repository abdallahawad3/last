import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      subject = "رسالة جديدة من موقع الديكور",
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // Load HTML template
    const htmlTemplatePath = path.resolve("public/assets/default.html");
    const htmlTemplate = fs.readFileSync(htmlTemplatePath, "utf-8");

    // Format phone number for WhatsApp (Saudi Arabia format)
    // Format phone number for WhatsApp (Egypt format: country code 20)
    const whatsappNumber = phone.startsWith("0")
      ? phone.replace(/^0/, "20")
      : phone.startsWith("20")
      ? phone
      : `20${phone}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `مرحباً ${name}، شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.`
    )}`;

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🏗️ رسالة جديدة من العميل</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2c3e50; margin-top: 0;">📋 تفاصيل العميل</h2>
            <p style="margin: 10px 0;"><strong>👤 الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>📧 البريد الإلكتروني:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>📱 رقم الهاتف:</strong> ${phone}</p>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #27ae60; margin-top: 0;">💬 الرسالة</h3>
            <p style="line-height: 1.6; color: #2c3e50;">${message}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${whatsappLink}" 
               style="background: #25d366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; transition: all 0.3s;">
              💬 الرد عبر واتساب
            </a>
          </div>
          
          <div style="border-top: 2px solid #ecf0f1; padding-top: 20px; margin-top: 30px; text-align: center; color: #7f8c8d;">
            <p>تم إرسال هذه الرسالة من موقع شركة الديكور والمقاولات</p>
            <p style="font-size: 12px;">تاريخ الإرسال: ${new Date().toLocaleString(
              "ar-SA"
            )}</p>
          </div>
        </div>
      </div>
    `;

    // Replace placeholders in HTML template
    const emailBody = htmlTemplate
      .replace("{{title}}", subject)
      .replace("{{content}}", emailContent);

    // Email configuration
    const emailMessage = {
      from: `شركة الديكور <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM, // Send to your business email
      subject: `${subject} - من ${name}`,
      html: emailBody,
      text: `
رسالة جديدة من: ${name}
البريد الإلكتروني: ${email}
رقم الهاتف: ${phone}
الرسالة: ${message}

للرد عبر واتساب: ${whatsappLink}
      `,
    };

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send email
    await transporter.sendMail(emailMessage);

    return NextResponse.json(
      {
        message: "تم إرسال الرسالة بنجاح",
        whatsappLink: whatsappLink,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Email sending failed:", err);
    return NextResponse.json(
      { error: "فشل في إرسال الرسالة. حاول مرة أخرى." },
      { status: 500 }
    );
  }
}
