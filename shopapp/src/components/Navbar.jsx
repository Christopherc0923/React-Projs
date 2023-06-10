import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid d-flex justify-content-end ">
      <nav className="navbar navbar-expand-lg ">
        <Link to="/" className="nav-link">
          Shop
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>
    </div>
  );
}
