import { IoSearch } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import React, { useState } from "react";
import Footer from "../../components/comman/Footer";
import { div } from "motion/react-client";

const EventsList = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // initial visible events

  const filters = [
    "All",
    "Conference",
    "Workshop",
    "Concert",
    "Festival",
    "Webinar",
  ];

  const eventsData = [
    {
      id: 1,
      title: "Tech Innovators Summit",
      description: "A deep dive into the latest tech trends and innovations.",
      category: "Conference",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Leadership Excellence Workshop",
      description: "Enhance your leadership skills with practical strategies.",
      category: "Workshop",
      image:
        "https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=612x612&w=0&k=20&c=T0Sit9sSbrafPXlY0vjadvEf-dyI8-t4uTY5W1TFzWU=",
    },
    {
      id: 3,
      title: "Marketing Masterclass",
      description: "Learn cutting-edge marketing techniques from experts.",
      category: "Conference",
      image: "https://i.ytimg.com/vi/5paDmyp7-S8/sddefault.jpg",
    },
    {
      id: 4,
      title: "Financial Planning Seminar",
      description: "Secure your financial future with expert advice.",
      category: "Conference",
      image:
        "https://www.cmu.edu/hub/news-and-alerts/spring-2019/images/financial-planning900x600.png",
    },
    {
      id: 5,
      title: "Creative Design Workshop",
      description: "Unleash your creativity with hands-on design projects.",
      category: "Workshop",
      image:
        "https://www.innovationtraining.org/storage/2023/11/Designing-Workshops-How-to-Design-a-Workshop.jpg",
    },
    {
      id: 6,
      title: "Summer Music Festival",
      description: "Experience live performances from top artists worldwide.",
      category: "Festival",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
    },
    // -------- Additional events for Load More --------
    {
      id: 7,
      title: "Rock & EDM Night",
      description: "Dance to electrifying beats with live DJs & performers.",
      category: "Concert",
      image:
        "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      title: "Virtual AI Webinar",
      description:
        "Explore the future of artificial intelligence with experts.",
      category: "Webinar",
      image:
        "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      title: "Startup Pitch Night",
      description: "Watch top startups pitch their next big idea live.",
      category: "Conference",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 10,
      title: "Comedy & Fun Activities",
      description: "Laugh out loud with comedy acts and interactive games.",
      category: "Festival",
      image:
        "https://i.ytimg.com/vi/dtaJzUbQS7E/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSihEMA8=&rs=AOn4CLASEoZzOmiDytbzLrFhuM0EdwrukA",
    },
    {
      id: 11,
      title: "International Jazz Concert",
      description: "Groove with world-class jazz musicians live on stage.",
      category: "Concert",
      image:
        "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 12,
      title: "Virtual Coding Bootcamp",
      description: "Hands-on coding webinar with mentors and real projects.",
      category: "Webinar",
      image:
        "https://collegeeducated.com/wp-content/uploads/2022/05/Guide-to-Online-Coding-Bootcamps.jpg",
    },
  ];

  // Filtering logic
  const filteredEvents =
    activeFilter === "All"
      ? eventsData
      : eventsData.filter((event) => event.category === activeFilter);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-12 mb-50 px-4">
        {/* Search Bar */}
        <form className="flex items-center bg-white/90 border border-gray-200 rounded-2xl shadow-md px-4 py-2 backdrop-blur-md">
          <IoSearch size={22} className="text-gray-600 mr-3" />
          <input
            type="text"
            placeholder="Search for events"
            className="flex-grow bg-transparent focus:outline-none text-gray-800 text-[15px] placeholder-gray-500"
          />
        </form>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mt-6">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveFilter(tag);
                setVisibleCount(6); // reset load more on filter change
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                activeFilter === tag
                  ? "bg-yellow-300 text-black shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="mt-10 mb-6 text-4xl font-plusB text-gray-900 tracking-tight">
          Upcoming Events
        </h1>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.slice(0, visibleCount).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-4">
                  {event.description}
                </p>
                <button className="mt-auto px-5 py-2 bg-yellow-300 text-black rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredEvents.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)} // load 3 more
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full shadow-md hover:bg-yellow-300 hover:text-black transition-all"
            >
              Load More
              <IoChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsList;
