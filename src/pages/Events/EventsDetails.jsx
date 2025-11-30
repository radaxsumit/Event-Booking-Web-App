import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { RiMicLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { HiPlayPause } from "react-icons/hi2";
import Modal from "../../components/comman/Modal";
import { ModalContext } from "../../contexts/ModalContext";

const EventDetails = () => {
  const { open, setOpen } = useContext(ModalContext);
  const location = useLocation();
  const { title, description, image } = location.state || {};

  return (
    <div className="px-6 md:px-12 py-12 max-w-6xl mx-auto font-sans">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="hover:text-yellow-300 cursor-pointer">Events</span> /{" "}
        <span className="text-black font-medium">{title}</span>
      </nav>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {title} <span className="text-yellow-400">2025</span>
          <div>
            <span className=" "> </span>
          </div>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          {description ||
            "Join us for an unforgettable experience featuring inspiring talks, hands-on workshops, and opportunities to connect with leading professionals."}
        </p>
      </div>

      {/* Event Banner */}
      <div className="w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg mb-12">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
        <p className="text-gray-700 leading-relaxed">
          {title} 2025 is the ultimate gathering for innovators and enthusiasts.
          Expect keynote sessions from global leaders, immersive workshops, and
          networking with top companies and startups. Discover trends in AI,
          cybersecurity, blockchain, and beyond while shaping the future of
          technology.
        </p>
      </section>

      {/* Speakers */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Ethan Carter", title: "CEO, Innovative Solutions" },
            { name: "Liam Harper", title: "CTO, Future Tech" },
            {
              name: "Olivia Bennett",
              title: "Lead Data Scientist, DataGenius",
            },
          ].map((speaker, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-lg font-medium">{speaker.name}</h3>
              <p className="text-sm text-gray-500">{speaker.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Agenda</h2>
        <div className="space-y-6">
          {[
            {
              icon: <RiMicLine size={22} />,
              title: "Opening Keynote",
              time: "9:00 AM - 10:00 AM",
            },
            {
              icon: <BsCodeSlash size={22} />,
              title: "AI & Machine Learning Workshop",
              time: "10:15 AM - 12:00 PM",
            },
            {
              icon: <GoPeople size={22} />,
              title: "Networking Lunch",
              time: "12:15 PM - 1:30 PM",
            },
            {
              icon: <HiPlayPause size={22} />,
              title: "Closing Panel Discussion",
              time: "3:00 PM - 4:30 PM",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-yellow-400">{item.icon}</div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Early Bird",
              price: "$299",
              features: ["All sessions", "Networking access"],
              highlight: false,
            },
            {
              title: "Regular",
              price: "$399",
              features: ["All sessions", "Networking", "Workshop access"],
              highlight: false,
            },
            {
              title: "VIP",
              price: "$599",
              features: [
                "All sessions",
                "Networking",
                "Workshop access",
                "VIP lounge",
                "Exclusive materials",
              ],
              highlight: true,
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all ${
                tier.highlight
                  ? "border-yellow-400 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{tier.title}</h3>
                {tier.highlight && (
                  <span className="text-xs px-2 py-0.5 bg-yellow-400 text-white rounded">
                    Best Value
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {tier.price}
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {tier.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-3 bg-yellow-400 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Purchase Tickets
        </button>
        {open && <Modal />}
      </div>
    </div>
  );
};

export default EventDetails;
