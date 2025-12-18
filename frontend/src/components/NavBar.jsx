import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Car Dealership Reviews</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dealers">Dealers</Link></li>
          </ul>
          <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
          <Link className="btn btn-outline-light" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
