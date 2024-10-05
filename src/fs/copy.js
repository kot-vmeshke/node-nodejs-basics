import { readdir, mkdir, copyFile, access } from "fs/promises";
import path from "path";

const copy = async () => {
  // Write your code here
  const pathToDir = path.resolve(import.meta.dirname, "./files");
  const copyDirPath = path.resolve(import.meta.dirname, "./files_copy");

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

  const createCopyDir = async () => {    
    try {
      await mkdir(copyDirPath);
    } catch (error) {
      if (error.code === "EEXIST") {
        throw new Error("FS operation failed: " + error.message);
      } else {
        console.error(error);
      }
    }
  };

  try {
    await checkFilesDir();
    await createCopyDir();

    const dir = await readdir(pathToDir, { recursive: true });

    dir.forEach(async (file) => {
      const pathToFile = path.resolve(pathToDir, file);
      const copyPathToFile = path.resolve(copyDirPath, file);
      await copyFile(pathToFile, copyPathToFile);
    });
  } catch (error) {
    console.error(error);
  }
};

await copy();
