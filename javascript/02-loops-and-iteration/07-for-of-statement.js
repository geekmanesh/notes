const arr = [3, 4, 3, 5, 6];
arr.foo = "bar";
for (const value in arr) {
    console.log(value);
}

for (const value of arr) {
    console.log(value);
}