import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/object/Navbar";
import Footer from "./component/object/Footer";
import Home from "./page/Home";
import Service from "./page/Service";
import About from "./page/About";
import Team from "./page/Team";
import Contact from "./page/Contact";
import LoginPage from "./page/LoginPage";
const App = () => {
  return (
    <Router>
      <div className="bg-blue-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
