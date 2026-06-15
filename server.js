const express = require("express");
const cors = require("cors");
require("dotenv").config();

// 🔥 DB CONNECTION
const db = require("./config/db");
console.log("DB file loaded");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// 🟢 BASE TEST ROUTE
// =========================
app.get("/", (req, res) => {
    res.send("HR System is running 🚀");
});

// =========================
// 🟢 TEST ROUTE - REGISTER (NO DB YET)
// =========================
app.post("/register", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    res.json({
        success: true,
        message: "Register route working (test mode)",
        data: { name, email }
    });
});

// =========================
// 🟢 TEST ROUTE - LOGIN (NO DB YET)
// =========================
app.post("/login", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    res.json({
        success: true,
        message: "Login route working (test mode)",
        token: "fake-jwt-token"
    });
});

// =========================
// 🟢 HEALTH CHECK
// =========================
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        server: "running",
        db: "connected (assumed from config)"
    });
});

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});