// =================================
// TRUCKGO AUTHENTICATION ROUTES
// =================================

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const { prisma } = require("../config/database");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

// Registration validation
const registerSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    password: z.string().min(10).max(128),
    role: z.enum(["DRIVER", "SHIPPER", "CARRIER"])
});

// Login validation
const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(1)
});

// Create login token
function createToken(user) {
    return jwt.sign(
        {
            userId: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d"
        }
    );
}

// =================================
// REGISTER
// =================================

router.post("/register", async (req, res) => {
    try {
        const validation = registerSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid registration information."
            });
        }

        const data = validation.data;

        const email = data.email.toLowerCase();

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "This email is already registered."
            });
        }

        const passwordHash = await bcrypt.hash(
            data.password,
            12
        );

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email,
                passwordHash,
                role: data.role
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                verified: true,
                createdAt: true
            }
        });

        const token = createToken(user);

        return res.status(201).json({
            success: true,
            message: "TruckGo account created successfully.",
            token,
            user
        });

    } catch (error) {
        console.error("Registration error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Registration failed."
        });
    }
});

// =================================
// LOGIN
// =================================

router.post("/login", async (req, res) => {
    try {
        const validation = loginSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email and password."
            });
        }

        const email = validation.data.email.toLowerCase();

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password."
            });
        }

        const passwordCorrect = await bcrypt.compare(
            validation.data.password,
            user.passwordHash
        );

        if (!passwordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password."
            });
        }

        const token = createToken(user);

        return res.json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                verified: user.verified
            }
        });

    } catch (error) {
        console.error("Login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Login failed."
        });
    }
});

// =================================
// MY PROFILE
// =================================

router.get("/me", authenticate, async (req, res) => {
    return res.json({
        success: true,
        user: req.user
    });
});

module.exports = router;
