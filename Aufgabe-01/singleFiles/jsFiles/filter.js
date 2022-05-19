var numbers = [45, 4, 9, 16, 25];
var numbers3 = numbers.filter(filter);
function filter(i) {
    return i > 10;
}
console.log(numbers3);
