function multiply(multiplier, ...numbers) {
    console.log(typeof numbers);
    return numbers.map((number) => multiplier * number);
}

console.log(multiply(2, 1, 2, 3));