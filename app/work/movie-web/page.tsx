import Navbar from "@/components/Navbar";

export default function MovieSiteProject() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      <Navbar />

      <section className="px-6 md:px-12 lg:px-20 py-20">

        {/* Heading */}
        <div className="max-w-4xl">

          <p className="text-blue-400 font-medium mb-3">
            Featured Project
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Movie Webpage
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            A modern movie streaming website with premium UI,
            responsive design and smooth user experience.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="https://imdb-page-actor-page-m58t.vercel.app/"
            target="_blank"
            className="px-7 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
          >
            Open Live Website
          </a>

          <a
            href="/work"
            className="px-7 py-3 border border-white/20 rounded-xl hover:border-blue-500 transition"
          >
            Back To Projects
          </a>

        </div>

        {/* Website Preview */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-white/10 bg-[#0b0b0b]">

          <iframe
            src="https://imdb-page-actor-page-m58t.vercel.app/"
            className="w-full h-screen"
          />

        </div>

      </section>

    </main>
  );
}