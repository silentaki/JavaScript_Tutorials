/*
1) We have an array of numbers called numbers.
2) We use the sort() method on the numbers array and provide a compare function as an argument.
3) The compare function takes two parameters, a and b, which are two elements from the array.
4)Inside the compare function, we subtract b from a (a - b). This will sort the elements in ascending order because it compares each element to the next one and arranges them accordingly.
5)After calling sort(), the numbers array will be sorted in ascending order, and we log the result to the console.
*/


const numbers = [4,2,3,7,5,6]

function sortArrayASC (numbers) {
    numbers.sort(function(a,b) {
        return a - b
    })

}

sortArrayASC(numbers)
console.log(numbers)

/* sort array in descending order */

function sortArrayDSC (numbers) {
    numbers.sort(function(a,b) {
        return b - a
    })
}

sortArrayDSC(numbers)
console.log(numbers)

