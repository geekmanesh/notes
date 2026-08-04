function map(func, arr) {
    const result = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i]);
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const cubedNumbers = map(function (num) {
    return num * num * num;
}, numbers);

console.log(cubedNumbers);