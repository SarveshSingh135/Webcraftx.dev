import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Services />

      <CTA />

      <Contact />

      <Footer />

    </main>
  );
}