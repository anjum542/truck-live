// =================================
// TRUCKGO DATABASE CONNECTION
// =================================

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development"
        ? ["warn", "error"]
        : ["error"]
});

// Test database connection
async function connectDatabase() {
    try {
        await prisma.$connect();

        console.log("TruckGo Database Connected Successfully");

        return true;

    } catch (error) {
        console.error(
            "TruckGo Database Connection Failed:",
            error.message
        );

        throw error;
    }
}

// Disconnect database
async function disconnectDatabase() {
    await prisma.$disconnect();

    console.log("TruckGo Database Disconnected");
}

module.exports = {
    prisma,
    connectDatabase,
    disconnectDatabase
};
