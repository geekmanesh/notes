function showProps(obj, objName) {
    let result = "";

    for (const i in obj) {
        if (Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

const myObj = {
    name: "hamid",
    type: "geek",
    age: 21,
}

showProps(myObj, "myObj");