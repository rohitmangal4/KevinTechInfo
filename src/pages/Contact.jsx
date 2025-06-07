import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <HeroSection
        title="Get In Touch With Us"
        description={`We're here to help you turn your ideas into reality. Whether you're looking for a custom-built application, a long-term tech partner, or just want to say hello, our team is ready to assist.

We believe in quick responses, honest communication, and delivering results that matter. You can reach us anytime via email, phone, or by submitting the contact form below.

Let us know how we can help you grow your digital presence and business success.`}
      />

      {/* Contact Info Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-white text-center">
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📞 Phone Support</h3>
            <p>+1 (615) 336-0637</p>
            <p className="text-slate-400 mt-2">Available 24/7</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📧 Email Us</h3>
            <p>kevintechinfo2025@gmail.com</p>
            <p className="text-slate-400 mt-2">
              Response within 1 business hour
            </p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📍 Office Location</h3>
            <p>122 tybeth ct, Kennapolis, NC 28083</p>
            <p className="text-slate-400 mt-2">Mon - Fri, 9AM to 7PM</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0F172A] py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
         <ContactForm/>
        </div>
      </section>

      {/* 24/7 Info Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Need urgent assistance?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We operate round the clock to ensure your projects never stop. Our
            technical experts are just a message away, and we guarantee
            responses within minutes for priority issues. Trust Kevin Tech Info
            to be your 24/7 tech partner.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
