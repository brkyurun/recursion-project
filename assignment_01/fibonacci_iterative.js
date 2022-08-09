function fibonacci(n) {
  let fibonacciArray = [0, 1];

  if (n <= 1) return fibonacciArray.at(n);

  while (fibonacciArray.length <= n) {
    const firstNumber = fibonacciArray.at(-1);
    const secondNumber = fibonacciArray.at(-2);
    fibonacciArray.push(firstNumber + secondNumber);
  }

  return fibonacciArray;
}
