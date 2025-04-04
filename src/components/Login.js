import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "./useScrollToTop";
const Login = () => {
  useScrollToTop();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !password || !userType) {
      alert("Please select user type and enter name and password!");
      return;
    }

    // Save user details and type in localStorage
    localStorage.setItem("user", name);
    localStorage.setItem("userType", userType);

    // Directly navigate to the dashboard
    if (userType === "Volunteer") {
      navigate("/volunteer-dashboard");
    } else if (userType === "NGO") {
      navigate("/ngo-dashboard");
    } else {
      navigate("/"); // Navigate to home if userType is not set
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 w-100 position-relative"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backdropFilter: "blur(15px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Login form */}
      <div
        className="position-relative p-4 rounded text-dark"
        style={{
          maxWidth: "400px",
          width: "90%",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="fw-bold mb-3 text-white">Login</h2>
        <div className="d-flex gap-3 mb-3">
          <button
            className={`btn ${
              userType === "Volunteer" ? "btn-primary" : "btn-outline-light"
            } flex-grow-1`}
            onClick={() => setUserType("Volunteer")}
          >
            Volunteer
          </button>
          <button
            className={`btn ${
              userType === "NGO" ? "btn-success" : "btn-outline-light"
            } flex-grow-1`}
            onClick={() => setUserType("NGO")}
          >
            NGO
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent text-white border-white"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ border: "1px solid white" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-white"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ border: "1px solid white" }}
            />
          </div>
          <button type="submit" className="btn btn-light w-100 fw-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;