function fibonacci(n, fibonacciArray = [0, 1]) {
  if (fibonacciArray.length >= n) return fibonacciArray.slice(0, n + 1);

  const nextFibonacciNumber = fibonacciArray.at(-1) + fibonacciArray.at(-2);
  fibonacciArray.push(nextFibonacciNumber);
  return fibonacci(n, fibonacciArray);
}
