import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Temp" element={<Temp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

/*

    

*/
