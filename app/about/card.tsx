import React from "react";

const AboutCard = () => {
  return (
    <div className="card-aboutus">
      <div className="card-header-aboutus"></div>
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        className="profile-image"
      />
      <div className="card-body-aboutus">
        <h2>John Doe</h2>
        <p>Software Engineer at TechCorp</p>
        <button className="connect-btn">Connect</button>
      </div>
    </div>
  );
};

export default AboutCard;
