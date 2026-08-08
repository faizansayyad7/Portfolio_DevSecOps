/* ==================================================
   File : 06-main.js
   Purpose : Main Portfolio Interactions
   Author : Faizan Sayyad
   ================================================== */


/* ==================================================
   DOM READY
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavigation();
    initTerminal();
    initSmoothScroll();
    initSecurityMonitor();


});

/* ==================================================
   NAVIGATION
   ================================================== */

function initNavigation() {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

}


/* ==================================================
   TERMINAL
   ================================================== */

function initTerminal() {

   const terminalInput = document.querySelector(".terminal-input");

   const terminalOutput = document.querySelector(".terminal-output");

    if (!terminalInput || !terminalOutput) {
        return;
    }


    /* ----------------------------------------------
       COMMAND DATABASE
       ---------------------------------------------- */

    const commands = {

        help: `
            <div class="terminal-line">
                <span class="terminal-green">Available commands:</span>
            </div>

            <div class="terminal-command">about</div>
            <div class="terminal-command">skills</div>
            <div class="terminal-command">projects</div>
            <div class="terminal-command">experience</div>
            <div class="terminal-command">contact</div>
            <div class="terminal-command">status</div>
            <div class="terminal-command">clear</div>
        `,

        about: `
            <div class="terminal-line">
                <span class="terminal-green">ABOUT</span>
            </div>

            <div class="terminal-text">
                I'm Faizan Sayyad — a Cloud & DevOps enthusiast
                building secure and automated infrastructure.
            </div>

            <div class="terminal-text">
                Long-term focus:
                Cloud Security & DevSecOps.
            </div>
        `,

        skills: `
            <div class="terminal-line">
                <span class="terminal-green">TECH STACK</span>
            </div>

            <div class="terminal-text">
                Linux • AWS • Docker • Kubernetes
            </div>

            <div class="terminal-text">
                Terraform • Git • GitHub • CI/CD
            </div>

            <div class="terminal-text">
                Python • Bash • Cloud Security
            </div>
        `,

        projects: `
            <div class="terminal-line">
                <span class="terminal-green">PROJECTS</span>
            </div>

            <div class="terminal-text">
                → SecureVision Mini-SOC
            </div>

            <div class="terminal-text">
                → Phishing URL Detector
            </div>

            <div class="terminal-text">
                → File Integrity Monitor
            </div>

            <div class="terminal-text">
                → Secure Auth System
            </div>

            <div class="terminal-text">
                → DevOps Cloud Projects
            </div>
        `,

        experience: `
            <div class="terminal-line">
                <span class="terminal-green">EXPERIENCE</span>
            </div>

            <div class="terminal-text">
                Cloud & DevOps Intern
            </div>

            <div class="terminal-text">
                IT Roots Pvt. Ltd.
            </div>

            <div class="terminal-text">
                Focus:
                Linux, AWS, Docker, Kubernetes,
                Terraform & CI/CD.
            </div>
        `,

        contact: `
            <div class="terminal-line">
                <span class="terminal-green">CONTACT</span>
            </div>

            <div class="terminal-text">
                Email:
                faizansayyad1076@gmail.com
            </div>

            <div class="terminal-text">
                GitHub:
                github.com/faizansayyad7
            </div>
        `,

        status: `
            <div class="terminal-line">
                <span class="terminal-green">
                    SYSTEM STATUS
                </span>
            </div>

            <div class="terminal-text">
                Linux ........ ONLINE
            </div>

            <div class="terminal-text">
                AWS .......... CONNECTED
            </div>

            <div class="terminal-text">
                Docker ....... RUNNING
            </div>

            <div class="terminal-text">
                Kubernetes ... READY
            </div>

            <div class="terminal-text">
                CI/CD ......... ACTIVE
            </div>

            <div class="terminal-text">
                Security ...... ENABLED
            </div>
        `

    };


    /* ----------------------------------------------
       COMMAND EXECUTION
       ---------------------------------------------- */

    terminalInput.addEventListener("keydown", event => {

        if (event.key !== "Enter") {
            return;
        }

        const command = terminalInput.value
            .trim()
            .toLowerCase();

        if (!command) {
            return;
        }


        /* User command */

        const commandLine = document.createElement("div");

        commandLine.className = "terminal-line";

        commandLine.innerHTML = `
            <span class="terminal-green">
                faizan@devsecops:~$
            </span>

            <span>
                ${escapeHTML(command)}
            </span>
        `;

        terminalOutput.appendChild(commandLine);


        /* Clear */

        if (command === "clear") {

            terminalOutput.innerHTML = "";

            terminalInput.value = "";

            return;
        }


        /* Execute command */

        if (commands[command]) {

            const response = document.createElement("div");

            response.className = "terminal-response";

            response.innerHTML = commands[command];

            terminalOutput.appendChild(response);

        } else {

            const error = document.createElement("div");

            error.className = "terminal-error";

            error.innerHTML = `
                Command not found:
                <span>${escapeHTML(command)}</span>
                <br>

                Type
                <strong>help</strong>
                to see available commands.
            `;

            terminalOutput.appendChild(error);

        }


        /* Reset input */

        terminalInput.value = "";


        /* Scroll terminal */

        terminalOutput.scrollTop =
            terminalOutput.scrollHeight;

    });

}


/* ==================================================
   HTML ESCAPE
   ================================================== */

function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ==================================================
   SMOOTH SCROLL
   ================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetID =
                link.getAttribute("href");

            const target =
                document.querySelector(targetID);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ==================================================
   LIVE SECURITY MONITOR
   ================================================== */

function initSecurityMonitor() {

    const threatCounter =
        document.querySelector("#threat-counter");

    const scoreValue =
        document.querySelector("#security-score-value");

    const scoreBar =
        document.querySelector("#security-score-bar");

    if (!threatCounter || !scoreValue || !scoreBar) {
        return;
    }


    /* Initial values */

    let threats = 3;
    let securityScore = 96;


    /* Animate initial security score */

    let currentScore = 0;

    const scoreAnimation = setInterval(() => {

        currentScore += 2;

        if (currentScore >= securityScore) {

            currentScore = securityScore;

            clearInterval(scoreAnimation);
        }

        scoreValue.textContent = currentScore;
        scoreBar.style.width = `${currentScore}%`;

    }, 25);


    /* Initial threat count */

    threatCounter.textContent = threats;


    /* ----------------------------------------------
       LIVE UPDATE
       ---------------------------------------------- */

    setInterval(() => {

        /*
         * Small simulated security activity.
         * This is front-end simulation, not a real
         * security scanner or backend threat feed.
         */

        const activity =
            Math.random();

        if (activity > 0.72) {

            threats += 1;

            threatCounter.textContent =
                threats;

        }


        /* Keep security score between 92–99 */

        securityScore =
            Math.floor(
                92 + Math.random() * 8
            );


        scoreValue.textContent =
            securityScore;

        scoreBar.style.width =
            `${securityScore}%`;

    }, 4000);

}