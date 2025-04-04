import React from "react";
import useScrollToTop from "./useScrollToTop";
const NgoSignUp = () => {
  useScrollToTop();
  return (
    <div className="container text-center mt-5" style={{ paddingTop: '20px' }}>
      <h2>NGO Registration</h2>
      <p>Fill out the form below to register your NGO.</p>
      <form>
        <input type="text" className="form-control mb-3" placeholder="NGO Name" required />
        
        <input type="text" className="form-control mb-3" placeholder="Contact Person Name" required />
        
        <input type="email" className="form-control mb-3" placeholder="Email Address" required />
        
        <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
        
        <input type="text" className="form-control mb-3" placeholder="NGO Location" required />
        
        <input type="url" className="form-control mb-3" placeholder="NGO Website (if any)" />
        
        <select className="form-control mb-3" required>
          <option value="">Areas of Work/Focus</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
          <option value="Community Development">Community Development</option>
          <option value="Others">Others</option>
        </select>
        
        <textarea className="form-control mb-3" placeholder="Volunteer Requirements (Skills, Roles, Tasks)" rows="3" required></textarea>
        
        <input type="text" className="form-control mb-3" placeholder="Preferred Volunteer Schedule" required />
        
        <textarea className="form-control mb-3" placeholder="Brief Description of NGO" rows="3" required></textarea>
        
        <label>Upload NGO Registration Documents (for verification)</label>
        <input type="file" className="form-control mb-3" required />
        
        <div className="d-flex justify-content-start mb-3">
  <div className="form-check">
    <input type="checkbox" className="form-check-input me-2" required />
    <label className="form-check-label text-start">
      Whatever information provided by me is true to the best of my knowledge.
    </label>
  </div>
</div>
        
      <button className="btn btn-success m-3" type="submit"  >Register NGO</button>
      </form>
    </div>
  );
};

export default NgoSignUp;

