// =================================
// TRUCKGO PAYMENT SYSTEM
// =================================

const express = require("express");
const Stripe = require("stripe");

const { prisma } = require("../config/database");

const {
    authenticate,
    authorize
} = require("../middleware/auth");

const router = express.Router();

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
);

// =================================
// CREATE COMMISSION CHECKOUT
// =================================

router.post(
    "/:loadId/checkout",
    authenticate,
    authorize("DRIVER"),
    async (req, res) => {

        try {
            if (!process.env.STRIPE_SECRET_KEY) {
                return res.status(503).json({
                    success: false,
                    message: "Payment service is not configured."
                });
            }

            const load = await prisma.load.findUnique({
                where: {
                    id: req.params.loadId
                }
            });

            if (!load) {
                return res.status(404).json({
                    success: false,
                    message: "Load not found."
                });
            }

            if (load.driverId !== req.user.id) {
                return res.status(403).json({
                    success: false,
                    message: "You are not assigned to this load."
                });
            }

            if (load.status !== "COMPLETED") {
                return res.status(400).json({
                    success: false,
                    message: "Commission is payable after load completion."
                });
            }

            if (!load.price || load.price <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "Load price is not available yet."
                });
            }

            const currency = load.currency.toLowerCase();

            if (!["eur", "usd", "gbp"].includes(currency)) {
                return res.status(400).json({
                    success: false,
                    message: "This currency is not enabled for Stripe payments."
                });
            }

            const commissionPercent = Number(
                process.env.PLATFORM_COMMISSION_PERCENT || 3
            );

            if (
                !Number.isFinite(commissionPercent) ||
                commissionPercent <= 0 ||
                commissionPercent > 100
            ) {
                return res.status(500).json({
                    success: false,
                    message: "Invalid commission configuration."
                });
            }

            const commission = Number(
                (load.price * commissionPercent / 100).toFixed(2)
            );

            const amountInCents = Math.round(
                commission * 100
            );

            if (amountInCents < 50) {
                return res.status(400).json({
                    success: false,
                    message: "Commission is below the minimum payment amount."
                });
            }

            const existing = await prisma.platformEarning.findUnique({
                where: {
                    loadId: load.id
                }
            });

            if (
                existing &&
                existing.paymentStatus === "PAID"
            ) {
                return res.status(409).json({
                    success: false,
                    message: "Commission has already been paid."
                });
            }

            if (
                existing &&
                existing.paymentStatus === "PENDING"
            ) {
                return res.status(409).json({
                    success: false,
                    message: "A commission payment is already pending."
                });
            }

            const earning = await prisma.platformEarning.upsert({
                where: {
                    loadId: load.id
                },
                create: {
                    loadId: load.id,
                    commission,
                    currency: load.currency,
                    paymentStatus: "PENDING"
                },
                update: {
                    commission,
                    currency: load.currency,
                    paymentStatus: "PENDING",
                    stripePaymentId: null
                }
            });

            const session = await stripe.checkout.sessions.create({
                mode: "payment",

                customer_email: req.user.email,

                line_items: [
                    {
                        price_data: {
                            currency,

                            product_data: {
                                name: "TruckGo Platform Commission",
                                description: `Commission for load ${load.id}`
                            },

                            unit_amount: amountInCents
                        },

                        quantity: 1
                    }
                ],

                metadata: {
                    loadId: load.id,
                    earningId: earning.id,
                    driverId: req.user.id
                },

                success_url:
                    `${process.env.FRONTEND_URL}/payment-success.html`,

                cancel_url:
                    `${process.env.FRONTEND_URL}/payment-cancel.html`
            });

            await prisma.platformEarning.update({
                where: {
                    id: earning.id
                },
                data: {
                    stripePaymentId: session.id
                }
            });

            return res.json({
                success: true,
                message: "Payment checkout created.",
                checkoutUrl: session.url,
                commission,
                currency: load.currency
            });

        } catch (error) {
            console.error(
                "TruckGo payment error:",
                error.message
            );

            return res.status(500).json({
                success: false,
                message: "Unable to create payment checkout."
            });
        }
    }
);

module.exports = router;
