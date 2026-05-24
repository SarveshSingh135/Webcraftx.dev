"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 px-6 py-4 flex justify-between z-50">
      
      <h1 className="text-blue-500 text-xl font-bold">
        Webcraftx.dev
      </h1>

      <div className="flex gap-6 text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}