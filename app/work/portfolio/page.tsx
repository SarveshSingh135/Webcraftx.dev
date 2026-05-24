import Navbar from "@/components/Navbar";
import { main } from "framer-motion/client";

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Heading */}
      <div className="max-w-4xl">

        <p className="text-blue-400 font-medium mb-3">
          Featured Project
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Portfolio Website
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          "Modern personal portfolio with premium UI design"
        </p>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">

        <a
          href="https://intro-portofolio-9u3y.vercel.app/"
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

      <div className="rounded-3xl overflow-hidden border border-white/10 mt-8">

        <iframe
          src="https://intro-portofolio-9u3y.vercel.app/"
          className="w-full h-screen"
        />

      </div>
    </main>
  );
}