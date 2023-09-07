/*
1) We define a function called countMatchingCharacters that takes an array arr and a character charToCount as its parameters.
2) We initialize a variable count to 0 to keep track of the count of the character.
3) We use nested for loops to iterate through the array of strings (arr) and the characters within each string.
4)Inside the inner loop, we check if the current character in the string (str[j]) is equal to the character we want to count (charToCount). If they are equal, we increment the count variable.
5) Finally, we return the count
*/



function countMatchingCharInArray(arr, charToCount) {
    let count = 0;
    for( let i in arr) {
        const str = arr[i]
        for (let j in str) {
            if(str[j] === charToCount) {
                count ++
            }
        }
    }
    return count;
  }
  
  const arrayOfStrings = ["apple", "banana", "cherry"];
  const charToCount = "a";
  const result = countMatchingCharInArray(arrayOfStrings, charToCount);
  
  console.log(`Character "${charToCount}" appears ${result} times in the array of strings.`);

  /* from a single string */

function countMatchingCharacters(inputString, targetCharacter) {
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === targetCharacter) {
        count++;
      }
    }
  
    return count;
  }
  
  const inputString = "Hello, World!";
  const targetCharacter = "o";
  
  const result1 = countMatchingCharacters(inputString, targetCharacter);
  console.log(`Number of "${targetCharacter}" in "${inputString}": ${result1}`);
