import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiVite,
  SiBootstrap,
  SiSass,
  SiGraphql,
  SiDocker,
  SiGit,
  SiGithub,
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
  { name: "Express", icon: <SiExpress className="text-cyan-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-cyan-400 text-4xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-cyan-400 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-cyan-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-cyan-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-cyan-400 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-cyan-400 text-4xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-cyan-400 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-cyan-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-cyan-400 text-4xl" /> },
  { name: "Vite", icon: <SiVite className="text-cyan-400 text-4xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-cyan-400 text-4xl" /> },
  { name: "Sass", icon: <SiSass className="text-cyan-400 text-4xl" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-cyan-400 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-400 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-cyan-400 text-4xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-cyan-400 text-4xl" /> },
];

export default function WebDevelopment() {
  return (
    <>
      <Navbar />

      {/* Dark BG: Hero */}
      <HeroSection
        title="Web Development Solutions"
        subtitle="Custom Web Apps That Drive Business Growth"
        description="At Kevin Tech Info, we build powerful and responsive web applications tailored to your business goals. Our web development services span across modern JavaScript frameworks like React, Next.js, and Vue, supported by robust backend technologies like Node.js and Express. Whether you need a high-performance e-commerce platform, a scalable SaaS dashboard, or a custom CMS, we ensure speed, security, and SEO optimization. From design to deployment, our team focuses on delivering seamless digital experiences that engage users and drive conversions. Partner with us to future-proof your digital presence."
      />

      {/* Light BG: Tech Stack */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Our Tech Stack
        </h2>
        <TechStack stack={techStack}/>
      </section>

      {/* Dark BG: Achievements */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Our Achievements
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Successfully delivered 10+ full-stack web applications for global clients.</li>
          <li>Achieved 95%+ performance and SEO scores on Lighthouse audits.</li>
          <li>Designed and deployed scalable architectures with high availability.</li>
          <li>Integrated third-party APIs and payment gateways flawlessly.</li>
          <li>Maintained a 100% project delivery rate with positive client feedback.</li>
        </ul>
      </section>

      {/* Light BG: CTA */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Need Expert Web Development? Let's Bring Your Idea to Life!"
          buttonLabel="Contact Us"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
