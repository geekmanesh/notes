const myMath = { PI: 3.14 };

const possible = delete myMath.PI;

console.log(myMath);
console.log(possible);
console.log(myMath.PI);


const impossible = delete Math.PI;
console.log(Math.PI);
console.log(impossible);
