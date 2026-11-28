require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());

app.use(cors({
    origin: process.env.FRONTEND_URL || "*"
}));

app.use(express.json({ limit: "1mb" }));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false
}));

// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to TruckGo Global Marketplace",
        status: "Backend is running"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        service: "TruckGo API",
        status: "Online"
    });
});

// API information
app.get("/api", (req, res) => {
    res.json({
        name: "TruckGo",
        version: "1.0.0",
        services: [
            "Loads",
            "Drivers",
            "Carriers",
            "Smart Matching",
            "Payments"
        ]
    });
});

// Not found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error("TruckGo server error:", err.message);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`TruckGo server running on port ${PORT}`);
});
