"use strict";
function sumFor(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    let total = 0;
    let i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const [first, ...rest] = numbers;
    return first + sumRecursion(rest);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
