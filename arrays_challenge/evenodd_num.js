/*
1) We define a function called findEvenOdd that takes an array arr as its parameter.
2) We initialize two empty arrays, evenNumbers and oddNumbers, to store the even and odd numbers, respectively.
3) We iterate through the input array using a for loop.
4) Inside the loop, we use the modulo operator (%) to check if the current element (arr[i]) is even or odd. If the remainder is 0 when dividing by 2, it's even; otherwise, it's odd.
5) Depending on whether the current element is even or odd, we push it into the appropriate array (evenNumbers or oddNumbers).
6) Finally, we return an object with two properties, even and odd, which contain the arrays of even and odd numbers, respectively.
 */

const numbers = [2, 3, 4, 6, 7, 10];
const evenNumbers = [];
const oddNumbers = [];

function findEvenOdd(numbers) {
  for (let i in numbers) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else if (numbers[i] % 2 != 0) {
        oddNumbers.push(numbers[i]);
    }
  }
  return { evenNumbers, oddNumbers };
}

let result = findEvenOdd(numbers);

console.log(result.evenNumbers);
console.log(result.oddNumbers);


/* using filters function */

  const evenNum = numbers.filter(function(number) {
    return number % 2 === 0
  })
console.log(evenNum)
