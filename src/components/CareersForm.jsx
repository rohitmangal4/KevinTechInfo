import { useState } from "react";
import { toast } from "react-toastify";

export default function CareersForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    if (response.ok) {
      toast.success("Application submitted!");
      form.reset();
    } else {
      toast.error("Failed to submit.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="hidden"
        name="access_key"
        value="f05ceb12-beee-493f-897e-03d76f9e67ed"
      />
      <input type="hidden" name="from_name" value="Careers" />
      <input type="hidden" name="subject" value="Applying for job openings" />
      <input
        name="name"
        required
        placeholder="Name"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      />
      <select
        name="field"
        required
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      >
        <option value="">Interested In</option>
        <option>Frontend Development</option>
        <option>Backend Development</option>
        <option>Fullstack</option>
        <option>UI/UX Design</option>
        <option>Project Management</option>
      </select>
      <textarea
        name="cover_letter"
        required
        placeholder="Cover Letter"
        rows="4"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      ></textarea>
      <input
        name="resume_url"
        required
        placeholder="Paste Resume Link (e.g. Google Drive)"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      />
      <button
        disabled={loading}
        type="submit"
        className="w-full py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
      >
        {loading ? "Applying..." : "Apply Now"}
      </button>
    </form>
  );
}
