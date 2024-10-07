import { access, unlink } from "fs/promises";
import path from "path";

const remove = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToRemove.txt"
  );

  const checkFile = async() => {
    try {
      await access(pathToFile);
    } catch (error) {
      throw new Error("FS operation failed: " + error.message);
    }
  }

  try {
    await checkFile();
    await unlink(pathToFile);
  } catch(error) {
    console.error(error);
  }
};

await remove();
