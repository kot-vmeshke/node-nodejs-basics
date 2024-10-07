import { spawn } from "node:child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  // Write your code here
  const pathToScript = path.resolve(import.meta.dirname, "./files/script.js");
  const children = spawn(process.argv[0], [pathToScript, ...args]);

  children.stdin.on("data", (data) => {
    console.log(data);
  });
  children.stdout.on("data", (data) => {
    console.log(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
