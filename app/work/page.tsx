import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function WorkPage() {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio with premium UI design.",
      image: "/portfolio.png",
      link: "/work/portfolio",
    },

    {
        title: "Movie Webpage",
        desc: "Modern movie streaming website with premium UI and responsive design.",
        image: "/movie Page.avif",
        link: "/work/movie-web",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="px-6 md:px-12 lg:px-20 py-20 space-y-28">

        {/* 🔥 HERO */}
        <section className="text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-blue-500">Work</span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Explore our latest projects and see how we help brands grow.
          </p>

        </section>

        {/* ⭐ FEATURED PROJECT */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

            <img
              src="/Eccomerce.avif"
              alt="E-commerce Website"
              className="relative w-full h-125 object-cover rounded-3xl border border-gray-800 group-hover:scale-105 transition duration-700"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-blue-400 font-medium mb-3">
              Featured Project
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              E-commerce Website
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              A modern e-commerce platform designed to increase conversions,
              improve user experience and boost online sales with premium UI.
            </p>

            <button className="mt-8 px-7 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition">
              View Case Study
            </button>

          </div>

        </section>

        {/* 💼 PROJECT GRID */}
        <section>

          <h2 className="text-3xl font-bold mb-12 text-center">
            All Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <Link
                key={index}
                href={project.link}
                className="group rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition duration-500 bg-[#0b0b0b]"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    {project.desc}
                  </p>

                  <div className="mt-5 inline-block text-blue-400 font-medium group-hover:translate-x-2 transition duration-300">
                    View Project →
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* ⚡ CTA */}
        <CTA />

      </div>
    </main>
  );
}