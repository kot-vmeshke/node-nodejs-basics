import { isMainThread, Worker } from "worker_threads";
import path from "path";
import os from "os";

const NUM = 10;

const performCalculations = async () => {
  // Write your code here
  const pathToWorker = path.resolve(import.meta.dirname, "./worker.js");
  const threadsAvailable = os.cpus().length;

  const result = [];

  for (let i = 0; i < threadsAvailable; i++) {
    const worker = new Worker(pathToWorker, { workerData: { num: NUM + i } });

    worker.on("message", (data) => {
      result.push({ status: "resolved", data });
    });
    worker.on("error", () => {
      result.push({ status: "error", data: null });
    });
  }

  const interval = setInterval(() => {
    if (result.length === threadsAvailable) {
      console.log(result);
      clearInterval(interval);
    }
  }, 4);
};

await performCalculations();
