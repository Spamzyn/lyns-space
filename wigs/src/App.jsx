import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WigTypes from './pages/WigTypes';
import WigStyles from "./pages/WigStyles";
import CareGuide from "./pages/CareGuide";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { StoreProvider } from "./context/contextProvider";
import WigDetail from "./pages/WigDetail";

const App = () => {
  return (
    <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wigtypes" element={<WigTypes />} />
          <Route path="/styles" element={<WigStyles />} />
          <Route path="/care-guide" element={<CareGuide />} />
          <Route path="/wigtypes/:wigName" element={<WigDetail />} />
        </Routes>
      </StoreProvider>
      <Footer />
    </div>
  );
};

export default App;
