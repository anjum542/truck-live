require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.set("trust proxy", 1);

app.use(helmet());

app.use(cors({
    origin: process.env.FRONTEND_URL || "*"
}));

app.use(express.json({
    limit: "1mb"
}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false
}));

// SERVER HOME
app.get("/", (req, res) => {
    res.json({
        success: true,
        name: "TruckGo",
        message: "Welcome to TruckGo Global Marketplace",
        status: "Online"
    });
});

// HEALTH CHECK
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        service: "TruckGo API",
        status: "Running"
    });
});

// API INFORMATION
app.get("/api", (req, res) => {
    res.json({
        name: "TruckGo",
        version: "1.0.0",
        services: [
            "User Accounts",
            "Truck Marketplace",
            "Load Management",
            "Smart Load Matching",
            "Return Load Matching",
            "Company Management",
            "Payment System"
        ]
    });
});

// AUTH ROUTES
app.use("/api/auth", require("./routes/auth"));

// LOAD ROUTES
app.use("/api/loads", require("./routes/loads"));

// PAYMENT ROUTES
app.use("/api/payments", require("./routes/payments"));

// 404 ERROR
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.error("TruckGo Error:", err.message);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`TruckGo server running on port ${PORT}`);
});
