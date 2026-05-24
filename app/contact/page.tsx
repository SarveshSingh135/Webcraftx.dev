"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message Sent Successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      alert("❌ Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 py-20 bg-[#0a0f1f] text-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400">webcraftx.dev@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-400">+91 8796458203</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400">India</p>
          </div>

          <div className="bg-linear-to-r from-blue-500 to-purple-600 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
            <p className="text-sm">
              We create premium websites that help your business grow fast 🚀
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] p-8 rounded-2xl space-y-5 border border-white/10"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#1f2937] rounded-lg outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#1f2937] rounded-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-[#1f2937] rounded-lg outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}