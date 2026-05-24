"use client";

import { FaCode, FaPaintBrush, FaTools } from "react-icons/fa";

export default function ServicePreview() {
  const services = [
    {
      title: "Website Design",
      desc: "Modern, clean and user-friendly UI/UX design.",
      icon: <FaPaintBrush size={28} />,
    },
    {
      title: "Website Development",
      desc: "Fast, responsive and high-performance websites.",
      icon: <FaCode size={28} />,
    },
    {
      title: "Maintenance & Support",
      desc: "Regular updates, fixes and performance optimization.",
      icon: <FaTools size={28} />,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
        Our Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-3xl 
            bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] 
            border border-white/10 backdrop-blur-xl 
            hover:scale-105 transition duration-300 
            shadow-lg hover:shadow-blue-500/30"
          >

            {/* Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="w-full h-full opacity-0 group-hover:opacity-100 transition">
                <div className="w-40 h-40 bg-blue-500/20 blur-3xl rounded-full absolute top-0 left-0"></div>
              </div>
            </div>

            {/* Icon */}
            <div className="text-green-500/20">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white-500/20">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-bg-pink-500/20">
              {service.desc}
            </p>

            {/* CTA */}
            <button className="text-blue-400 text-sm font-medium group-hover:underline">
              Learn More →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}
