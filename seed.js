// =================================
// TRUCKGO DATABASE INITIAL SETUP
// =================================

require("dotenv").config();

const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

    const ownerEmail = process.env.OWNER_EMAIL;

    const ownerPassword = process.env.OWNER_INITIAL_PASSWORD;

    if (!ownerEmail || !ownerPassword) {
        throw new Error(
            "OWNER_EMAIL and OWNER_INITIAL_PASSWORD are required."
        );
    }

    if (ownerPassword.length < 16) {
        throw new Error(
            "Owner password must contain at least 16 characters."
        );
    }

    const passwordHash = await bcrypt.hash(
        ownerPassword,
        12
    );

    const owner = await prisma.user.upsert({

        where: {
            email: ownerEmail.toLowerCase()
        },

        update: {},

        create: {
            name: "TruckGo Owner",

            email: ownerEmail.toLowerCase(),

            passwordHash,

            role: "OWNER",

            verified: false
        },

        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }

    });

    console.log("TruckGo initial owner account prepared.");

    console.log({
        id: owner.id,
        email: owner.email,
        role: owner.role
    });
}

main()
    .catch((error) => {

        console.error(
            "TruckGo database setup failed:",
            error.message
        );

        process.exitCode = 1;

    })
    .finally(async () => {

        await prisma.$disconnect();

    });
