var numbers = [45, 4, 9, 16, 25];
var numbers2 = numbers.map(increase);
function increase(i) {
    return i + 1;
}
console.log(numbers2);
