import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from 'react'; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("student", JSON.stringify(res.data.student));
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h2 className="text-center text-dark mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center text-muted mt-3">
          Don't have an account?{' '}
          <button onClick={() => navigate("/register")} className="btn btn-link p-0">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
