import React, { useState } from "react";
const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mycontainer">
      <h2 className="text-align=center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn #673ab7 deep-purple btn-center" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
