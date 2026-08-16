"use strict";
class Params {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    get getZ() {
        return this.z;
    }
    get getY() {
        return this.y;
    }
}
const params = new Params(1, 2, 3);
console.log(params.x, params.getY, params.getZ);
