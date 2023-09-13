/* 
Filtering is a common operation in JavaScript,
and it's used to create a new array containing elements that meet a specified condition. 
Here are some common scenarios where you can use the filter method in JavaScript:
*/

const numbers = [2, 3, 4, 5, 6, 7, 8, 7, 8,3];
const countries = ['india','canada', 'united states', 'china', 'australia']
const products = [
    { name: "watch", price: 70 },
    { name: "shoes", price: 50 },
    { name: "perfume", price: 30 },
  ];

//find even and odd numbers from an array

function evenOdd(numbers) {
  const evenNum = numbers.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(evenNum);

  const odd = numbers.filter(function (num) {
    return num % 2 != 0;
  });
  console.log(odd);
}
evenOdd(numbers);

//filter string which has length > 5

function filterCountryNames(arr) {
    const filterNames = arr.filter(function (name) {
        return name.length > 5
    })
    console.log(filterNames)

}

filterCountryNames(countries)

//filter objects based on properties. get Names of the product based on price >= 50

function getNames(arr) {
    const productNames = arr.filter(function (product) {
        return product.price >= 50
    })
console.log(productNames)
}
getNames(products)

//filter unique values from an array

function uniqueVal(arr) {
    values = arr.filter(function(value, index, self){
        return self.indexOf(value) === index
    })
    console.log(values)
}
uniqueVal(numbers)


