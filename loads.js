// =================================
// TRUCKGO LOAD MANAGEMENT
// =================================

const express = require("express");
const { z } = require("zod");

const { prisma } = require("../config/database");
const {
    authenticate,
    authorize
} = require("../middleware/auth");

const router = express.Router();

// =================================
// VALIDATION
// =================================

const createLoadSchema = z.object({
    pickupCountry: z.string().trim().min(2).max(100),
    pickupCity: z.string().trim().min(2).max(100),

    deliveryCountry: z.string().trim().min(2).max(100),
    deliveryCity: z.string().trim().min(2).max(100),

    cargoType: z.string().trim().min(2).max(100),

    weightKg: z.number().positive().max(1000000),

    currency: z.enum(["EUR", "USD", "GBP", "PKR"]).default("EUR"),

    pickupDate: z.string().datetime().optional()
});

// =================================
// GET AVAILABLE LOADS
// =================================

router.get("/", authenticate, async (req, res) => {
    try {
        const loads = await prisma.load.findMany({
            where: {
                status: "OPEN"
            },

            orderBy: {
                createdAt: "desc"
            },

            take: 100,

            select: {
                id: true,
                pickupCountry: true,
                pickupCity: true,
                deliveryCountry: true,
                deliveryCity: true,
                cargoType: true,
                weightKg: true,
                currency: true,
                status: true,
                pickupDate: true,
                createdAt: true
            }
        });

        return res.json({
            success: true,
            count: loads.length,
            loads
        });

    } catch (error) {
        console.error("Load search error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to find loads."
        });
    }
});

// =================================
// POST A NEW LOAD
// =================================

router.post(
    "/",
    authenticate,
    authorize("SHIPPER"),
    async (req, res) => {
        try {
            const validation = createLoadSchema.safeParse(req.body);

            if (!validation.success) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid load information.",
                    errors: validation.error.issues
                });
            }

            const data = validation.data;

            const load = await prisma.load.create({
                data: {
                    shipperId: req.user.id,

                    pickupCountry: data.pickupCountry,
                    pickupCity: data.pickupCity,

                    deliveryCountry: data.deliveryCountry,
                    deliveryCity: data.deliveryCity,

                    cargoType: data.cargoType,
                    weightKg: data.weightKg,

                    currency: data.currency,

                    pickupDate: data.pickupDate
                        ? new Date(data.pickupDate)
                        : null
                }
            });

            return res.status(201).json({
                success: true,
                message: "Load posted successfully.",
                load
            });

        } catch (error) {
            console.error("Load posting error:", error.message);

            return res.status(500).json({
                success: false,
                message: "Unable to post load."
            });
        }
    }
);

// =================================
// ACCEPT LOAD - DRIVER ONLY
// =================================

router.post(
    "/:id/accept",
    authenticate,
    authorize("DRIVER"),
    async (req, res) => {
        try {
            const loadId = req.params.id;

            // Only one driver can accept an open load.
            const result = await prisma.load.updateMany({
                where: {
                    id: loadId,
                    status: "OPEN",
                    driverId: null
                },

                data: {
                    driverId: req.user.id,
                    status: "ACCEPTED"
                }
            });

            if (result.count === 0) {
                return res.status(409).json({
                    success: false,
                    message: "This load is no longer available."
                });
            }

            const load = await prisma.load.findUnique({
                where: {
                    id: loadId
                }
            });

            return res.json({
                success: true,
                message: "Load accepted successfully.",
                load
            });

        } catch (error) {
            console.error("Load acceptance error:", error.message);

            return res.status(500).json({
                success: false,
                message: "Unable to accept load."
            });
        }
    }
);

// =================================
// MY POSTED LOADS
// =================================

router.get(
    "/my-posted",
    authenticate,
    authorize("SHIPPER"),
    async (req, res) => {
        try {
            const loads = await prisma.load.findMany({
                where: {
                    shipperId: req.user.id
                },
                orderBy: {
                    createdAt: "desc"
                }
            });

            return res.json({
                success: true,
                loads
            });

        } catch (error) {
            console.error(error.message);

            return res.status(500).json({
                success: false,
                message: "Unable to load your posted loads."
            });
        }
    }
);

module.exports = router;
