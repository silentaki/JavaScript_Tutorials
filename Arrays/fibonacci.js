function generateFibonacciSeries(n) {
    const fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextNumber);
    }
  
    return fibonacciSeries;
  }
  
  const n = 10; // Change this value to the desired length of the series
  const fibonacciSeries = generateFibonacciSeries(n);
  
  console.log(fibonacciSeries);