import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

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
      toast.success("Enquiry submitted successfully!");
      navigate('/')
      form.reset();
    } else {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="hidden"
        name="access_key"
        value="f05ceb12-beee-493f-897e-03d76f9e67ed"
      />
      <input type="hidden" name="from_name" value="Enquiery" />
      <input type="hidden" name="subject" value="Mail for Enquiery" />
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
        name="service"
        required
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      >
        <option value="">Select Service</option>
        <option>Web Development</option>
        <option>App Development</option>
        <option>AI/ML</option>
        <option>E-commerce</option>
        <option>Cybersecurity</option>
        <option>Software Development</option>
      </select>
      <textarea
        name="message"
        required
        placeholder="Message"
        rows="4"
        className="w-full px-3 py-2 rounded bg-[#0F172A] text-white border border-white/10"
      ></textarea>
      <button
        disabled={loading}
        type="submit"
        className="w-full py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
