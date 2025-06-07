export default function TechStack({ stack }) {
  return (
    <section className="py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-[#0F172A] p-6 rounded-xl shadow-md border border-cyan-700/20 hover:scale-105 transition"
          >
            {tech.icon}
            <p className="mt-3 text-sm text-slate-200 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
