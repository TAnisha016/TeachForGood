import React, { useState } from "react";
import useScrollToTop from "./useScrollToTop";
const ContactUs = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '10px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold text-secondary mt-4">Contact Us</h2>
        <p className="text-muted">We'd love to hear from you!</p>
      </div>

      {/* Grid Layout - Left: About, Right: Feedback Form */}
      <div className="row justify-content-center">
        {/* About Section */}
        <div className="col-md-6">
          <div className="card p-4 shadow-lg border-0 rounded-4" style={{ background: "#f8f9fa" }}>
            <div className="card-body">
              <h3 className="fw-bold text-secondary">About <span className="text-primary">Teach for Good</span></h3>
              <p className="text-muted">
              Teach for Good is a platform designed to connect volunteers with NGOs dedicated to educating young children and teenagers. 
              Our mission is to provide students with meaningful learning opportunities, empowering them to grow, thrive, and pursue their dreams.
              </p>
              <p className="text-muted">
                Every child deserves access to quality education, and we aim to make 
                that possible through technology and collaboration.
              </p>

              <h3 className="fw-bold text-secondary mt-4">Meet the Creators</h3>
              <p className="text-muted">
              We are a team of two aspiring developers in our second year of college, passionate about technology and social impact. 
              As we continue to learn and grow, we are committed to using our skills to build meaningful projects that drive positive change.
              </p>
              <p className="text-muted">
               This is just the beginning, and we invite you to join us in shaping a future where 
               <strong> education reaches every child in need.</strong> Let’s make a difference together!
              </p>

            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="col-md-5">
          <div className="card p-4 shadow-lg border-0 rounded-4" style={{ background: "#fff" }}>
            <div className="card-body">
              <h4 className="text-center fw-bold text-primary mb-3">Send Us Your Feedback</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Email</label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Message</label>
                  <textarea
                    className="form-control rounded-3"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-3 fw-bold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-secondary">Get in Touch</h4>
        <p className="text-muted">We’d love to connect with you!</p>
        <p><strong>Email:</strong> <a href="mailto:support@teachforgood.org" className="text-primary">support@teachforgood.org</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
