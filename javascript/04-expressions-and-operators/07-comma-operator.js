const array = [1, 2, 3, 4, 5];
const arrays = [array, array, array, array];

for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
    console.log(`arrays[${i}][${j}] = ${arrays[i][j]}`);
}