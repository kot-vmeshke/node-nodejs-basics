import { pipeline } from "node:stream/promises";
import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );

  const pathToArchive = path.resolve(import.meta.dirname, "./files/archive.gz");

  const unzip = createUnzip();

  try {
    await pipeline(
      createReadStream(pathToArchive),
      unzip,
      createWriteStream(pathToFile)
    );
  } catch (error) {
    console.error("Decompress failed: ", error);
  }
};

await decompress();
