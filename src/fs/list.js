import path from "path";
import { readdir, access } from "fs/promises";

const list = async () => {
  // Write your code here
  const pathToDir = path.resolve(import.meta.dirname, "./files");

  const checkFilesDir = async () => {
    try {
      await access(pathToDir);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("FS operation failed: " + error.message);
      } else {
        console.error(error);
      }
    }
  };

  try {
    await checkFilesDir();
    const dir = await readdir(pathToDir, { recursive: true });
    console.log(dir);
  } catch (error) {
    console.error(error);
  }
};

await list();
