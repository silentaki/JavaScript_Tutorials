/*
In this code:
  
  We define a bubbleSort function that takes an array arr as its parameter.
  
  We use two nested for loops to iterate through the array. The outer loop iterates from i = 0 to n - 1, where n is the length of the array. The inner loop iterates from j = 0 to n - 1 - i.
  
  Inside the inner loop, we compare adjacent elements arr[j] and arr[j + 1]. If they are out of order (i.e., arr[j] is greater than arr[j + 1]), we swap them to sort the array in ascending order.
  
  After completing the sorting process, we return the sorted array.
  
  Finally, we call the bubbleSort function with your arrayOfStrings, and it will sort the array in ascending order.
  
  Please note that bubble sort is not the most efficient sorting algorithm for large arrays, and for practical purposes, you should use the built-in Array.prototype.sort() method as shown in the previous response.
  
 */

const arrayOfStrings = ["banana", "apple", "cherry", "date"];
const sortedArray = bubbleSort(arrayOfStrings);

function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  console.log(sortedArray);

  const arrayOfletters = ["banana", "apple", "cherry", "date"];

// Use the sort method to sort the array
arrayOfStrings.sort();

console.log(arrayOfletters);
  
  
  
  
  
  