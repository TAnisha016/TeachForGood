import React from "react";
import { ngos } from "../data/ngoList"; 
import useScrollToTop from "./useScrollToTop";
const NGOPage = () => {
  useScrollToTop();
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Registered NGOs</h1>

      {/* Display NGOs as Cards */} 
      <div className="row">
        {ngos.map((ngo) => (
          <div key={ngo.id} className="col-md-4 mb-4">
            <div className="card shadow p-3">
              <h5>{ngo.name}</h5>
              <p><strong>Location:</strong> {ngo.location}</p>
              <p><strong>Description: </strong> {ngo.description}</p>
              <p><strong>Volunteers Needed:</strong> {ngo.volunteersNeeded}</p>
              <button className="btn btn-primary btn-sm">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOPage;
