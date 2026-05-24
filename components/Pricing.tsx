export default function Pricing() {
  const plans = [
    ["Starter", "₹9,999"],
    ["Growth", "₹24,999"],
    ["Elite", "₹49,999+"]
  ];

  return (
    <section className="max-w-7xl mx-auto py-12">

      <h2 className="text-4xl font-bold text-center mb-12">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-8 rounded-3xl border border-white/10 text-center"
          >
            <h3 className="text-2xl">{plan[0]}</h3>

            <p className="text-5xl font-bold text-blue-500 mt-5">
              {plan[1]}
            </p>

            <button className="mt-8 px-7 py-3 bg-blue-600 rounded-full">
              Select Plan
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}