import React from "react";
import { Link } from "react-router-dom";

const Event_card = () => {
  const events = [
    {
      title: "ROCK NIGHT",
      description: "Live Music Concert",
      Subdescription:
        "A high-voltage night filled with electrifying performances and vibrant crowds",
      image: "./src/assets/Images/Concert.jpg",
    },
    {
      title: "AUDITORIUM VIBES",
      description: "Theater Performance",
      Subdescription:
        "Experience the grandeur of stage performances in a majestic setting",
      image: "./src/assets/Images/auditorium.jpg",
    },
    {
      title: "PIANO VIBES",
      description: "Instrumental Session",
      Subdescription:
        "Let the soulful piano melodies soothe your mind and soul",
      image: "./src/assets/Images/piano.jpg",
    },
    {
      title: "TECH VIBES",
      description: "Tech & Innovation Talks",
      Subdescription:
        "Explore innovations, trends, and ideas from the tech world",
      image: "./src/assets/Images/teemu.jpg",
    },
  ];

  const popularEvents = [
    {
      title: "CLASSIC THEATER NIGHT",
      description: "Drama & Performance",
      Subdescription:
        "A curated theatrical experience showcasing classic performances",
      image: "./src/assets/Images/international.jpg",
    },
    {
      title: "WEDDING EXPO",
      description: "Event Planning Showcase",
      Subdescription:
        "Plan your dream wedding with top-tier vendors and designers",
      image: "./src/assets/Images/wedding.jpg",
    },
    {
      title: "INDIE MUSIC FESTIVAL",
      description: "Live Music Concert",
      Subdescription:
        "Discover upcoming indie bands and immerse in raw musical energy",
      image: "./src/assets/Images/crowd.jpg",
    },
    {
      title: "VINTAGE FILM SCREENING",
      description: "Retro Movie Marathon",
      Subdescription:
        "Relive the golden era of cinema with iconic film showings",
      image: "./src/assets/Images/ticket.jpg",
    },
    {
      title: "CAPTURED MOMENTS",
      description: "Photography Showcase",
      Subdescription:
        "Step into the lens of storytellers capturing live emotions in stills",
      image: "./src/assets/Images/iphone.jpg",
    },
  ];

  return (
    <div className="max-w-[85%] mx-auto flex flex-col mt-14 mb-50 font-sans space-y-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-plusB tracking-tight">
          Featured Events
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <Link
              to="/EventsDetails"
              state={event}
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>
              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white space-y-1">
                <p className="text-lg font-semibold">{event.title}</p>
                <p className="text-sm text-gray-200">{event.description}</p>
                <p className="text-xs text-gray-300 hidden md:block">
                  {event.Subdescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Events */}
      <div className="space-y-8">
        <h1 className="text-4xl font-plusB tracking-tight">
          Upcoming Popular Events
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 space-y-2">
                <p className="font-semibold text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event_card;
