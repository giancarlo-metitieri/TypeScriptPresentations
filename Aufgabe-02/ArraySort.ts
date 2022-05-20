//----------------------------------------------------------------
//Basics
//----------------------------------------------------------------

var numarray = [4, 2, 30, 7, 8];
var chararray = ["hello", "apple", "fish", "open", "monitor"];

numarray.sort();
chararray.sort();

console.log(numarray);
console.log(chararray);
//----------------------------------------------------------------
//Sorting values as numbers
//----------------------------------------------------------------

var numarray2 = [4, 2, 30, 7, 8];

numarray2.sort(function(x,y) {
    return x-y;
});

console.log(numarray2);
//----------------------------------------------------------------
//Explaination of functions
//----------------------------------------------------------------


var number = [  { id: 10, data: "hello"}, 
                { id: 9, data: "name"}, 
                { id: 3, data: "world"}, 
                { id: 6, data: "ok"}, 
                { id: 1, data: "null"}]

number.sort(function(x,y) {
    if (x.id > y.id) {
        return 1;
    }

    if (x.id < y.id) {
        return -1;
    }
    return 0;
});
/*
x = object with 7
y = object with 9

if x > y then return 1. 1 is a positive value, which means they have to be switched
if x < y then return -1. -1 is a negative number, which means they dont have to be switched 

else if x = y then ignore (0)

*/
console.log('The sorted array of objects is as follow:');
console.log(number);
//----------------------------------------------------------------
//Array Operations
//----------------------------------------------------------------
var numarray3 = [4, 2, 30, 7, 8];
numarray3.reverse();
console.log(numarray3);
