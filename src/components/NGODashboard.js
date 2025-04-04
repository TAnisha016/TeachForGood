import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NGODashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");
  const userType = localStorage.getItem("userType");
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "profile-icon.jpg");

  const ngoData = {
    volunteerPartners: 15,
    needs: ["Books", "Volunteers", "Funds"],
    description: "We are dedicated to providing education to underprivileged children.",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    localStorage.removeItem("profilePic");
    navigate("/");
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-5">
            <div className="text-center">
              <div
                className="position-relative d-inline-block mb-4"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              >
                <img
                  src={profilePic || "placeholder-ngo.png"}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="position-absolute"
                  style={{
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", opacity: 0, borderRadius: "50%" }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0)}
                >
                  <span className="text-white">Upload</span>
                </div>
              </div>

              <h2 className="mb-2">{userName}</h2>
              <p className="text-muted mb-4">{userType}</p>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Volunteer Partners</h5>
                      <p className="card-text">{ngoData.volunteerPartners}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Needs</h5>
                      <p className="card-text">{ngoData.needs.join(", ")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Description</h5>
                      <p className="card-text">{ngoData.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-danger mt-4 px-4 py-2" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;