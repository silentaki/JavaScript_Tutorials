/*
1) We define a function called sumLowNumbers that takes an array arr and a threshold value as its parameters.
2) We initialize a variable sum to 0 to keep track of the sum of the "low" numbers.
3)We use a for loop to iterate through each element of the input array arr.
4)Inside the loop, we check if the current element (arr[i]) is less than the specified threshold. If it is, we add it to the sum.
5)After iterating through all elements, we return the sum, which represents the sum of the "low" numbers in the array. 
*/
const numbers = [1,2,3,5,7]

function sumLowNumbers(numbers) {
    let min = 0
    for(let i in numbers) {
        min += (numbers[i])
    }
      min = min - Math.max(...numbers)
      return min
}

    let result = sumLowNumbers(numbers);
    console.log(result)