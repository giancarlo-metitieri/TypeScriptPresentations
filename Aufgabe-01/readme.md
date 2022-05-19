# Array Iterations

## Overview
Dies ist eine Liste von Möglichen Iterationen:

> numbers.forEach
> numbers.map
> numbers.filter
> numbers.reduce
> numbers.reduceRight
> numbers.every
> numbers.some
> numbers.indexOf
> numbers.lastIndexOf
> numbers.find
> numbers.findIndex
> numbers.keys
> numbers.entries
> numbers.includes

Die Iterationen die hier genauer angeschaut werden, sind diese:

> numbers.forEach
> numbers.map
> numbers.filter
> numbers.indexOf

## Iterationen

### forEach

var nums : Array<number> = [1, 5];
function callbackFunction (elem : number, index : number, array : number[]) {       //callback function
    console.log("current element: ", elem)
    console.log("current index", index)
    console.log("array: ", array)
}
nums.forEach(callbackFunction)  
console.log("\n\n")
nums.forEach((elem : number, index : number, array : number[]) => {
    console.log("current element: ", elem)
    console.log("current index", index)
    console.log("array: ", array)
});
console.log("\n\n")
nums.forEach(function(elem : number) {console.log("current element: ", elem)} )     
console.log("\n\n")
nums.forEach(function(elem : number, index : number) {console.log("current element: ", elem); console.log("current index", index)} )
console.log("\n\n")
nums.forEach(function(elem : number, index : number, array : number[]) {console.log("current element: ", elem); console.log("current index", index); console.log("array: ", array); } )

### map


# Quellen

[w3-Schools](https://www.w3schools.com/js/js_array_iteration.asp)