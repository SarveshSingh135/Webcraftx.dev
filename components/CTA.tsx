"use client";
import { useState } from "react";

export default function CTA() {
  const phone = "918796458203";
  const [loading, setLoading] = useState(false);

  const message = `Hi Webcraftx 👋
I want to know about:
1. Website Development
2. Pricing
3. Portfolio`;

  const sendEmail = async () => {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Website Visitor",
        email: "visitor@webcraftx.com",
        message: message,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("✅ Message sent successfully!");
    } else {
      alert("❌ Failed to send message");
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">

      <div className="relative rounded-3xl p-12 text-center overflow-hidden 
      bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] 
      border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.3)]">

        {/* Glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="w-100 h-100 bg-blue-500/20 blur-3xl rounded-full absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-87.5 h-87.5 bg-purple-500/20 blur-3xl rounded-full absolute -bottom-20 -right-20 animate-pulse"></div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Let’s Build Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Dream Website
          </span>
        </h2>

        <p className="text-yellow-400 font-medium mt-3">
          ⚡ Only 3 client slots left this month
        </p>

        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-10">
          Start your project today and grow your business online 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          {/* EMAIL (REAL SEND) */}
          <button
            onClick={sendEmail}
            disabled={loading}
            className="px-10 py-4 rounded-full text-white font-medium 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:scale-110 transition duration-300 shadow-lg shadow-blue-500/40"
          >
            {loading ? "Sending..." : "📩 Email Me"}
          </button>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
          >
            <button className="px-10 py-4 rounded-full text-white font-medium 
            bg-gradient-to-r from-green-500 to-emerald-600 
            hover:scale-110 transition duration-300 shadow-lg shadow-green-500/40">
              💬 WhatsApp Now
            </button>
          </a>

        </div>

        <p className="text-sm text-gray-500 mt-8">
          🔥 Fast Response • 💼 Trusted Service • ⚡ Instant Support
        </p>

      </div>
    </section>
  );
}