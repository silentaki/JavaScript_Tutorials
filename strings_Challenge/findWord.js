/* finding word in a array of string */

const letters =['This','is','an', 'example','text']
const keyword = 'ex'

function findword(letters) {
    if(letters.includes(keyword)) {
        return true
    } else {
        return false
    }
}
let result =findword(letters)
console.log(result)




/* finding a word in a string */
// const str = 'This is an example text with a keyword.'
// const keyword = 'keyword'

// function findWord(str) {
//    if(str.includes(keyword)) {
//         return true
//     } else {
//         return false
//     }
// }

// let result = findWord(str)
// console.log(result)