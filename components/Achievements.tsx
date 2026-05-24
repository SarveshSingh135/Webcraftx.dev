export default function Achievements() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      
      <div>
        <h2 className="text-3xl font-bold text-blue-500">10+</h2>
        <p className="text-gray-400">Projects</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-500">5+</h2>
        <p className="text-gray-400">Clients</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-500">100+</h2>
        <p className="text-gray-400">Visitors</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-500">1+</h2>
        <p className="text-gray-400">Months</p>
      </div>

    </section>
  );
}