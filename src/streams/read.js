import { createReadStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { stdout } from "node:process";
import os from "node:os";

const read = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToRead.txt"
  );
  await pipeline(createReadStream(pathToFile), stdout, { end: false });
  console.log(os.EOL);
};

await read();
