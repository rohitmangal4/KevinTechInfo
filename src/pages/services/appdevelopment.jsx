import {
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiAndroid,
  SiApple,
  SiSwift,
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiRedux,
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
  { name: "React Native", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-cyan-400 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-cyan-400 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-cyan-400 text-4xl" /> },
  { name: "Android", icon: <SiAndroid className="text-cyan-400 text-4xl" /> },
  { name: "iOS", icon: <SiApple className="text-cyan-400 text-4xl" /> },
  { name: "Swift", icon: <SiSwift className="text-cyan-400 text-4xl" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-cyan-400 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-cyan-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-cyan-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-cyan-400 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-400 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-cyan-400 text-4xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-cyan-400 text-4xl" /> },
];

export default function AppDevelopment() {
  return (
    <>
      <Navbar />

      {/* Dark BG: Hero */}
      <HeroSection
        title="Mobile App Development Solutions"
        subtitle="Native & Cross-Platform Mobile Apps Built to Perform"
        description="At Kevin Tech Info, we specialize in building feature-rich mobile applications that are fast, secure, and scalable. Our team uses modern frameworks like React Native and Flutter to deliver cross-platform solutions that maintain native performance and user experience. We also develop fully native iOS and Android apps using Swift and Kotlin. Whether it's a startup MVP or a large-scale enterprise app, we provide end-to-end mobile app development—from UI/UX design to app store deployment—with a strong focus on quality, performance, and user engagement."
      />

      {/* Light BG: Tech Stack */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Our Mobile App Tech Stack
        </h2>
        <TechStack stack={techStack} />
      </section>

      {/* Dark BG: Achievements */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Key Milestones
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Launched 15+ mobile apps across iOS and Android platforms.</li>
          <li>Integrated real-time features like chat, maps, and notifications.</li>
          <li>Reduced time-to-market with efficient cross-platform tools.</li>
          <li>Achieved 4.5+ average app ratings on the App Store and Google Play.</li>
          <li>Delivered scalable apps supporting 10k+ daily active users.</li>
        </ul>
      </section>

      {/* Light BG: CTA */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Looking to Build a Mobile App? Let’s Create Something Great Together!"
          buttonLabel="Get Started"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
