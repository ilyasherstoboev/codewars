function factorialLog(n) {
  if (n === 0 || n === 1) return 1;
  let logSum = 0;
  for (let i = 2; i <= n; i++) {
    logSum += Math.log(i);
  }
  return Math.exp(logSum); // e^logSum = факториал
}

console.log(factorialLog(200)); // Дает большое число без Infinity
