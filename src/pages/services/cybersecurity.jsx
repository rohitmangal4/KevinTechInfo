import {
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiPython,
  SiLinux,
  SiDocker,
  SiGithub,
  SiCloudflare,
  SiNodedotjs,
  SiReact,
  SiOpenbsd,
} from "react-icons/si";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import CTA from "../../components/CTA";
import TechStack from "../../components/TechStack";

const techStack = [
  { name: "Wireshark", icon: <SiWireshark className="text-cyan-400 text-4xl" /> },
  { name: "Metasploit", icon: <SiMetasploit className="text-cyan-400 text-4xl" /> },
  { name: "Burp Suite", icon: <SiBurpsuite className="text-cyan-400 text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-cyan-400 text-4xl" /> },
  { name: "Linux", icon: <SiLinux className="text-cyan-400 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-400 text-4xl" /> },
  { name: "Cloudflare", icon: <SiCloudflare className="text-cyan-400 text-4xl" /> },
  { name: "GitHub Security", icon: <SiGithub className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-cyan-400 text-4xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "OpenBSD", icon: <SiOpenbsd className="text-cyan-400 text-4xl" /> },
];

export default function CyberSecurity() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark */}
      <HeroSection
        title="Cybersecurity Solutions"
        subtitle="Secure Your Digital Infrastructure with Confidence"
        description="At Kevin Tech Info, we specialize in defending businesses against evolving cyber threats. Our cybersecurity services include vulnerability assessments, penetration testing, threat intelligence, firewall configuration, and SOC monitoring. From small businesses to enterprise systems, we ensure your digital infrastructure is fortified using advanced security tools, frameworks, and protocols. Our proactive and reactive strategies help you comply with global security standards while protecting data, applications, and customer trust."
      />

      {/* Tech Stack - Light */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Our Cybersecurity Tech Stack
        </h2>
        <TechStack stack={techStack} />
      </section>

      {/* Achievements - Dark */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Securing Success
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Conducted 100+ penetration tests across cloud and on-prem systems.</li>
          <li>Helped organizations achieve ISO 27001 and SOC 2 Type II compliance.</li>
          <li>Successfully mitigated DDoS attacks using AWS Shield and Cloudflare WAF.</li>
          <li>Implemented enterprise-grade IAM, MFA, and encryption protocols.</li>
          <li>Monitored threats in real-time through integrated SIEM dashboards.</li>
        </ul>
      </section>

      {/* CTA - Light */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Need Enterprise-Grade Cybersecurity Solutions?"
          buttonLabel="Secure Your Business"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
