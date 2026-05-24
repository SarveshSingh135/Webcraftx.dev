import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="px-6 md:px-12 lg:px-20 py-20 space-y-28">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-blue-500">Services</span>
          </h1>

          <p className="text-gray-400 mt-4">
            We help brands grow with premium websites and digital solutions.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Web Design",
            "Web Development",
            "Landing Pages",
            "SEO Website",
            "Funnels",
            "Branding",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a]
              border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>

              <p className="text-gray-400 mt-2">
                Premium quality solutions tailored for your business.
              </p>
            </div>
          ))}

        </section>

        {/* DETAILED SERVICES */}
        <section className="space-y-24">

          {/* Web Design */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-bold">
                Web Design
              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                Modern, clean and conversion-focused UI/UX design
                that attracts users and increases engagement.
              </p>
            </div>

            {/* IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src="/webDesign.jpg"
                alt="Web Design"
                className="relative w-full h-[420px] object-cover rounded-3xl
                group-hover:scale-105 transition duration-700"
              />

            </div>
          </div>

          {/* Development */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl">

              {/* Glow */}
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src="/webdevelopment.avif"
                alt="Web Development"
                className="relative w-full h-105 object-cover rounded-3xl
                group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-bold">
                Web Development
              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                Fast, scalable and SEO-friendly websites built with
                modern technologies for high performance.
              </p>
            </div>

          </div>

        </section>

        {/* PROCESS */}
        <section className="text-center">

          <h2 className="text-3xl font-bold mb-10">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Discussion",
              "Planning",
              "Design",
              "Development",
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 border border-gray-800 rounded-xl bg-[#111]"
              >
                <h4 className="font-semibold">
                  {step}
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  We follow a structured approach for best results.
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <CTA />

      </div>
    </main>
  );
}