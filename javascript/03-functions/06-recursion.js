const funcali = function funczadeh(num) {
    num++;
    console.log(num);
    return num < 10 ? funczadeh(num) : num;
}

console.log(funcali(0));