const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  collegeName: String,
  branch: String,
  rollNo: String,
  address: String,
});

module.exports = mongoose.model("Student", studentSchema);
