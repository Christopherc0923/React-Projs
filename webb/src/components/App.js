import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";

export default function App() {
  let current = "home";

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
