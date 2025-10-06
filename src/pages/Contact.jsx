import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-yellow-400 py-16 px-6 text-center">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-300">
          Have questions about our events? We’d love to hear from you!
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Contact Information
          </h2>
          <p className="text-gray-600">
            Reach out to us for collaborations, sponsorships, or event details.
          </p>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <p className="text-gray-800">Jaipur, Rajasthan, India</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <p className="text-gray-800">+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <p className="text-gray-800">support@eventely.com</p>
          </div>

          {/* Map Section */}
          <div className="mt-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.949313428546!2d75.78727067527338!3d26.912433576671388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f64b6b77df%3A0x7c5a3f0ec9b2b1a3!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl shadow-md border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
