import { useState } from "react";
import axios from "axios";
import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
    branch: "",
    rollNo: "",
    address: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", formData);
      alert("Registration successful!");
      navigate("/login"); // Navigate to the login page after successful registration
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <input type="text" name="collegeName" onChange={handleChange} placeholder="College Name" required />
      <input type="text" name="branch" onChange={handleChange} placeholder="Branch" required />
      <input type="text" name="rollNo" onChange={handleChange} placeholder="Roll Number" required />
      <input type="text" name="address" onChange={handleChange} placeholder="Address" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
