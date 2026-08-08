/* =========================================================
   07-terminal.js
   Interactive DevOps Terminal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const terminal = document.getElementById("dev-terminal");

    if (!terminal) return;

    const output = terminal.querySelector(".terminal-output");
    const input = terminal.querySelector(".terminal-input");

    const commands = {

        help: `
Available commands:

  whoami      → Display profile
  skills      → Show technical skills
  projects    → Show project count
  status      → Show system status
  clear       → Clear terminal
  contact     → Show contact information
`,

        whoami: `
Faizan Sayyad

Cloud & DevOps Engineer
Cyber Security Foundation
DevSecOps Enthusiast
`,

        skills: `
Linux        ✓
AWS          ✓
Docker       ✓
Kubernetes   ✓
Terraform    ✓
Jenkins      ✓
Git/GitHub   ✓
Python       ✓
Cyber Security ✓
`,

        projects: `
PROJECT DATABASE

DevOps Projects       : 08+
Cyber Security Labs   : 05+
Automation Projects   : 05+
Total Projects        : 12+
`,

        status: `
SYSTEM STATUS

[✓] Linux              ONLINE
[✓] AWS                 CONNECTED
[✓] Docker              RUNNING
[✓] Kubernetes          READY
[✓] CI/CD Pipeline      ACTIVE
[✓] Security Layer      ENABLED

System Status: OPERATIONAL
`,

        contact: `
CONTACT

Email:
faizansayyad1076@gmail.com

GitHub:
github.com/faizansayyad7
`,

        clear: ""
    };


    function printCommand(command) {

        const line = document.createElement("div");

        line.className = "terminal-line";

        line.innerHTML = `
            <span class="terminal-prompt">faizan@devsecops:~$</span>
            <span>${command}</span>
        `;

        output.appendChild(line);
    }


    function printOutput(text) {

        if (!text) return;

        const result = document.createElement("pre");

        result.className = "terminal-result";

        result.textContent = text;

        output.appendChild(result);
    }


    function executeCommand(command) {

        const cleanCommand = command.trim().toLowerCase();

        if (!cleanCommand) return;

        printCommand(cleanCommand);

        if (cleanCommand === "clear") {
            output.innerHTML = "";
            return;
        }

        if (commands[cleanCommand]) {
            printOutput(commands[cleanCommand]);
        } else {

            printOutput(
                `Command not found: ${cleanCommand}

Type "help" to see available commands.`
            );
        }

        terminal.scrollTop = terminal.scrollHeight;
    }


    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            executeCommand(input.value);

            input.value = "";

        }

    });

});