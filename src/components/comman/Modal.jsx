import React, { useContext, useRef } from "react";
import { LuX } from "react-icons/lu";
import { ModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const modalRef = useRef();
  const { open, setOpen } = useContext(ModalContext);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4"
    >
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <LuX size={26} />
        </button>

        {/* Event Header */}
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-xl font-bold text-gray-800">
            Tech Conference 2025
          </h2>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="your number"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Tickets */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Tickets
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 2"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Ticket Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Selected Tier:</span>
              <span className="font-semibold text-gray-700">VIP Pass</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Price per Ticket:</span>
              <span className="font-semibold text-gray-700">$599</span>
            </div>
            <div className="flex justify-between text-base font-bold border-t pt-2">
              <span>Total:</span>
              <span className="text-blue-600">$1198</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="button"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Confirm & Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
