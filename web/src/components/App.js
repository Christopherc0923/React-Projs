import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/contactform/Contact";
import Nav from "./universal/Nav";
import Home from "./pages/Home";
import Footer from "./universal/Footer";
import Music from "./pages/Music";
import IBM from "./pages/IBM";
import Stock from "./pages/stockapp/Stock";
import StockEarnings from "./pages/stockapp/StockEarnings";
import Weather from "./pages/weatherapp/Weather";
import ExpenseForm from "./pages/expenseapp/Expense";
import Leetcode from "./pages/leetcodeapp/Leetcode";
import BackToTop from "./universal/backToTop";
import WebsiteRestructure from "./pages/intelproj/websiteRestructure";
import AbortML from "./pages/intelproj/abortML";
import SimpleReactApp from "./pages/simplereactapp/simplereactapp";
import MLProj from "./pages/mlproj/mlproj";

export default function App() {
  let current = "home";

  return (
    <BrowserRouter>
      <Nav />
      <div style={{ margin: "75px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Music" element={<Music />} />
          <Route path="IBM" element={<IBM />} />
          <Route path="Stock" element={<Stock />} />
          <Route path="StockEarnings" element={<StockEarnings />} />
          <Route path="Weather" element={<Weather />} />
          <Route path="Expense" element={<ExpenseForm />} />
          <Route path="Leetcode" element={<Leetcode />} />
          <Route path="IntelModuleWeb" element={<WebsiteRestructure />} />
          <Route path="IntelAbortML" element={<AbortML />} />
          <Route path="SimpleReactApp" element={<SimpleReactApp />} />
          <Route path="MLProj" element={<MLProj />} />
        </Routes>
      </div>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}
