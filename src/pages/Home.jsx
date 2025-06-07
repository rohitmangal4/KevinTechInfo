import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import WhyChooseUsItem from "../components/WhyChooseUsItem";
import ClientsMarquee from "../components/ClientsMarquee";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Empowering Digital Innovation"
        description="At Kevin Tech Info, a leading US-based software company, we specialize in creating secure, scalable, and intelligent solutions across industries. From startups to enterprise businesses, we engineer future-ready digital experiences that drive success.

Our team blends creativity with technical expertise to craft tailored applications that solve real-world problems. With a client-first mindset, we deliver excellence through every line of code."
      />

      {/* Services Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard
            title="Web Development"
            description="We build responsive, high-performing websites and web apps using modern technologies like React, Next.js, and Tailwind. From landing pages to complex portals, we ensure pixel-perfect design and smooth UX."
          />
          <ServiceCard
            title="App Development"
            description="Our mobile experts develop seamless native and cross-platform apps tailored for iOS and Android. Whether it’s for e-commerce, logistics, or social media—we create high-performance apps users love."
          />
          <ServiceCard
            title="AI / ML Solutions"
            description="We help businesses unlock insights with AI. Our solutions include predictive analytics, recommendation systems, NLP, image recognition, and custom machine learning models, all tailored to your domain."
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ProjectCard
            name="NXT CRM"
            description="A scalable, multi-tenant SaaS CRM tailored for sales teams across different companies. Features include role-based dashboards, lead management, analytics, and white-label support."
          />
          <ProjectCard
            name="MedConnect"
            description="An end-to-end doctor appointment platform with real-time booking, smart calendar sync, patient records, and telehealth support for hospitals and private clinics."
          />
          <ProjectCard
            name="EComBoost"
            description="An AI-powered eCommerce accelerator that personalizes shopping, automates inventory management, and integrates with major platforms like Shopify and WooCommerce."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <WhyChooseUsItem
            icon="⚡"
            title="Fast Delivery"
            description="Our agile teams prioritize quick go-to-market launches while maintaining code quality. Speed meets precision in every release."
          />
          <WhyChooseUsItem
            icon="🔒"
            title="Secure Code"
            description="Security is built into every layer. We follow OWASP standards, perform code audits, and implement role-based access control."
          />
          <WhyChooseUsItem
            icon="🎯"
            title="Tailored Solutions"
            description="Every solution we build is customized for your business logic, industry needs, and future scalability—no generic codebase."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center text-[#22D3EE] mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <TestimonialCard
            quote="Kevin Tech Info delivered beyond our expectations. Their CRM helped us streamline our entire sales funnel with zero downtime."
            name="John Davis"
            company="StartupX"
          />
          <TestimonialCard
            quote="Thanks to Kevin Tech Info, our website conversions increased by 45%. Their UX/UI expertise and responsive support made all the difference."
            name="Priya Kumar"
            company="GlobalMart"
          />
          <TestimonialCard
            quote="From kickoff to delivery, they were proactive, transparent, and highly skilled. Highly recommend for enterprise-grade software."
            name="Ramesh Iyer"
            company="FinTechPro"
          />
        </div>
      </section>


      {/* Clients Marquee */}
      <ClientsMarquee className='bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-3'/>

      <Footer />
    </>
  );
}
