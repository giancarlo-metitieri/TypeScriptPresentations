var numbers : number[] = [45, 4, 9, 16, 25]

let numbers3 = numbers.filter(filter)

function filter(i : number) {
    return i > 10
}

console.log(numbers3)