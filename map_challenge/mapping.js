/* 
The map method in JavaScript is used to create a new array by
applying a function to each element of an existing array
.It's a versatile and powerful tool for various scenarios
*/
const numbers = [2, 3, 4, 5, 6, 7, 8];
const countries = ["india", "canada", "united states", "mexico"];
const products = [
  { name: "watch", price: 70 },
  { name: "shoes", price: 50 },
  { name: "perfume", price: 30 },
  { name: "clothes", price: 100 },
  { name: "laptop", price: 500 },
  { name: "phone", price: 150 },
];

//multiple each number by 2

function multiNum(arr) {
  const doubled = arr.map(function (num) {
    return num * 2;
  });
  console.log(doubled);
}

multiNum(numbers);

//converting to uppercase

function convertToUpperCase(arr) {
  const upperCaseNames = arr.map(function (name) {
    return name.toUpperCase();
  });
  console.log(upperCaseNames);
}

convertToUpperCase(countries);

//get names of product with price > 50

function ProductNames(arr) {
    const ProductList = arr.filter(function (product){
        return product.price > 50
    })
    console.log(ProductList)

    const getNames = ProductList.map(function(list) {
        return list.name
    })
    console.log(getNames)
}
ProductNames(products)
