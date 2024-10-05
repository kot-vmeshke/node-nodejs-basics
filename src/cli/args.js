const parseArgs = () => {
  // Write your code here
  const temp = [...process.argv];

  let result = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].startsWith("--")) result.push(`${temp[i]} is ${temp[i + 1] || null}`);
  }

  console.log(result.length ? result.join(", ") : 'No arguments were passed');
};

parseArgs();
