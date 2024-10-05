const parseEnv = () => {
  // Write your code here
  const eVariables = { ...process.env };
  const result = [];

  for (let key in eVariables) {
    if (key.startsWith("RSS_")) result.push(`${key}=${eVariables[key]}`);
  }
  console.log(result.length ? result.join("; ") : "No RSS variables");
};

parseEnv();
