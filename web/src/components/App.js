import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import { Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Music from "./pages/Music";

export default function App() {
  let current = "home";

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Music" element={<Music />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

/*

    

*/
