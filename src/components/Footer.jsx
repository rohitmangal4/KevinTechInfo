import { useState } from "react";
import { FaFacebookF, FaTwitter, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import EnquiryPopup from "../components/EnquieryPopup";
import logo from "../assets/KT logo.png"

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-10 text-white text-sm relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
        {/* About */}
       <div>
          <img src={logo} alt="company logo" height="55px" width="55px"/>
          <p className="text-slate-400 mb-4 mt-4">
            At Kevin Tech Info, we specialize in secure, scalable, and intelligent software solutions. From startups to enterprises, we engineer future-ready digital experiences across domains.
          </p>
          <div className="flex gap-4 text-xl text-slate-300 mt-4">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaGlobe /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-[#22D3EE]">Home</a></li>
            <li><a href="/projects" className="hover:text-[#22D3EE]">Projects</a></li>
            <li><a href="/blog" className="hover:text-[#22D3EE]">Blog</a></li>
            <li><a href="/about" className="hover:text-[#22D3EE]">About</a></li>
            <li><a href="/contact" className="hover:text-[#22D3EE]">Contact</a></li>
            <li><a href="/careers" className="hover:text-[#22D3EE]">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="/services/web-development" className="hover:text-[#22D3EE]">Web Development</a></li>
            <li><a href="/services/app-development" className="hover:text-[#22D3EE]">App Development</a></li>
            <li><a href="/services/ai-ml" className="hover:text-[#22D3EE]">AI & ML</a></li>
            <li><a href="/services/ecommerce" className="hover:text-[#22D3EE]">E-commerce</a></li>
            <li><a href="/services/cybersecurity" className="hover:text-[#22D3EE]">Cybersecurity</a></li>
            <li><a href="/services/software-dev" className="hover:text-[#22D3EE]">Software Development</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-400">122 tybeth ct, Kennapolis, NC 28083</p>
          <p className="text-slate-400 mt-1">kevintechinfo2025@gmail.com</p>
          <p className="text-slate-400 mt-1">+1 (615) 336-0637</p>
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 px-4 py-2 bg-cyan-500 font-semibold text-white rounded hover:bg-cyan-600"
          >
            Get In Enquiry
          </button>
        </div>
      </div>

      <p className="text-center text-s text-slate-500 pt-8">&copy; 2025 Kevin Tech Info</p>


      {showPopup && <EnquiryPopup onClose={() => setShowPopup(false)} />}
    </footer>
  );
}
