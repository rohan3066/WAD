import { useEffect, useState } from "react";
import React from 'react';

const Dashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const storedStudent = JSON.parse(localStorage.getItem("student"));
    if (storedStudent) setStudent(storedStudent);
  }, []);

  return student ? (
    <div className="container mt-4">
      <h2 className="text-center">Welcome, {student.name}</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Student Information</h5>
          <p className="card-text"><strong>Email:</strong> {student.email}</p>
          <p className="card-text"><strong>College:</strong> {student.collegeName}</p>
          <p className="card-text"><strong>Branch:</strong> {student.branch}</p>
          <p className="card-text"><strong>Roll No:</strong> {student.rollNo}</p>
          <p className="card-text"><strong>Address:</strong> {student.address}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-5">
      <p>Loading...</p>
    </div>
  );
};

export default Dashboard;
