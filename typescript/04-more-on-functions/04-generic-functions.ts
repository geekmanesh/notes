function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const n = firstElement([1, 2, 3, 2])

const s = firstElement(["a", "b"])

const b = firstElement([true])

const u = firstElement([])