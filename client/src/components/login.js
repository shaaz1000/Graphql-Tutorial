import React, { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData, "form");

  const handleSubmit = (e) => {
    console.log(e, "handle submit");
  };
  return (
    <div className="container mycontainer">
      <h2 className="text-align=center">Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn #673ab7 deep-purple btn-center" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
