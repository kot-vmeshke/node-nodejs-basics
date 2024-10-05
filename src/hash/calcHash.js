const { createHash } = await import("node:crypto");
import path from "path";
import { createReadStream } from "fs";

const calculateHash = async () => {
  // Write your code here
  const pathToFile = path.resolve(
    import.meta.dirname,
    "./files/fileToCalculateHashFor.txt"
  );

  const hash = createHash("sha256");

  const rs = createReadStream(pathToFile);
  rs.on("error", (err) => console.error("Failed to read file", err));

  rs.pipe(hash);

  hash.on("finish", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};

await calculateHash();
