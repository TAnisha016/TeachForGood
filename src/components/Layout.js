// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"; // Assuming you have a Footer component
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 fixed-top">
        <Link className="navbar-brand text-primary fw-bold" to="/">Teach for Good</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-4"><Link className="nav-link text-dark" to="/">Home</Link></li>
            <li className="nav-item mx-4"><Link className="nav-link text-dark" to="/ngoList">NGOs</Link></li>
            <li className="nav-item mx-4"><Link className="nav-link text-dark" to="/SuccessStories">Success Stories</Link></li>
            <li className="nav-item mx-4"><Link className="nav-link text-dark" to="/ContactUs">Contact Us</Link></li>
            <li className="nav-item mx-4"><Link className="nav-link text-dark" to="/Faq">FAQs</Link></li>
          </ul>
        </div>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </nav>
      {children} {/* Render the page content here */}
      <Footer /> {/* Assuming you want footer on all pages */}
    </div>
  );
};

export default Layout;