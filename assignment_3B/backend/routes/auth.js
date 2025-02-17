const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const router = express.Router();

// Register Student
router.post("/register", async (req, res) => {
  const { name, email, password, collegeName, branch, rollNo, address } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const student = new Student({ name, email, password: hashedPassword, collegeName, branch, rollNo, address });
    await student.save();
    res.json({ message: "Registration successful!" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists!" });
  }
});

// Login Student
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) return res.status(400).json({ error: "User not found!" });

  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials!" });

  const token = jwt.sign({ id: student._id }, "secret", { expiresIn: "1h" });

  res.json({ token, student });
});

module.exports = router;
