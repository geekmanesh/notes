function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
}

let myObj = {
    name: "My Object",
    type: "Object",
    id: 1,
    isActive: true,
};

let res = dumpProps(myObj, "myObj");

console.log(res);