import React from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Music from "./pages/Music";
import IBM from "./pages/IBM";
import Stock from "./pages/Stock";
import StockEarnings from "./pages/StockEarnings";
import Weather from "./pages/Weather";
import Sentiment from "./pages/Sentiment";
import ExpenseForm from "./pages/Expense";
import Leetcode from "./pages/Leetcode";

export default function App() {
  let current = "home";

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Music" element={<Music />} />
        <Route path="IBM" element={<IBM />} />
        <Route path="Stock" element={<Stock />} />
        <Route path="StockEarnings" element={<StockEarnings />} />
        <Route path="Weather" element={<Weather />} />
        <Route path="Sentiment" element={<Sentiment />} />
        <Route path="Expense" element={<ExpenseForm />} />
        <Route path="Leetcode" element={<Leetcode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
