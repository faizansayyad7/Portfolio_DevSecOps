/* ==========================================
   CONTACT FORM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Transmission Sent! I will get back to you shortly.");

            contactForm.reset();

        });
    }

});