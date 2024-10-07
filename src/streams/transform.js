import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";
import os from "node:os";

const transform = async () => {
  // Write your code here

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        `${chunk.toString().split("").reverse().join("")}${os.EOL}`
      );
    },
  });

  console.log(
    `Type the text.${os.EOL}To reverse string press Enter.${os.EOL}Once completed, press Ctrl+C to exit.${os.EOL}`
  );

  await pipeline(stdin, reverse, stdout);
};

await transform();
