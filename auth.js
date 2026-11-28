// =================================
// TRUCKGO AUTHENTICATION SECURITY
// =================================

const jwt = require("jsonwebtoken");
const { prisma } = require("../config/database");

// Verify user login token
async function authenticate(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Please login first."
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                verified: true
            }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Account not found."
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired login token."
        });
    }
}


// Check user permissions
function authorize(...allowedRoles) {
    return (req, res, next) => {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required."
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "You do not have permission."
            });
        }

        next();
    };
}


// Owner-only access
function ownerOnly(req, res, next) {

    if (!req.user || req.user.role !== "OWNER") {
        return res.status(403).json({
            success: false,
            message: "Owner access only."
        });
    }

    next();
}


module.exports = {
    authenticate,
    authorize,
    ownerOnly
};
