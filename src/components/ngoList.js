import React, { useState } from "react";
import useScrollToTop from "./useScrollToTop";
const NGOList = () => {
  useScrollToTop();
  const [ngos] = useState([
    // Mumbai
    { id: 1, name: "Education for All", location: "Mumbai", description: "Providing free education to underprivileged children.", volunteersNeeded: 10 },
    { id: 2, name: "STEM for Kids", location: "Mumbai", description: "Introducing STEM subjects to young minds through workshops.", volunteersNeeded: 12 },
    { id: 3, name: "Future Coders", location: "Mumbai", description: "Teaching coding and robotics to school children.", volunteersNeeded: 8 },

    // Delhi
    { id: 4, name: "Teach & Empower", location: "Delhi", description: "Empowering youth with quality education and mentorship.", volunteersNeeded: 15 },
    { id: 5, name: "Digital Literacy Initiative", location: "Delhi", description: "Providing digital education to students from low-income backgrounds.", volunteersNeeded: 10 },
    { id: 6, name: "Books for Change", location: "Delhi", description: "Setting up libraries in schools with limited resources.", volunteersNeeded: 7 },

    // Bangalore
    { id: 7, name: "Bright Futures", location: "Bangalore", description: "Offering scholarships and career guidance for students.", volunteersNeeded: 9 },
    { id: 8, name: "NextGen Coders", location: "Bangalore", description: "Teaching Python and web development to teenagers.", volunteersNeeded: 14 },
    { id: 9, name: "Rural Schooling Initiative", location: "Bangalore", description: "Providing volunteer teachers to remote schools.", volunteersNeeded: 11 },

    // Pune
    { id: 10, name: "Rural Education Mission", location: "Pune", description: "Bringing quality education to rural and remote areas.", volunteersNeeded: 18 },
    { id: 11, name: "Tech for Teens", location: "Pune", description: "Helping teenagers learn essential tech skills.", volunteersNeeded: 12 },
    { id: 12, name: "Girls' Education Foundation", location: "Pune", description: "Ensuring education access for underprivileged girls.", volunteersNeeded: 10 },

    // Kolkata
    { id: 13, name: "Digital Learning Hub", location: "Kolkata", description: "Teaching computer literacy to students.", volunteersNeeded: 16 },
    { id: 14, name: "Future Scholars", location: "Kolkata", description: "Providing academic mentorship to bright students.", volunteersNeeded: 8 },
    { id: 15, name: "School Readiness Program", location: "Kolkata", description: "Helping young kids transition into formal schooling.", volunteersNeeded: 10 },

    // Chennai
    { id: 16, name: "Street Children Education", location: "Chennai", description: "Educating and rehabilitating street children.", volunteersNeeded: 20 },
    { id: 17, name: "Chennai Coding Club", location: "Chennai", description: "Teaching coding basics to middle school students.", volunteersNeeded: 9 },
    { id: 18, name: "Science Explorers", location: "Chennai", description: "Hands-on science experiments for young students.", volunteersNeeded: 12 },

    // Hyderabad
    { id: 19, name: "Girls' Literacy Program", location: "Hyderabad", description: "Providing educational support for girls in slum areas.", volunteersNeeded: 14 },
    { id: 20, name: "Youth Mentorship Hyderabad", location: "Hyderabad", description: "Pairing students with career mentors.", volunteersNeeded: 11 },
    { id: 21, name: "Reading Circle", location: "Hyderabad", description: "Encouraging children to read through weekly sessions.", volunteersNeeded: 8 },

    // Ahmedabad
    { id: 22, name: "Ahmedabad E-Learning", location: "Ahmedabad", description: "Providing tablets and digital content for students.", volunteersNeeded: 10 },
    { id: 23, name: "Young Innovators", location: "Ahmedabad", description: "Encouraging creativity through project-based learning.", volunteersNeeded: 7 },
    { id: 24, name: "School Reintegration Program", location: "Ahmedabad", description: "Helping dropouts return to education.", volunteersNeeded: 13 },

    // Jaipur
    { id: 25, name: "Jaipur Orphanage Support", location: "Jaipur", description: "Providing educational opportunities to orphaned children.", volunteersNeeded: 15 },
    { id: 26, name: "Math for All", location: "Jaipur", description: "Helping students strengthen their math skills.", volunteersNeeded: 9 },
    { id: 27, name: "English Language Club", location: "Jaipur", description: "Helping kids improve spoken and written English.", volunteersNeeded: 10 },
  ]); 

  return (
    <div className="container mt-5" style={{ paddingTop: '30px' }}>
    <h2 className="text-center text-primary mb-4">🌍 Our Partnered NGOs</h2>
    <div className="row">
      {ngos.map((ngo) => (
        <div key={ngo.id} className="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div className="card p-4 mb-4 shadow-lg border-0 rounded">
            <h4 className="text-primary fw-bold">{ngo.name}</h4>
            <p className="mb-2"><strong>📍 Location:</strong> {ngo.location}</p>
            <p className="mb-2"><strong>🙌 Volunteers Needed:</strong> {ngo.volunteersNeeded}</p>
            <p className="text-muted bg-light p-2 rounded">
              <strong>📢 Description:</strong> {ngo.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default NGOList;
