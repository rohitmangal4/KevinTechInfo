import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiGooglecloud,
  SiOpenai,
  SiReact,
  SiNodedotjs,
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
  { name: "Python", icon: <SiPython className="text-cyan-400 text-4xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-cyan-400 text-4xl" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-cyan-400 text-4xl" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="text-cyan-400 text-4xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-cyan-400 text-4xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-cyan-400 text-4xl" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-cyan-400 text-4xl" /> },
  { name: "Google Cloud AI", icon: <SiGooglecloud className="text-cyan-400 text-4xl" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-cyan-400 text-4xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-cyan-400 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-400 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-cyan-400 text-4xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-cyan-400 text-4xl" /> },
];

export default function AIMLDevelopment() {
  return (
    <>
      <Navbar />

      {/* Dark BG: Hero */}
      <HeroSection
        title="AI & Machine Learning Solutions"
        subtitle="Transform Data into Intelligence with AI"
        description="At Kevin Tech Info, we deliver powerful AI and ML solutions that help businesses automate, optimize, and innovate. Whether it’s predictive analytics, NLP, computer vision, or recommendation engines, we bring deep expertise in machine learning frameworks and scalable infrastructure. From data processing to model training and deployment, our team helps enterprises unlock insights and build smarter systems powered by artificial intelligence. Let’s turn your data into actionable intelligence and drive digital transformation."
      />

      {/* Light BG: Tech Stack */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-[#0F172A]">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-10">
          Our AI & ML Tech Stack
        </h2>
        <TechStack stack={techStack} />
      </section>

      {/* Dark BG: Achievements */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Milestones in AI & ML
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6 list-disc list-inside text-slate-300 text-lg leading-relaxed">
          <li>Developed predictive models with 90%+ accuracy using real-world datasets.</li>
          <li>Built NLP chatbots for automated customer support and engagement.</li>
          <li>Deployed AI pipelines on cloud platforms (AWS/GCP) with auto-scaling support.</li>
          <li>Implemented real-time recommendation systems in e-commerce platforms.</li>
          <li>Integrated computer vision APIs for object detection and image processing.</li>
        </ul>
      </section>

      {/* Light BG: CTA */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5">
        <CTA
          title="Ready to Infuse AI into Your Business?"
          buttonLabel="Talk to Our Experts"
          buttonLink="/contact"
        />
      </section>

      <Footer />
    </>
  );
}
