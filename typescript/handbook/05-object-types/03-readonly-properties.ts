type SomeType = {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    console.log("THIS IS THE PROPERTY " + obj.prop);

    obj.prop = "mm"; // NO NO we can't do this cuz readonly
}