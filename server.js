const express = require("express");
const cors = require("cors");
require("dotenv").config();

// 🔥 MUST BE INCLUDED
const db = require("./config/db");
console.log("DB file loaded");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HR System is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});