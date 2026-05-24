export default function Dashboard() {
  return (
    <section
      id="stats"
      className="min-h-screen max-w-7xl mx-auto py-24 flex flex-col justify-center"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Our Results
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {[
          ["Projects", "148+"],
          ["Clients", "62+"],
          ["Visitors", "12,480+"],
          ["Growth", "+270%"],
          ["Revenue", "₹8.4L"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-8 rounded-3xl border border-white/10 text-center"
          >
            <p className="text-zinc-400 text-lg">{item[0]}</p>

            <h3 className="text-4xl font-bold text-blue-500 mt-4">
              {item[1]}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}