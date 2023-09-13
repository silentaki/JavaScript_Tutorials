const numbers = [2,3,4,5,6]

function addFirstfourDigits(arr) {
    let sum = 0
    for(let i = 0; i < Math.min(4, arr.length); i++) {
        sum += arr[i]
    }
    return sum

}

let result = addFirstfourDigits(numbers)
console.log(result)