const { spawn } = require("child_process");

function run(cmdline) {
  const subprocess = spawn("/bin/bash", ["-cex", cmdline], { stdio: "inherit" });
  subprocess.on("exit", (exitCode) => {
    process.exitCode = exitCode;
  });
}

run(process.env.INPUT_MAIN);
