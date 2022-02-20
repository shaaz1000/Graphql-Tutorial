import React from "react";

const Profile = () => {
  return (
    <div className="container mycontainer">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid red", marginTop: "10px" }}
          src="https://robohash.org/YOUR-TEXT.png?size=200x200"
          alt="profile pic"
        />
        <h3>Shaaz Khan</h3>
        <h5>Email : ShaazKhan153@gmail.com</h5>
      </div>
      <h2>Your Quotes</h2>
      <blockquote>
        <h6>This is a sample profile</h6>
        <p className="right-align">~Shaaz Khan</p>
      </blockquote>
    </div>
  );
};

export default Profile;
