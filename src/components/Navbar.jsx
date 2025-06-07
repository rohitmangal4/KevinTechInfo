import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/KT logo.png"

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "App Development", path: "/services/app-development" },
  { name: "AI & ML", path: "/services/ai-ml" },
  { name: "E-commerce", path: "/services/ecommerce" },
  { name: "Cybersecurity", path: "/services/cybersecurity" },
  { name: "Software Dev", path: "/services/software-dev" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-white hover:text-[#22D3EE] text-lg pb-1 transition-all duration-200 ${
      isActive ? "border-b-2 border-[#22D3EE]" : ""
    }`;

  return (
    <header className="bg-[#0F172A]/90 backdrop-blur sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-white text-xl font-[700] flex gap-4">
          <div className="h-[55px] w-[55px]">
            <img src={logo} alt="company logo" className="h-full w-full"/>
          </div>
          <div className="flex flex-col">
            <span className="text-cyan-500 text-xl">Kevin Tech</span>
            <span className="text-cyan-500 text-xl font-medium">Info</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm relative items-center">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>

          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center text-white hover:text-[#22D3EE] text-lg gap-1"
            >
              Services <FaChevronDown className="text-sm" />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 px-10 mt-2 bg-[#1E293B] text-md rounded-md shadow-lg flex flex-col gap-5 py-4 w-72 z-50">
                {services.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={linkClasses}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={linkClasses}>
            Blog
          </NavLink>
          <NavLink to="/careers" className={linkClasses}>
            Career
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <div className="fixed top-0 right-0 w-72 h-screen bg-[#1E293B] z-50 p-6 flex flex-col gap-3 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-xl font-bold">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-white text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <NavLink
              to="/"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </NavLink>

            {/* Services (click to expand on mobile) */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white flex items-center justify-between w-full text-lg"
              >
                Services <FaChevronDown className="text-sm" />
              </button>
              {isServicesOpen && (
                <div className="mt-2 pl-3 flex flex-col gap-2">
                  {services.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={linkClasses}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMobileOpen(false);
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/careers"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              Career
            </NavLink>
            <NavLink
              to="/about"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClasses}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </>
      )}
    </header>
  );
}
