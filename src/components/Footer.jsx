import { useState } from "react";
import { FaFacebookF, FaTwitter, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import EnquiryPopup from "../components/EnquieryPopup";
import logo from "../assets/KT logo.png";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-10 text-white text-sm relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
        {/* About */}
        <div>
          <img src={logo} alt="company logo" height="55px" width="55px" />
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

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-[#22D3EE]">Home</Link></li>
            <li><Link to="/projects" className="hover:text-[#22D3EE]">Projects</Link></li>
            <li><Link to="/blog" className="hover:text-[#22D3EE]">Blog</Link></li>
            <li><Link to="/about" className="hover:text-[#22D3EE]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#22D3EE]">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-[#22D3EE]">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><Link to="/services/web-development" className="hover:text-[#22D3EE]">Web Development</Link></li>
            <li><Link to="/services/app-development" className="hover:text-[#22D3EE]">App Development</Link></li>
            <li><Link to="/services/ai-ml" className="hover:text-[#22D3EE]">AI & ML</Link></li>
            <li><Link to="/services/ecommerce" className="hover:text-[#22D3EE]">E-commerce</Link></li>
            <li><Link to="/services/cybersecurity" className="hover:text-[#22D3EE]">Cybersecurity</Link></li>
            <li><Link to="/services/software-dev" className="hover:text-[#22D3EE]">Software Development</Link></li>
          </ul>
        </div>

        {/* Contact + Map */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-400">122 Tybeth Ct, Kannapolis, NC 28083</p>
          <p className="text-slate-400 mt-1">kevintechinfo2025@gmail.com</p>
          <p className="text-slate-400 mt-1">+1 (615) 336-0637</p>
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 px-4 py-2 bg-cyan-500 font-semibold text-white rounded hover:bg-cyan-600"
          >
            Get In Enquiry
          </button>

          {/* Map */}
          <div className="mt-4 h-40 rounded overflow-hidden">
            <MapContainer center={[35.5016, -80.6234]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />
              <Marker position={[35.5016, -80.6234]}>
                <Popup>
                  Kevin Tech Info Office
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 pt-8">&copy; 2025 Kevin Tech Info</p>

      {showPopup && <EnquiryPopup onClose={() => setShowPopup(false)} />}
    </footer>
  );
}
