import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/services/webdevelopment";
import AppDevelopment from "./pages/services/appdevelopment";
import AIML from "./pages/services/aiml";
import Ecommerce from "./pages/services/ecommerce";
import Cybersecurity from "./pages/services/cybersecurity";
import SoftwareDev from "./pages/services/softwaredev";
import AiAndMl from "./pages/services/aiml";
import ServicesLayout from "./layouts/ServicesLayout";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/Scroll";

export default function App() {
  return (
    <>
      <Routes>
      <ScrollToTop/>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<ServicesLayout />}>
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="app-development" element={<AppDevelopment />} />
        <Route path="ai-ml" element={<AiAndMl />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="cybersecurity" element={<Cybersecurity />} />
        <Route path="software-dev" element={<SoftwareDev />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
