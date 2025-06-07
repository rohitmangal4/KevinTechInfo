import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiTypescript,
  SiPython,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import CTA from "../../components/CTA";
import TechStack from "../../components/TechStack";

const techStack = [
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-cyan-400 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-cyan-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-cyan-400 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-cyan-400 text-4xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-cyan-400 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-cyan-400 text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-cyan-400 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-cyan-400 text-4xl" /> },
  { name: "C#", icon: <TiVendorMicrosoft className="text-cyan-400 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-cyan-400 text-4xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-cyan-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
  { name: "Vite", icon: <SiVite className="text-cyan-400 text-4xl" /> },
];

export default function SoftwareDevelopment() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark */}
      <HeroSection
        title="Software Development Solutions"
        subtitle="Custom-Built Software for Complex Business Needs"
        description="At Kevin Tech Info, we build powerful software systems tailored for performance, scalability, and security. Whether it's enterprise software, desktop apps, SaaS products, or cloud-based systems, our expert developers turn ideas into production-ready solutions. From backend architecture to frontend design and DevOps deployment, we cover the full lifecycle with agility and precision. Empower your business with smart software that solves real problems and drives efficiency."
      />

      {/* Tech Stack - Light */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Our Software Tech Stack
        </h2>
        <TechStack stack={techStack} />
      </section>

      {/* Achievements - Dark */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Our Expertise in Software Development
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Delivered 15+ end-to-end software products across industries.</li>
          <li>Cloud-native apps built using Docker, GitHub Actions, and CI/CD pipelines.</li>
          <li>Enterprise-grade security with encrypted data flows and audit trails.</li>
          <li>Flexible integrations with APIs, payment gateways, and analytics tools.</li>
          <li>Designed reusable microservice-based architectures for scale.</li>
        </ul>
      </section>

      {/* CTA - Light */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Have a Software Idea? We’ll Turn It Into Reality."
          buttonLabel="Request a Quote"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
