import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CareersForm from "../components/CareersForm";
import workCul from "../assets/workCulture.jpg"

export default function Careers() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <HeroSection
        title="Join Our Team"
        description={`At Kevin Tech Info, we don't just build software—we build careers. We believe in empowering our team members with the tools, flexibility, and mentorship they need to succeed.

Join a community of passionate developers, designers, and tech leaders solving real-world challenges. We foster a culture of collaboration, innovation, and continuous learning.

If you're ready to grow, innovate, and lead, we're ready to welcome you to the team.`}
      />

      {/* Why Choose Us Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Kevin Tech Info?
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            We’re not your typical software company. Our culture thrives on
            openness, teamwork, and meaningful impact. At Kevin Tech Info, every
            idea counts and every contribution is valued. Whether you’re fresh
            out of college or a seasoned expert, you’ll find a place to grow and
            innovate.
          </p>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Work Environment</h2>
            <p className="text-slate-300 mb-4">
              Our office is a blend of focus, fun, and freedom. Flexible hours,
              remote options, and collaborative tools help you perform at your
              best. We encourage open discussions, idea sharing, and continuous
              improvement.
            </p>
            <p className="text-slate-300">
              From hackathons to casual Fridays, we balance work and play to
              keep morale high and creativity flowing. We believe happy
              employees build great products.
            </p>
          </div>
          <img
            src={workCul}
            alt="Work culture"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Perks & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#1E293B] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🚀 Career Growth</h3>
              <p className="text-slate-300">
                Training programs, certifications, and real project exposure
                from day one.
              </p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">💻 Tech Stacks</h3>
              <p className="text-slate-300">
                Get hands-on with modern tools like React, Node.js, Spring Boot,
                and AI/ML frameworks.
              </p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                🎉 Work-Life Balance
              </h3>
              <p className="text-slate-300">
                Remote-friendly, flexible hours, and wellness initiatives for
                your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Apply Now</h2>
          <CareersForm/>
        </div>
      </section>

      {/* Final Message */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Wishing You the Best!</h2>
          <p className="text-slate-300">
            Thank you for your interest in Kevin Tech Info. We're excited to
            learn more about you. Our recruitment team will review your
            application and get in touch shortly if there’s a match. Stay
            connected and keep innovating!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
