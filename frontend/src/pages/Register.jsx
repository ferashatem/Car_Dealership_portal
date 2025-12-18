import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    username: "", first_name: "", last_name: "", email: "", password: ""
  });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/register/", data);
    alert("Registration successful!");
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" className="form-control mb-2" onChange={handleChange}/>
        <input name="first_name" placeholder="First Name" className="form-control mb-2" onChange={handleChange}/>
        <input name="last_name" placeholder="Last Name" className="form-control mb-2" onChange={handleChange}/>
        <input name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange}/>
        <input name="password" type="password" placeholder="Password" className="form-control mb-2" onChange={handleChange}/>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
