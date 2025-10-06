import React from "react";

const Venues = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center py-16 px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">
          Book Your Tickets 🎟️
        </h1>
        <p className="max-w-xl text-center text-gray-300 mb-10">
          Secure your spot at the hottest events and concerts. Fill in your
          details below and get ready to experience unforgettable moments.
        </p>

        {/* Form */}
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-black/40 border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full rounded-lg bg-black/40 border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Number of Tickets */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Number of Tickets
            </label>
            <input
              type="number"
              placeholder="Enter number of tickets"
              className="w-full rounded-lg bg-black/40 border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition">
            Book Now
          </button>
        </div>

        {/* Extra section for scroll feel */}
        <div className="mt-20 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">
            Why Book With Us?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Enjoy seamless ticket booking, exclusive deals, and access to the
            best concerts, festivals, and workshops around you. We make sure
            your event experience is smooth, exciting, and unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venues;
