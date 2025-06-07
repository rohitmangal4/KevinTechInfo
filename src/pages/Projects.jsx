import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projectsData from "../data/projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <>
      <Navbar />

      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-10 text-cyan-400 text-center">
            Kevin Tech Info Projects
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore some of our flagship products built using top-tier
            technologies. Each project is crafted with precision, scalability,
            and user experience in mind, delivering maximum business value.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 to-transparent py-12 px-4">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {project.shortDesc}
                </p>
                <button className="mt-2 text-cyan-400 underline text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Section */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="text-slate-300 whitespace-pre-line leading-relaxed">
              {selectedProject.longDesc}
            </p>
            <h4 className="text-cyan-400 mt-6 mb-2 font-semibold">
              Technologies Used:
            </h4>
            <ul className="list-disc list-inside text-sm text-slate-400">
              {selectedProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
