import { spawn } from "child_process";
import * as fs from "fs";
import * as os from "os";

const isWindows = os.platform() === "win32";
const cmd = isWindows ? "npx.cmd" : "npx";

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let currentProcess: ReturnType<typeof spawn> | null = null;

function runEslint() {
  if (currentProcess) {
    currentProcess.kill();
    currentProcess = null;
  }

  // beginsPattern for the problem matcher
  process.stdout.write("[ESLint] Starting lint check...\n");

  currentProcess = spawn(cmd, ["eslint", "src", "--format", "eslint-formatter-compact"], {
    stdio: ["inherit", "pipe", "pipe"],
    shell: true,
    env: { ...process.env, FORCE_COLOR: "0" },
  });

  if (currentProcess.stdout) {
    currentProcess.stdout.on("data", (chunk: Buffer) => {
      process.stdout.write(chunk);
    });
  }

  if (currentProcess.stderr) {
    currentProcess.stderr.on("data", (chunk: Buffer) => {
      process.stderr.write(chunk);
    });
  }

  currentProcess.on("close", () => {
    // endsPattern for the problem matcher
    process.stdout.write("[ESLint] Watching for file changes.\n");
    currentProcess = null;
  });
}

runEslint();

fs.watch("./src", { recursive: true }, (_event, filename) => {
  if (!filename) return;
  if (!filename.endsWith(".vue") && !filename.endsWith(".ts")) return;

  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runEslint, 800);
});
