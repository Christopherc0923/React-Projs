import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const homepage = process.env.PUBLIC_URL; // Get the homepage URL

  return (
    <div className="container-fluid d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="nav-link text-decoration-none text-dark">
          Home
        </Link>
        <Link to="/shop" className="nav-link text-decoration-none text-dark">
          Shop
        </Link>
        <Link to="/cart" className="nav-link text-decoration-none text-dark">
          Cart
        </Link>
      </nav>
    </div>
  );
}
