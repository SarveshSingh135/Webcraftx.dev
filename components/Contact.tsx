"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });

      } else {
        alert("❌ Failed to send message");
      }

    } catch (error) {
      console.log(error);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-gradient-to-br
          from-[#091121]
          to-[#11183c]
          border border-white/10
          rounded-[40px]
          p-10 md:p-16
          shadow-2xl
        "
        >

          <div className="text-center mb-14">

            <p className="text-blue-400 uppercase tracking-[5px] text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Let’s Build Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Dream Website
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
              Start your project today and grow your business online 🚀
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-8"
          >

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
              w-full
              bg-[#0d1324]
              border border-white/10
              rounded-2xl
              px-6 py-5
              text-white
              outline-none
              focus:border-blue-500
            "
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
              w-full
              bg-[#0d1324]
              border border-white/10
              rounded-2xl
              px-6 py-5
              text-white
              outline-none
              focus:border-blue-500
            "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="
              w-full
              bg-[#0d1324]
              border border-white/10
              rounded-2xl
              px-6 py-5
              text-white
              outline-none
              resize-none
              focus:border-pink-500
            "
            />

            <button
              type="submit"
              disabled={loading}
              className="
              w-full md:w-fit
              px-10 py-5
              rounded-2xl
              text-lg font-semibold
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              hover:scale-105
              duration-300
              shadow-xl
            "
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}