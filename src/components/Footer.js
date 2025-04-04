import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Teach for Good</h5>
            <p>
              Teach for Good is a volunteering
              platform that connects NGOs and volunteers and makes the volunteering opportunites more 
              accessible.
            </p>
            {/* Social Icons */}
            <div className="d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Middle Section - Helpful Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Helpful Links</h5>
            <hr className="text-primary w-50" />
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/signup/ngo" className="text-light text-decoration-none">NGO Registration</Link></li>
              <li><Link to="/signup/volunteer" className="text-light text-decoration-none">Volunteer Registration</Link></li>
              <li><Link to="/SuccessStories" className="text-light text-decoration-none">Success Stories</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Reach Us</h5>
            <hr className="text-primary w-50" />
            
            <p><i className="fas fa-envelope"></i> support@teachforgood.org</p>
           
            
            <p><i className="fas fa-clock"></i> Mon - Fri: 9:00am - 5:00pm</p>
          </div>
        </div>

        <hr className="text-light" />
        <p className="text-center m-0">© {new Date().getFullYear()} Teach for Good, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


