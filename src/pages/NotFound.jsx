import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#0F172A] text-white text-center px-4">
        <h1 className="text-7xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-white/80 max-w-xl mb-6">
          Oops! The page you're looking for doesn't exist or may have been moved. Please check the URL or return to the homepage.
        </p>
        <NavLink
          to="/"
          className="bg-cyan-500 text-[#0F172A] px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-400 transition duration-200"
        >
          Go to Home
        </NavLink>
      </section>
      <Footer />
    </>
  );
}
