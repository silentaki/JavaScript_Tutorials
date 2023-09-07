/*
1) We define a function called reverseStringsInArray that takes an array arr as its parameter.
2) We create an empty array called reversedArray to store the reversed strings
3) We use a for loop to iterate through each string in the input array arr.
4) For each string, we first use split('') to convert it into an array of characters, then use reverse() to reverse the array of characters, and finally use join('') to convert the reversed array of characters back into a string.
5) The reversed string is pushed into the reversedArray.
6)Once all strings have been reversed, we return the reversedArray.
*/

const arrayOfStrings = ["apple", "banana", "cherry"];

function reverseStringsInArray(arrayOfStrings) {
    const reversedArray = []
    for(let i in arrayOfStrings) {
        const reversedString = arrayOfStrings[i].split('').reverse().join('')
        reversedArray.push(reversedString)
    }
    return reversedArray
}
const result = reverseStringsInArray(arrayOfStrings)
console.log(result)


/* single string */
// let str = 'helloWorld'

// function stringreverse(str)
// {
// return str.split('').reverse().join('')
// }

// let result = stringreverse(str)
// console.log(result)