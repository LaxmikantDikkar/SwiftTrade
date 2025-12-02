import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-bottom bg-body-tertiary">
      
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link to="/"><img src="/media/logo.svg" style={{ marginLeft: 200 }} width={150} alt="logo" /></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: 600 }}>
                <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      
    </header>
  );
}
