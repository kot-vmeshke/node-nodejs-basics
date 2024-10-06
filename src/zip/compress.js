import { pipeline } from "node:stream/promises";
import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );

  const pathToArchive = path.resolve(import.meta.dirname, "./files/archive.gz");

  const gzip = createGzip();

  await pipeline(
    createReadStream(pathToFile),
    gzip,
    createWriteStream(pathToArchive)
  );
};

await compress();
