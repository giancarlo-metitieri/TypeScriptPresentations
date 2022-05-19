
var numbers : number[] = [45, 4, 9, 16, 25]

let numbers2 = numbers.map(increase)

function increase(i : number) {
    return i + 1
}

console.log(numbers2)
