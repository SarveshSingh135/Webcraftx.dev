"use client";

import { Stats } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      w-full
      min-h-screen
      overflow-hidden
      bg-[#050816]
      pt-32
      pb-20
    "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
        >

          {/* LEFT */}
          <div>

            <p
              className="
              text-blue-400
              uppercase
              tracking-[6px]
              mb-6
              text-sm
            "
            >
              Premium Agency
            </p>

            <h1
              className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-tight
            "
            >
              Build Powerful <br />

              Websites For{" "}

              <span
                className="
                bg-linear-to-r
                from-blue-500
                via-purple-500
                to-pink-500
                bg-clip-text
                text-transparent
              "
              >
                Brands
              </span>
            </h1>

            <p
              className="
              text-gray-400
              text-xl
              leading-9
              mt-8
              max-w-2xl
            "
            >
              We create modern websites that attract clients and
              grow businesses with premium design and performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-12">

              <a
                href="#contact"
                className="
                px-10
                py-5
                rounded-2xl
                text-md
                font-semibold
                bg-linear-to-r
                from-blue-600
                to-purple-600
                hover:scale-105
                duration-300
                shadow-2xl
              "
              >
                Get Started
              </a>

             <Link href="/work">
                 <button
                   className="
                   px-10 py-4
                   rounded-full
                   border border-white/20
                   text-white
                   hover:bg-white hover:text-black
                   transition duration-300
                   "
                  >
                    View Projects
                 </button>
             </Link>

            </div>
            <div className="flex flex-wrap gap-12 mt-16">

              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  10+
                </h2>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-pink-500">
                  5+
                </h2>

                <p className="text-gray-400 mt-2">
                  Clients
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-500">
                  100%
                </h2>

                <p className="text-gray-400 mt-2">
                  Satisfaction
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

  {/* Glow Background */}
  <div className="
    absolute
    w-[420px]
    h-[420px]
    bg-gradient-to-r
    from-blue-500/30
    to-pink-500/30
    blur-[120px]
    rounded-full
    animate-pulse
  "></div>

  {/* Main Image */}
  <div className="
    relative
    overflow-hidden
    rounded-[35px]
    border border-white/10
    shadow-[0_0_50px_rgba(59,130,246,0.35)]
    backdrop-blur-xl
  ">

    <img
      src="/hero1.png"
      alt="Hero"
      className="
        w-full
        max-w-162.5
        h-112.5
        object-cover
        rounded-[50px]
        hover:scale-105
        transition
        duration-700
      "
    />

    {/* Overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-t
       from-black/60
       via-transparent
       to-transparent"
       >
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}