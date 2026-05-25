"use client";

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
      pt-24
      md:pt-32
      pb-20
    "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[300px]
        md:w-[500px]
        h-[300px]
        md:h-[500px]
        bg-blue-600/20
        blur-[120px]
        pointer-events-none
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[300px]
        md:w-[500px]
        h-[300px]
        md:h-[500px]
        bg-pink-600/20
        blur-[120px]
        pointer-events-none
      "
      />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
        >
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <p
              className="
              text-blue-400
              uppercase
              tracking-[4px]
              md:tracking-[6px]
              mb-6
              text-xs
              md:text-sm
            "
            >
              Premium Agency
            </p>

            <h1
              className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              leading-tight
            "
            >
              Build Powerful <br />

              Websites For{" "}

              <span
                className="
                bg-gradient-to-r
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
              text-lg
              md:text-xl
              leading-8
              mt-8
              max-w-2xl
              mx-auto
              lg:mx-0
            "
            >
              We create modern websites that attract clients and
              grow businesses with premium design and performance.
            </p>

            {/* Buttons */}
            <div
              className="
              relative
              z-20
              flex
              flex-col
              sm:flex-row
              items-center
              lg:items-start
              gap-6
              mt-12
            "
            >
              <a
                href="#contact"
                className="
                w-full
                sm:w-auto
                text-center
                px-10
                py-4
                rounded-2xl
                text-md
                font-semibold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                hover:scale-105
                duration-300
                shadow-2xl
              "
              >
                Get Started
              </a>

              <Link href="/work" className="w-full sm:w-auto">
                <button
                  className="
                  w-full
                  px-10
                  py-4
                  rounded-full
                  border
                  border-white/20
                  text-white
                  hover:bg-white
                  hover:text-black
                  transition
                  duration-300
                "
                >
                  View Projects
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="
              flex
              flex-wrap
              justify-center
              lg:justify-start
              gap-10
              mt-16
            "
            >
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

          {/* RIGHT SIDE */}
          <div
            className="
            relative
            flex
            justify-center
            items-center
            mt-10
            lg:mt-0
          "
          >
            {/* Glow */}
            <div
              className="
              absolute
              w-[280px]
              md:w-[420px]
              h-[280px]
              md:h-[420px]
              bg-gradient-to-r
              from-blue-500/30
              to-pink-500/30
              blur-[120px]
              rounded-full
              animate-pulse
              pointer-events-none
            "
            ></div>

            {/* Main Image */}
            <div
              className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              shadow-[0_0_50px_rgba(59,130,246,0.35)]
              backdrop-blur-xl
            "
            >
              <img
                src="/hero1.png"
                alt="Hero"
                className="
                w-full
                max-w-[650px]
                h-auto
                object-cover
                rounded-[30px]
                hover:scale-105
                transition
                duration-700
              "
              />

              {/* Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
                pointer-events-none
              "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}