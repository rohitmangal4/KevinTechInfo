import { Link } from "react-router-dom";
export default function CTA({ title, buttonLabel, buttonLink }) {
  return (
    <section className="py-16 text-center ">
      <h2 className="text-3xl font-bold text-[#22D3EE] mb-6">{title}</h2>
      <Link
        to={buttonLink}
        className="inline-block bg-[#22D3EE] hover:bg-cyan-400 text-[#0F172A] px-6 py-3 rounded-xl font-semibold transition"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
