function fibonacci(n, fibonacciArray = [0, 1]) {
  if (fibonacciArray.length >= n) return fibonacciArray.slice(0, n + 1);

  const nextFibonacciNumber = fibonacciArray.at(-1) + fibonacciArray.at(-2);
  fibonacciArray.push(nextFibonacciNumber);
  return fibonacci(n, fibonacciArray);
}

console.log(fibonacci(7));

// const fibsRec = (num, sequence = [0, 1]) => {
//   if (sequence.length >= num) {
//     return sequence.slice(0, num + 1);
//   }

//   const newNumber = sequence.at(-1) + sequence.at(-2);
//   sequence.push(newNumber);
//   return fibsRec(num, sequence);
// }
