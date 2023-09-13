/* missing number [1,3] */
const numbers = [2, 4, 5];
const newArray = [];

function missingNumbers(numbers) {
  let maxNumber = Math.max(...numbers);
  for (let i = 1; i < maxNumber; i++) {
    if (!numbers.includes(i)) {
      newArray.push(i);
    }
  }
  return newArray;
}

missingNumbers(numbers);
console.log(newArray);
