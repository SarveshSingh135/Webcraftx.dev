import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, message } = body;

    console.log("📩 Incoming:", body);

    // ✅ Save to DB
    const contact = await Contact.create(body);

    // ✅ Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 📩 1. ADMIN MAIL (tumhe)
    // =========================
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🚀 New Contact Form Submission",
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // =========================
    // 💌 2. AUTO REPLY (user ko)
    // =========================
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // 👈 USER ko jaayega
      subject: "Thanks for contacting WebCraftX 🚀",
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>Hi ${name} 👋</h2>
          <p>Thank you for contacting <b>WebCraftX</b>.</p>
          <p>We received your message and will get back to you shortly.</p>
          
          <br/>
          <p><b>Your Message:</b></p>
          <p style="background:#f1f1f1; padding:10px; border-radius:5px;">
            ${message}
          </p>

          <br/>
          <p>🚀 We usually reply within 24 hours.</p>

          <hr/>
          <p>Regards,<br/>WebCraftX Team</p>
        </div>
      `,
    });

    console.log("✅ Emails sent (admin + auto reply)");

    return Response.json({ success: true, data: contact });

  } catch (error: any) {
    console.log("❌ ERROR:", error.message);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}