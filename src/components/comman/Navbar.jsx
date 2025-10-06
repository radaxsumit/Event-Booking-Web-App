import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";

// import { User } from "../../assets/Icons/User";
// import { BellRing } from "../../assets/Icons/BellRing";
// import { LuBell, LuUser } from "react-icons/lu";
import { Slack } from "../../assets/Icons/Slack";
import { ModalContext } from "../../contexts/ModalContext";
import { useModal } from "../../contexts/useModel"

const Navbar = () => {
  
  const { setLoginOpen } = useContext(ModalContext);
  // const { toggleLoginModal } = useModal();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/EventsList" },
    { name: "Venues", path: "/Venues" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center h-[65px] border-b border-white/20 bg-black/80 backdrop-blur-lg px-8 relative">
        {/* Logo Section */}
        <div
          className="flex items-center text-2xl text-amber-300 font-playwrite cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Slack className="mr-2" />
          Eventely
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-12 text-[17px] font-plusB text-zinc-100">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-[-6px] h-[2px] bg-yellow-300 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLoginOpen(true)}
            className="px-6 py-1 bg-yellow-400 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
