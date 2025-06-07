import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ClientsMarquee from "../components/ClientsMarquee";

export default function About() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="About Kevin Tech Info"
        description={`Kevin Tech Info is a leading USA-based software company delivering innovative, secure, and scalable digital solutions.
Our mission is to empower businesses with cutting-edge technology, tailored for real-world success.
From startups to global enterprises, we craft digital ecosystems that solve complex challenges.
Our team of engineers, designers, and strategists collaborate closely to deliver exceptional results.
We're passionate about building software that not only works — but works wonders.`}
      />

      {/* Section 1 - Company Vision */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">Our Vision</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            At Kevin Tech Info, our vision is to shape the future of technology by creating impactful software that transforms industries.
            We aim to lead the digital evolution with integrity, creativity, and a relentless pursuit of excellence.
          </p>
        </div>
      </section>

      {/* Section 2 - Our Values */}
      <section className="bg-[#0F172A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">Our Core Values</h2>
          <ul className="text-slate-300 text-lg space-y-3 max-w-3xl mx-auto">
            <li>✅ Innovation: We think ahead, always building for the future.</li>
            <li>✅ Reliability: We deliver what we promise, on time and with quality.</li>
            <li>✅ Transparency: Open communication with clients and teams alike.</li>
            <li>✅ Scalability: Every solution is designed to grow with your business.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 - Our Team */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">Our Team</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Kevin Tech Info is powered by a team of passionate professionals who bring diverse expertise in full-stack development, UI/UX design, AI, cybersecurity, and digital strategy.
            Together, we work like a well-oiled machine to bring your ideas to life with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Section 4 - Why Choose Us */}
      <section className="bg-[#0F172A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">Why Choose Kevin Tech Info?</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            With years of experience, an agile development approach, and a strong commitment to customer success, we are your ideal tech partner.
            Whether it's a web app, mobile app, or complex software system — we deliver excellence every time.
          </p>
        </div>
      </section>

      <ClientsMarquee className='bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-3'/>

      <Footer />
    </>
  );
}
