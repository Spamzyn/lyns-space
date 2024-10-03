import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WigTypes from "./pages/WigTypes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { MyProvide } from "./context/contextProvider";
import WigDetail from "./pages/WigDetail";
import CategoryWigs from "./pages/CategoryWigs";

const App = () => {
  return (
    <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <MyProvide>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wigtypes" element={<WigTypes />} />
          <Route path="/wigtypes/:wigName" element={<WigDetail />} />
          <Route path="/:category" element={<CategoryWigs />} />
        </Routes>
      </MyProvide>
      <Footer />
    </div>
  );
};

export default App;
