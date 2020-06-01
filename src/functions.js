function isEven1(x) {
    return x % 2 === 0;
}

const isEven2 = (x) => {
    return x % 2 === 0;
};

const isEven3 = (x) => x % 2 === 0;
const isOdd = (x) => !isEven3(x);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(isEven1(6), isEven1(3), isOdd(1));
console.log(isEven2(6), isEven2(3));
console.log(isEven3(6), isEven3(3));

let odd = numbers.filter((x) => isOdd(x));
let even = numbers.filter((x) => isEven3(x));
console.log(odd, even);

const multiply = (x, multiplier) => x * multiplier;
numbers.forEach((number) => {
    console.log(numbers.map((x) => multiply(x, number)));
});

let multiplierTable = numbers.map((number) => numbers.map((x) => multiply(x, number)));
console.log(multiplierTable);
