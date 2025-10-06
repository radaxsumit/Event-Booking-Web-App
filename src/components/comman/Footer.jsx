// Footer.jsx
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#1f1f21] to-black text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
        {/* Logo & Tagline */}
        <div className="text-center">
          <h1 className="text-3xl font-playwrite text-amber-300 tracking-wide">
            Eventely
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Bringing Events Closer to You ✨
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm font-medium">
          <a href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
          <a href="/EventsList" className="hover:text-yellow-400 transition-colors">
            Events
          </a>
          <a href="/Venues" className="hover:text-yellow-400 transition-colors">
            Venues
          </a>
          <a href="/Contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <FaFacebook className="text-white/70 hover:text-yellow-400 transition-all hover:scale-110" />
          <FaInstagram className="text-white/70 hover:text-yellow-400 transition-all hover:scale-110" />
          <FaYoutube className="text-white/70 hover:text-yellow-400 transition-all hover:scale-110" />
          <FaPinterest className="text-white/70 hover:text-yellow-400 transition-all hover:scale-110" />
          <FaLinkedin className="text-white/70 hover:text-yellow-400 transition-all hover:scale-110" />
        </div>

        {/* Browse by Venues CTA */}
        <button className="mt-4 flex items-center gap-2 bg-yellow-400/10 backdrop-blur-md border border-yellow-400/30 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md">
          <FaMapMarkerAlt />
          Browse by Venues
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mt-8"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center px-6 leading-relaxed">
          © 2025 RADA Pvt. Ltd. All Rights Reserved. The content and images on
          this site are copyright protected and copyrights vest with the
          respective owners. Unauthorized use is prohibited and punishable by
          law.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
