function identity<Type>(arg: Type): Type {
    return arg;
}

// Use array

function loggingIdentity<Type>(arg: Type[]): Type[]{
    return arg.length;
}

// OR

function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
    return arg.length;
}
