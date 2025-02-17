const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/studentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on port 5000"));
