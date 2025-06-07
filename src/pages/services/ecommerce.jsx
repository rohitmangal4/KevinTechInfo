import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiShopify,
  SiRedux,
  SiVite,
} from "react-icons/si";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import CTA from "../../components/CTA";
import TechStack from "../../components/TechStack";

const techStack = [
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-cyan-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-cyan-400 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-cyan-400 text-4xl" /> },
  { name: "Stripe", icon: <SiStripe className="text-cyan-400 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-cyan-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-cyan-400 text-4xl" /> },
  { name: "Shopify", icon: <SiShopify className="text-cyan-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
  { name: "Vite", icon: <SiVite className="text-cyan-400 text-4xl" /> },
];

export default function Ecommerce() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark BG */}
      <HeroSection
        title="E-commerce Development"
        subtitle="Build Scalable & Secure Online Stores"
        description="At Kevin Tech Info, we specialize in building high-performance e-commerce solutions tailored to your business goals. Whether you're launching a new brand, expanding online sales, or optimizing an existing store, our custom storefronts ensure speed, security, and seamless shopping experiences. We integrate payment gateways, inventory systems, shipping APIs, and offer responsive designs to support growth across devices. Our expertise spans Shopify, custom React/Next.js platforms, and secure backend stacks like Node.js and MongoDB. Future-proof your online business with us."
      />

      {/* Tech Stack - Light BG */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Technologies We Use
        </h2>
        <TechStack stack={techStack} />
      </section>

      {/* Achievements - Dark BG */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Proven E-commerce Success
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Delivered 15+ custom storefronts with advanced cart functionality.</li>
          <li>Integrated secure payment gateways like Stripe, Razorpay & PayPal.</li>
          <li>Optimized store performance to achieve 90+ Lighthouse scores.</li>
          <li>Built scalable admin panels for real-time product and order management.</li>
          <li>Provided ongoing support and analytics for client business growth.</li>
        </ul>
      </section>

      {/* CTA - Light BG */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Looking to Launch or Scale Your Online Store?"
          buttonLabel="Talk to Our Experts"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
