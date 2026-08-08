/* ==================================================
   File : 08-system-status.js
   Purpose : Live DevSecOps System Status
   Author : Faizan Sayyad
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const statusPanel = document.getElementById("system-status");

    if (!statusPanel) return;

    const statuses = statusPanel.querySelectorAll(".status-item");

    statuses.forEach((item, index) => {

        setTimeout(() => {
            item.classList.add("status-active");
        }, index * 350);

    });

});