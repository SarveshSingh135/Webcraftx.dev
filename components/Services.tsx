export default function Services() {
  const services = [
    {
      title: "Website Design",
      desc: "Modern UI/UX designs for premium brands.",
      icon: "🎨",
      image: "webDesign.jpg",

    },
    {
      title: "Web Development",
      desc: "Fast and responsive websites with clean code.",
      icon: "💻",
    },
    {
      title: "Maintenance",
      desc: "Bug fixes, updates and optimization support.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          Our <span className="text-blue-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-[#091121] to-[#11183c]
              rounded-3xl p-10 border border-white/10
              hover:scale-105 duration-300 shadow-2xl"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 text-lg leading-8">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
