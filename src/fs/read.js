import path from "path";
import { readFile, access } from "fs/promises";

const read = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToRead.txt"
  );

  const checkFile = async () => {
    try {
      await access(pathToFile);
    } catch (error) {
      throw new Error("FS operation failed: " + error.message);
    }
  };

  try {
    await checkFile();
    const content = await readFile(pathToFile, "utf-8");
    console.log(content);
  } catch (error) {
    console.error(error);
  }
};

await read();
