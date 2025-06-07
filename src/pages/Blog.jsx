import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogs from "../data/BlogData"
import ClientsMarquee from "../components/ClientsMarquee";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <>
      <Navbar />

      <section className="bg-[#0F172A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-cyan-400 text-center">
            Kevin Tech Info Blog
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#1E293B] rounded-lg overflow-hidden border border-white/10 shadow hover:shadow-cyan-500/10 transition"
              >
                <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-slate-400 mb-4">{blog.excerpt}</p>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-radial from-cyan-500/10 via-sky-500/5 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            {selectedBlog.title}
          </h2>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="rounded-lg mb-6 shadow-lg"
          />
          {selectedBlog.content.trim().split("\n").map((para, idx) => (
            <p key={idx} className="text-slate-300 text-lg leading-relaxed mb-6">
              {para.trim()}
            </p>
          ))}
        </div>
      </section>

          <ClientsMarquee className='bg-gradient-radial from-cyan-500/10 via-sky-500/5 py-3'/>
      <Footer />
    </>
  );
}
