function addSquares(a, b) {
    function square(num) {
        return num * num;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3));