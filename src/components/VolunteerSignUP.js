import React from "react";
import useScrollToTop from "./useScrollToTop";
const VolunteerSignUp = () => {
  useScrollToTop();
  return (
    <div className="container text-center mt-5" style={{ paddingTop: '20px' }}>
      <h2>Volunteer Registration</h2>
      <p>Fill out the form below to become a volunteer.</p>
      <form>
        <input type="text" className="form-control mb-3" placeholder="Full Name" required />
        
        <input type="email" className="form-control mb-3" placeholder="Email Address" required />
        
        <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
        
        <input type="text" className="form-control mb-3" placeholder="City/Location" required />
        
        <select className="form-control mb-3" required>
          <option value="">Area of Expertise/Skills</option>
          <option value="Teaching">Teaching</option>
          <option value="Healthcare">Healthcare</option>
          <option value="IT">IT</option>
          <option value="Mentorship">Mentorship</option>
          <option value="Others">Others</option>
        </select>
        
        <input type="text" className="form-control mb-3" placeholder="Availability (Days and Time)" required />
        
        <select className="form-control mb-3" required>
          <option value="">Preferred Age Group</option>
          <option value="Children">Children</option>
          <option value="Teens">Teens</option>
        </select>
        
        <input type="text" className="form-control mb-3" placeholder="Languages Spoken" required />
        
        <textarea className="form-control mb-3" placeholder="Brief Bio/About You (Optional)" rows="3"></textarea>
   
        <textarea className="form-control mb-3" placeholder="Why do you want to volunteer?" rows="3" required></textarea>

        {/* Create Password Field */}
        <input type="password" className="form-control mb-3" placeholder="Create Password" required />
        
        <div className="d-flex justify-content-start mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input me-2" required />
            <label className="form-check-label text-start">
              The information provided by me is true to the best of my knowledge.
            </label>
          </div>
        </div>

        <button className="btn btn-primary m-3" type="submit">
          Join as Volunteer
        </button>
      </form>
    </div>
  );
};

export default VolunteerSignUp;


