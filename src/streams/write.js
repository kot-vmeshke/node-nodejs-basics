import { createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { stdin } from "node:process";

const write = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToWrite.txt"
  );

  console.log(
    "Enter the text. Once completed, press Ctrl+C to exit."
  );
  await pipeline(stdin, createWriteStream(pathToFile));
};

await write();
