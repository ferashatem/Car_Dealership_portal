import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/login/", data);
    alert("Login successful!");
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" className="form-control mb-2" onChange={handleChange}/>
        <input name="password" type="password" placeholder="Password" className="form-control mb-2" onChange={handleChange}/>
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}
