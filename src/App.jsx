import React from "react";
import Navbar from "./components/comman/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import EventsList from "./pages/Events/EventsList";
import Venues from "./pages/Venues/Venues";
import Contact from "./pages/Contact";
import EventsDetails from "./pages/Events/EventsDetails";
import Event_card from "./components/comman/EventCard";
import ModalContextProvider from "./contexts/ModalContext";
import LoginModal from "./components/comman/LoginModal";

const App = () => {
  return (
    <div className=" relative min-h-screen h-full w-full font-PlusjakartaSans">
      <ModalContextProvider>
      <Navbar />
      {/* Routes */}
      <LoginModal /> {/* Login Popup */}
    </ModalContextProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventsList" element={<EventsList />} />
        <Route path="/Venues" element={<Venues />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/EventCard" element={<Event_card />} />
        <Route path="/EventsDetails" element={<ModalContextProvider><EventsDetails /></ModalContextProvider>} />
      </Routes>
      
    </div>
  );
};

export default App;
