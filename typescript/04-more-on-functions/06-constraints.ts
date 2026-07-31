function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = longest([1, 2], [1, 2, 3, 4]);

const longerString = longest("Hamid", "Zeinab");

const longerNumber = longest(10, 100);