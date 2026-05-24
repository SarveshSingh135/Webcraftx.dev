"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);

  const phone = "918796458203";

  const message = `Hi Webcraftx 👋
 I want to build a website;
 Pricing;
 Portfolio`;
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Popup Box */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <span>Webcraftx 💬</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Message */}
          <div className="p-4 text-black">
            <p className="text-sm">
              👋 Hi! Need a website?
            </p>

            <p className="text-xs text-gray-500 mt-2">
              We reply instantly ⚡
            </p>
          </div>

          {/* Button */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            className="block bg-green-500 text-white text-center py-3 hover:bg-green-600"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}