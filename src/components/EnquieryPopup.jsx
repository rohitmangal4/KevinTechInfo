import EnquiryForm from "./EnquiryForm";

export default function EnquiryPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-100 bg-black/80 flex justify-center items-center mt-20">
      <div className="bg-[#0F172A] text-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-lg hover:text-red-400"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Enquiry for Software Development
        </h3>

        <EnquiryForm/>
      </div>
    </div>
  );
}
