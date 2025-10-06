import React, { useContext, useRef } from "react";
import { LuX } from "react-icons/lu";
import { ModalContext } from "../../contexts/ModalContext";

const LoginModal = () => {
  const modalRef = useRef();
  const { loginOpen, setLoginOpen } = useContext(ModalContext);

  if (!loginOpen) return null;

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setLoginOpen(false);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 bg-opacity-70 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
    >
      <div
        className="bg-gray-900 text-white w-full max-w-md rounded-t-2xl p-8 animate-slideUp"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setLoginOpen(false)}>
            <LuX size={28} className="text-gray-400 hover:text-red-500" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 rounded-lg bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition">
          Login
        </button>

        {/* Extra Links */}
        <p className="text-center text-gray-400 mt-4 text-sm">
          Don’t have an account?{" "}
          <span className="text-yellow-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
