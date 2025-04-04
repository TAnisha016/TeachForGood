import React, { useState } from "react";
import useScrollToTop from "./useScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { ngos } from "../data";
import { useNavigate } from "react-router-dom";
const VolunteerMatching = () => {
  useScrollToTop();
  const [topic, setTopic] = useState("");
  const [timing, setTiming] = useState("");
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [timeRange, setTimeRange] = useState(""); // Change time to timeRange
  const [matchingNgos, setMatchingNgos] = useState([]);

  // Get distinct values for dropdowns
  const distinctTopics = [...new Set(ngos.flatMap((ngo) => ngo.topics))];
  const distinctLocations = [...new Set(ngos.map((ngo) => ngo.location))];
  const distinctTimings = [...new Set(ngos.flatMap((ngo) => ngo.availability))];

  // Generate time range options from 1 PM to 5 PM
  const timeRangeOptions = [];
  for (let hour = 11; hour < 17; hour++) {
    const start = `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`;
    const end = `${(hour + 1) % 12 || 12}:00 ${hour + 1 < 12 ? "AM" : "PM"}`;
    timeRangeOptions.push(`${start} - ${end}`);
  }

  function matchNgos(volunteerPreferences, ngos) {
    const matchingNgos = ngos.filter((ngo) => {
      const topicMatch = ngo.topics.some((t) =>
        t.toLowerCase().includes(volunteerPreferences.topic.toLowerCase())
      );
      const timingMatch = ngo.availability.some((day) =>
        day.toLowerCase() === volunteerPreferences.timing.toLowerCase()
      );
      const locationMatch = ngo.location
        .toLowerCase()
        .includes(volunteerPreferences.location.toLowerCase());

      // Add time range matching logic here if needed.
      // const timeRangeMatch = !volunteerPreferences.timeRange || ngo.availabilityTimeRanges.some(range => range === volunteerPreferences.timeRange);

      return topicMatch && timingMatch && locationMatch; // add && timeRangeMatch if you add the logic above
    });

    return matchingNgos;
  }

  const handleSearch = () => {
    const filteredNgos = matchNgos(
      { topic, timing, location, timeRange }, // Include timeRange in search criteria
      ngos
    );
    setMatchingNgos(filteredNgos);
  };

  const handleConnect = (ngoId) => {
    alert(`Connecting with NGO ID: ${ngoId}`);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    localStorage.removeItem("profilePic");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2>Start Volunteering</h2>
            <div className="mb-3">
              <label className="form-label">Topic:</label>
              <select
                className="form-control"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Select Topic</option>
                {distinctTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Day:</label>
              <select
                className="form-control"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
              >
                <option value="">Select Day</option>
                {distinctTimings.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Date:</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location:</label>
              <select
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {distinctLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Time Range:</label>
              <select
                className="form-control"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="">Select Time Range</option>
                {timeRangeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary mb-3" onClick={handleSearch}>
              Search NGOs
            </button>

            {matchingNgos.length > 0 ? (
              <div>
                <h3>Matching NGOs</h3>
                <ul>
                  {matchingNgos.map((ngo) => (
                    <li key={ngo.id}>
                      {ngo.name} ({ngo.topics.join(", ")}, {ngo.location})
                      <button
                        className="btn btn-success ms-2 m-2"
                        onClick={() => handleConnect(ngo.id)}
                      >
                        Connect
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No matching NGOs found.</p>
            )}
            <button
  className="btn btn-danger mt-4 logout-button-centered"
  onClick={handleLogout}
>
  Logout
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerMatching;