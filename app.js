// =================================
// TRUCKGO GLOBAL MARKETPLACE
// FRONTEND APPLICATION
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // Footer Year
    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Load Posting Form
    const loadForm = document.getElementById("load-form");

    if (loadForm) {
        loadForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const loadData = {
                pickupCity: document.getElementById("pickup").value.trim(),
                deliveryCity: document.getElementById("delivery").value.trim(),
                cargoType: document.getElementById("cargo").value.trim(),
                weightKg: Number(document.getElementById("weight").value)
            };

            if (
                !loadData.pickupCity ||
                !loadData.deliveryCity ||
                !loadData.cargoType ||
                !Number.isFinite(loadData.weightKg) ||
                loadData.weightKg <= 0
            ) {
                alert("Please enter valid load information.");
                return;
            }

            const message = document.getElementById("load-message");

            message.textContent =
                "Demo only: Load form is ready. Backend connection is not active yet.";

            loadForm.reset();
        });
    }

    // Login Form
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const message = document.getElementById("login-message");

            if (!email || !password) {
                message.textContent = "Please enter email and password.";
                return;
            }

            message.textContent =
                "Login system is not connected yet. Backend setup is coming.";

            loginForm.reset();
        });
    }

    // Smooth Navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    console.log("TruckGo application loaded successfully.");

});
