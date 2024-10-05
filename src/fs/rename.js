import path from "path";
import { rename as renameFile, access } from "fs/promises";

const rename = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/wrongFilename.txt"
  );

  const newFilePath = path.resolve(
    import.meta.dirname,
    "./files/properFilename.md"
  );

  const checkFile = async () => {
    try {
      await access(pathToFile);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("FS operation failed: " + error.message);
      } else {
        console.error(error);
      }
    }
  };

  const checkNewFile = async () => {
    try {
      await access(newFilePath);
      throw new Error(
        "FS operation failed: file properFilename.md already exist"
      );
    } catch (error) {
      if (error.code === 'ENOENT') return;
      console.error(error);
    }
  };

  try {
    await checkNewFile();
    await checkFile();

    await renameFile(pathToFile, newFilePath);
  } catch (error) {
    console.error(error);
  }
};

await rename();
