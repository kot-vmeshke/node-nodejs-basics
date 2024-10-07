import { access, writeFile } from 'node:fs/promises';
import path from 'path';

const create = async () => {
  // Write your code here
  const pathToFile = path.resolve(import.meta.dirname, './files/fresh.txt');

  try {
    await access(pathToFile);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(pathToFile, 'I am fresh and young');
    } else {
      console.error(error);
    }
  }
};

await create();
