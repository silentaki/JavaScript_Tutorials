/*
1) define a function that takes numbers as an array
2) We initialize min and max to the first element of the array (numbers[0]).
3) We iterate through the array using a for loop, starting from the second element (index 1), and compare each element to the current minimum and maximum values.
4) If we find an element smaller than the current minimum, we update min with that element's value. If we find an element larger than the current maximum, we update max with that element's value.
5) Finally, we return an object with the minimum and maximum values.
 */


const numbers = [8,7,9,10,12]
let min = numbers[0]
let max = numbers[0]

 function MinMax(numbers) {
    for (let i in numbers) {
        if(numbers[i] < min) {
            min = numbers[i]
        } else if(numbers[i] > max) {
            max = numbers[i]
        }
    }
    return {min, max}
 }


 let result = MinMax(numbers)
 console.log(result.min)
 console.log(result.max)

/* other way is asking min and max in an array using Math function */

let minNum = Math.min(...numbers)
console.log(minNum)

let maxNum = Math.max(...numbers)
console.log(maxNum)


